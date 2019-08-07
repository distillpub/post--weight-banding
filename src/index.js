import VisualTOC                      from './diagrams/VisualTOC.html';

// eagerly initialize vtoc  as it's above the fold
const tocNav = document.getElementById('vtoc');
const visualTOC = new VisualTOC({target: tocNav});

// lazily initialize any diagram below the fold. E.G:
// {
//   const figure = document.getElementById('StyleTransferExamples');
//   figure.addEventListener("ready", function() {
//     const styleTransferExamples = new StyleTransferExamples({target: figure});
//   });
// }


const weightBandingExamples = document.getElementsByClassName('weight-banding-example');
for (let bandingExample of weightBandingExamples) {
    let image = bandingExample.getElementsByTagName('IMG')[0];
    let link = document.createElement('a');
    link.href = image.src;
    link.target = '_blank';
    image.parentElement.insertBefore(link, image);
    link.appendChild(image);
}
