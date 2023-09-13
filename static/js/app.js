const path = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
var sample_values = [];
var otu_ids = [];
var otu_labels = []

var sampleNumber = 4



function init(){
  function addOTU(number){
    return "OTU " + number
  }
    var otuIDS = otu_ids[sampleNumber].map(addOTU)

  let data = [{
    type: 'bar',
      x: sample_values[sampleNumber],
      y: otuIDS,
    orientation: 'h',
      hovertext: otu_labels[sampleNumber]
  }];

  let layout = {
        height: 600,
        width: 800,
        yaxis: {autorange: 'reversed' }
    };

Plotly.newPlot('bar', data, layout);
};

d3.json(path).then(function (data) {
    var samples = data.samples;
    console.log(data)
    //console.log(data)
    samples.forEach((sample) => {
        sample_values.push(sample.sample_values.slice(0, 10));
        otu_ids.push(sample.otu_ids.slice(0, 10));
        otu_labels.push(sample.otu_labels.slice(0, 10));
    });

    init();
});








/*
var sample_values = [];
var otu_ids = [];
var otu_labels = [];

d3.json(path).then(function (data) {
var samples = data.samples;

//console.log(data)
samples.forEach((sample) => {
    sample_values.push(sample.sample_values);
    otu_ids.push(sample.otu_ids);
    otu_labels.push(sample.otu_labels);
    });

    return (sample_values, otu_ids, otu_labels);
});
let i = 0;
console.log(sample_values[i]);

var data = [
    {
    type: 'bar',
    x: sample_values,
    y: otu_ids,
    orientation: 'h',
    hovertext: otu_labels
    }
];

Plotly.newPlot('bar', data);
*/

console.log(typeof sample_values);
console.log(sample_values);
console.log(Object.getOwnPropertyNames(sample_values));
console.log(sample_values.constructor.name);
