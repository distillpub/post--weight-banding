download_weights:
	mkdir -p static/diagrams/reduced_weights
	gsutil rsync -d -r gs://clarity-public/michael/weight-banding-distill-post/reduced_weights static/diagrams/reduced_weights

build:
	rm static/generated_images/*.png
	python3.7 build.py

serve:
	npm run dev
