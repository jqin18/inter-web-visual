var bbdata;
function loadPage(id){
  var currentSample = bbdata.samples.filter(sample => sample.id == id)[0]
  console.log(currentSample)
    // Trace1 for the Greek Data
  var trace1 = {
    x: currentSample.sample_values.slice(0,10).reverse(),
    y: currentSample.otu_ids.slice(0,10).map(row => `otu ${row}`).reverse(),
    text: currentSample.otu_labels.slice(0,10).reverse(),
    name: "OUT",
    type: "bar",
    orientation: "h"
  };

  // data
  var chartData = [trace1];

  // Apply the group bar mode to the layout
  var layout = {
    title: "",
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
  };
  
  var trace2 = {
    x: currentSample.otu_ids,
    y: currentSample.sample_values,
    mode: 'markers',
    text: currentSample.otu_labels,
    marker: {
      size: currentSample.sample_values,
      color: currentSample.otu_ids
    }
  };
  var bubbledata= [trace2];

  var layout1 = {
  title : " ",
  xaxis:{title:{
    text: "OTU_IDs"
  }
  }
};
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("bar", chartData, layout);
  Plotly.newPlot("bubble", bubbledata, layout1);

    
}

function demoinfo (id){
  document.getElementById("sample-metadata").innerHTML = "";
  var infotable = d3.select("#sample-metadata")
  var tableinfo = bbdata.metadata.filter(sample => sample.id == id)[0]
  console.log(tableinfo)
  Object.entries(tableinfo).forEach(([key, value]) => {
    infotable.append("p").text(`${key}: ${value}`)

})
}






// read json file
d3.json("samples.json").then((importedData) => {
  bbdata = importedData
  var dd = d3.select("#selDataset")
  bbdata.names.forEach(id => {
    dd.append("option").text(id).property("value", id)
  });
loadPage(bbdata.names[0])
});

function optionChanged(id){
  loadPage(id)
  demoinfo(id)

}