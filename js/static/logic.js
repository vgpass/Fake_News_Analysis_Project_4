


// define url to constant
const url = "uci_bootcamp/Fake_News_Analysis_Project_4/Resources/news.json"
// function pageBuilder(sampleId) {
// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});
  // ids = []
  // for (let i = 0; i < data.length; i++) {
  //   ids.push(data[i].id)
  //     console.log(ids)
  // };

//   const selectedSample = data.id.find(O => O.id==sampleId);
//     console.log(selectedSample);
//   // const selectedMeta = data.metadata.find(W => W.id==sampleId);
//   //   console.log(selectedMeta);

// })};

// function initBB() {
//   let choice = d3.select("#selDataset")
//   d3.json(url).then(function(data) {
//       let ids = data.id;
//       let titles = data.title;
//       let article = data.text;
//       let tyoe = data.label
//       ids.forEach(sampleId => {choice.append("option").text(sampleId).property("value", sampleId)
//       });
//       // console.log(ids);

//   });
//   pageBuilder(8476);
// };

// // Function to update charts when a new ID is selected.
// function optionChanged(sampleId) {
//   pageBuilder(sampleId);
//   console.log(sampleId);
// }

// initBB();

// })};
// Promise Pending
// const dataPromise = d3.json(url);
// console.log("Data Promise: ", dataPromise);
// d3.selectAll("#selDataset").on("change", function() {
//   console.log(this.value)
// });

// d3.csv(url, function(data) {
//   console.log(data);
// });

// d3.csv(url).then(function(data) {
//   console.log(data);
// // Function to build charts on initial load and again when a new test subject is selected
// });
// function pageBuilder(sampleId) {
// // Fetch the JSON data and console log it
// d3.csv(url).then(function(data) {
//   console.log(data);


//   const selectedSample = data.id.find(O => O.id==sampleId);
//     console.log(selectedSample);
  // const selectedMeta = data.metadata.find(W => W.id==sampleId);
  //   console.log(selectedMeta);


//   // Update panel with test subject metadata
//   let infoBox = d3.select("#sample-metadata").text("");
//     Object.entries(selectedMeta).forEach(([key, value]) => {
//       infoBox.append("p").append("b").text(`${key}: ${value}`)
//     });
  
//   // Construction of bar graph
//   let sample = selectedSample.sample_values;
//   let labels = selectedSample.otu_ids;
//   let hovertext = selectedSample.otu_labels;

//   let barTitle = `<b>Top 10 OTU's Found in ID ${sampleId}`;

//   let barTrace = {
//     x: sample.slice(0, 10).reverse(),
//     y: labels.slice(0, 10).map(labels => `OTU ${labels}`),
//     text: hovertext.slice(0, 10).reverse(),
//     type: 'bar',
//     orientation: 'h',
//     width: .9
    
//   };

//   let top10 = [barTrace];

//   let barLayout = {
//     title: barTitle, font: {size: 16}
//   };

//   Plotly.newPlot("bar", top10, barLayout);

//   // construction of bubble chart

//   let bubbleTitle = `<b>Top 20 OTUs for ID ${sampleId}`;
//   let bubbleTrace = {
//     x: labels.slice(0, 20),
//     y: sample.slice(0, 20),
//     text: hovertext.slice(0, 20),
//     type: 'scatter',
//     mode: 'markers',
//     marker: {size: sample,
//              color: labels,
//              colorscale: 'Rainbow'},
//   };

//   let bubbleLayout = {
//     title: bubbleTitle, font: {size: 20}
//   };

//   sampleBubble = [bubbleTrace];

//   Plotly.newPlot("bubble", sampleBubble, bubbleLayout);


//   // construction of washing gauge

//   let washing = [
//     {
//       domain: { x: [0, 1], y: [0, 1] },
//       value: selectedMeta.wfreq,
//       title: { text: "<b>Belly Button Washing Frequency</b> <br>Scrubs per Week", font: {size: 30}
//     },
//       type: "indicator",
//       mode: "gauge+number",
//       delta: { reference: 5 },
//       gauge: {
//         axis: { range: [null, 9], dtick: 1 },
//         bar: {color: 'red', thickness: .3},
//         bgcolor: 'red',
//         steps: [
//           { range: [0, 1], color: "#edeba7" },
//           { range: [1, 2], color: "#ace5ee" },
//           { range: [2, 3], color: "#abcdef" },
//           { range: [3, 4], color: "#87cefa" },
//           { range: [4, 5], color: "#1e90ff" },
//           { range: [5, 6], color: "#4169e1" },
//           { range: [6, 7], color: "#0000ff" },
//           { range: [7, 8], color: "#3f00ff" },
//           { range: [8, 9], color: "#00008b" }
//         ],
//       }
//     }
//   ];
  
//   var layout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
//   Plotly.newPlot('gauge', washing, layout);

// });
// }


