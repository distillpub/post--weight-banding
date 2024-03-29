import base64
import json
import os
from io import BytesIO

import numpy as np
import PIL
import PIL.Image
from lucid.misc.io.showing import _image_url
from skimage.io import imsave

# NOTE TO SELF: Run this using Python 3.7.


def png_url2im(url):
    prefix = "data:image/png;base64,"
    assert prefix == url[: len(prefix)].lower(), url
    img_content = url[len(prefix) :]
    img_content = BytesIO(base64.b64decode(img_content))
    img = PIL.Image.open(img_content)
    img = np.asarray(img)
    return img


layer_sizes = {
    "conv2d0": 64,
    "conv2d1": 64,
    "conv2d2": 192,
    "mixed3a": 256,
    "mixed3b": 480,
    "mixed4a": 508,
    "mixed4b": 512,
    "mixed4c": 512,
    "mixed4d": 528,
}

figure_html = {}


directory = "static/diagrams/"
build_template = "src/template_index.ejs"
build_final = "src/index.ejs"

reduced_weights = "static/diagrams/reduced_weights"
upscaled_weights = "static/diagrams/upscaled_weights"


def upscale_image_tag(image_tag: str) -> str:
    pre, mid, post = image_tag.split('"', 2)
    arr = png_url2im(mid)

    mult = 8

    if arr.shape[0] <= 5 and arr.shape[1] <= 5:
        arr = np.repeat(arr, mult, axis=0)
        arr = np.repeat(arr, mult, axis=1)
        # new_image_str = _image_url(arr)
        new_image_str = "data:image/png;base64," + base64.b64encode(arr).decode("utf-8")
        mid = new_image_str

    image_content = mid[len("data:image/png;base64,") :]
    image_hash = hex(hash(image_content))[4:20]

    imsave(f"static/generated_images/{image_hash}.png", arr)
    # with open(f"static/generated_images/{image_hash}.png", "wb") as f:
    #     f.write(base64.b64decode(image_content))
    new_mid = f"generated_images/{image_hash}.png"

    return '"'.join([pre, new_mid, post])


banding = "static/banding"
upscaled_banding = "static/upscaled_banding"

for f in os.listdir(banding):
    if not f.endswith(".json"):
        continue
    with open(os.path.join(banding, f), "r") as infi:
        with open(os.path.join(upscaled_banding, f), "w") as outfi:
            contents = json.loads(infi.read())
            if isinstance(contents, list):
                continue
            contents["center_images"] = [
                upscale_image_tag(image_tag) for image_tag in contents["center_images"]
            ]
            outfi.write(json.dumps(contents))

for f in os.listdir(reduced_weights):
    if not f.endswith(".json"):
        continue
    with open(os.path.join(reduced_weights, f), "r") as infi:
        with open(os.path.join(upscaled_weights, f), "w") as outfi:
            contents = json.loads(infi.read())
            contents["reduced_weights"] = [
                [upscale_image_tag(image_tag) for image_tag in row]
                for row in contents["reduced_weights"]
            ]
            outfi.write(json.dumps(contents))

for f in os.listdir(directory):
    if not f.endswith(".svg"):
        continue
    name = f.split(".")[0]
    key = "diagrams/" + name
    print("")
    print(key, end=": ")
    lines = open(directory + f).read().split("\n")
    if "<svg" in lines[0]:
        lines[0] = lines[0].replace(">", 'id="diagram-%s">' % name)
        lines[0] = lines[0].replace(">", "style='width: 100%; height: auto;'>")
    for i in range(3):
        lines[i] = lines[i].replace("clip-path", "--disabled-clip-path")
    text = []
    for line in lines:
        line = line.replace('"pattern', '"pattern' + name)
        line = line.replace("#pattern", "#pattern" + name)
        line = line.replace('"image', '"image' + name)
        line = line.replace("#image", "#image" + name)
        if ("<rect" in line or "<path" in line) and "id=" in line:
            neuron_id = line.split('id="')[1].split('"')[0]
            # print("maybe link", neuron_id)
            if "_" in neuron_id and neuron_id.split("_")[0] in layer_sizes:
                if neuron_id.count("_") > 1:
                    neuron_id = neuron_id[:-2]
                url = (
                    "https://storage.googleapis.com/distill-circuits/inceptionv1-weight-explorer/%s.html"
                    % neuron_id
                )
                # pattern_n = line.split("#pattern")[1].split(")")[0]
                # print("link found!", neuron_id)
                line = line.replace("id=", "class='unit' id=")
                text.append("<a href='%s'>" % url)
                text.append(line)
                text.append("</a>")
            elif "_" in neuron_id and neuron_id.split("_")[0] == "Places":
                layer, unit = neuron_id.split("_")[1:3]
                url = f"https://microscope.openai.com/models/inceptionv1_caffe_places365/inception_{layer}_output_0/{unit}"
                line = line.replace("id=", "class='unit' id=")
                text.append("<a href='%s'>" % url)
                text.append(line)
                text.append("</a>")
            else:
                text.append(line)
        else:
            if "<image" in line and "image/png" in line:
                # and (len(line) > 10000 or (key != "images/rot-features" and len(line) > 10000)):
                image_str = line.split('xlink:href="')[1].split('"')[0]
                image_content = image_str[len("data:image/png;base64,") :]
                image_hash = hex(hash(image_content))[4:20]
                with open(f"static/generated_images/{image_hash}.png", "wb") as f:
                    f.write(base64.b64decode(image_content))
                line = line.replace(image_str, f"generated_images/{image_hash}.png")
                print(len(image_content) // 1024, end=", ")
            if len(line) < 10000:
                line = line.replace("/>", " class='pixelated' />")
            # elif "<image" in line:
            #     image_str = line.split("xlink:href=\"")[1].split("\"")[0]
            #     arr = png_url2im(image_str)
            #     if arr.shape[0] == 5 and arr.shape[1] == 5:
            #         print(arr.shape)
            #         arr = np.repeat(arr, 4, axis=0)
            #         arr = np.repeat(arr, 4, axis=1)
            #         # new_image_str = _image_url(arr)
            #         new_image_str = 'data:image/png;base64,' + base64.b64encode(arr).decode('ascii')
            #         print(image_str)
            #         print(new_image_str)
            #         line = line.replace(image_str, new_image_str)
            text.append(line)
    figure_html[key] = "\n".join(text)


index_template = open(build_template, "r").read()
for key in figure_html:
    index_template = index_template.replace(f"{{{key}}}", figure_html[key])

open(build_final, "w").write(index_template)
