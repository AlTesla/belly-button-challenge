const path = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"


function init(){
    var selected = d3.select("#selDataset");
    d3.json(path).then((data)=> {
        var sampleNames = data.names;
        sampleNames.forEach((sample) => {
            selected
                .append("option")
                .text(sample)
                .property("value", sample);
        });
        var firstSample = sampleNames[0];
        metadataDisplay(firstSample);
        console.log(data);
    });
}
init();
function optionChanged(newSample){
    metadataDisplay(newSample);
}

function metadataDisplay(sample){
    d3.json(path).then((data) =>{
        var metadata = data.metadata;
        var results = metadata.filter(sampleObj => sampleObj.id == sample)
        var result = results[0];
        var metadataPanel = d3.select("#sample-metadata");
        metadataPanel.html("");

        Object.entries(result).forEach(([key, value]) =>{
            metadataPanel.append("h6").text(`${key}: ${value}`);
        });
    });
}

/*
function barChart(){
  function addOTU(number){
    return "OTU " + number
  }
  let otuIDS = otu_ids[sampleNumber].map(addOTU)
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

function readConsole(data){
    for (var i = 0; i < data.names.length; i++) {
        let name = data.names[i];
        nameSelect.set(name, i);
    }
    return nameSelect
}

d3.json(path).then(function (data) {
    var samples = data.samples;

    console.log(readConsole(data))
    let select = document.getElementById("selDataset")

    readConsole(data).forEach((value, key) => {
        // Crear un elemento option con el constructor new Option
        let option = new Option(key);
        // Añadir el elemento option al select
        select.add(option);
    });

    samples.forEach((sample) => {
        sample_values.push(sample.sample_values.slice(0, 10));
        otu_ids.push(sample.otu_ids.slice(0, 10));
        otu_labels.push(sample.otu_labels.slice(0, 10));
    });

    barChart();
});



d3.selectAll("#selDataset").on("change", getData);

function getData() {
    let dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a letiable
    let dataset = dropdownMenu.property("value");
    // Initialize an empty array for the country's data
    let data = [];

    if (dataset == 'australia') {
        data = australia;
    }
    else if (dataset == 'brazil') {
        data = brazil;
    }
    else if (dataset == 'uk') {
        data = uk;
    }
    else if (dataset == 'mexico') {
        data = mexico;
    }
    else if (dataset == 'singapore') {
        data = singapore;
    }
    else if (dataset == 'southAfrica') {
        data = southAfrica;
    }
    // Call function to update the chart
    updatePlotly(data);
}

function updatePlotly(newdata) {
    Plotly.restyle("pie", "values", [newdata]);
}


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


console.log(typeof nameSelect);
console.log(sample_values);
console.log(Object.getOwnPropertyNames(sample_values));
console.log(sample_values.constructor.name);

let select = document.getElementById("selDataset");

let map = new Map();
map.set("A", "Opción A");
map.set("B", "Opción B");
map.set("C", "Opción C");

// Recorrer el Map y crear un elemento option por cada llave
map.forEach((value, key) => {
    // Crear un elemento option con el constructor new Option
    let option = new Option(value, key);
    // Añadir el elemento option al select
    select.add(option);
});*/