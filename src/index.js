import VisualTOC                      from './diagrams/VisualTOC.html';
import ClusterSummary                 from './diagrams/ClusterSummary.html';
import ReducedWeights                 from './diagrams/ReducedWeights.html';

// eagerly initialize vtoc  as it's above the fold
const tocNav = document.getElementById('vtoc');
const visualTOC = new VisualTOC({target: tocNav});



// lazily initialize any diagram below the fold. E.G:
{
  const figure = document.getElementById('clusters-summary-container');
  const clusterSummary = new ClusterSummary({
      target: figure,
      data: {
          "model_layers_url": "banding/model_layer_weights.json",
          "image_url": "fun image",
          "n_clusters": 4,
          "n_clusters_min": 4,
          "n_clusters_max": 19,
          "cluster_path_prefix": "upscaled_banding",
      }
  });

  const reducedWeightTags = document.getElementsByTagName('ReducedWeights');
  for (let reducedWeightTag of reducedWeightTags) {
      console.log('found tag: ', reducedWeightTag, reducedWeightTag.attributes);
      let num_to_show = 42;
      if (reducedWeightTag.attributes.num_to_show) {
          num_to_show = parseInt(reducedWeightTag.attributes.num_to_show.value, 10)
      }
      new ReducedWeights({
          target: reducedWeightTag,
          data: {
              "weights_url": reducedWeightTag.attributes.weights_url.value.replace(/%/g, '%25'),
              "num_to_show": num_to_show,
          }
      });
  }

}
