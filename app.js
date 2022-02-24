// read json file
d3.json("samples.json").then((importedData) => {
    // console.log(importedData);
    var data = importedData.samples;
    // console.log(data)
  
    // Sort the data array using the sample value
    data.sort(function(a, b) {

      return parseFloat(b.sample_values) - parseFloat(a.sample_values);
    });


  // Slice the first 10 objects for plotting
  data = data.slice(0, 10);

  // Reverse the array due to Plotly's defaults
  data = data.reverse();

  console.log(data)

//   // Trace1 for the Greek Data
//   var trace1 = {
//     x: data.map(row => row.otu_ids),
//     y: data.map(row => row.sample_values),
//     text: data.map(row => row.otu_ids),
//     name: "Greek",
//     type: "bar",
//     orientation: "h"
//   };

//   // data
//   var chartData = [trace1];

//   // Apply the group bar mode to the layout
//   var layout = {
//     title: "Greek gods search results",
//     margin: {
//       l: 100,
//       r: 100,
//       t: 100,
//       b: 100
//     }
//   };

//   // Render the plot to the div tag with id "plot"
//   Plotly.newPlot("plot", chartData, layout);
});