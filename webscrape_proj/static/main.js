const graphData = {
    type: 'line',
    data: {
        labels: ['', '', '', '', '','', '', '', '', ''],
        datasets: [{
            label: 'Bitcoin-BTC Price',
            data: [0,0,0,0,0,0,0,0,0,0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            fill:true,
            borderWidth: 1
        }]
    },
    options: {},
    plugins:[ChartDataLabels],
        options:{}
}

const graphData_2 = {
    type: 'line',
    data: {
        labels: ['', '', '', '', '','', '', '', '', ''],
        datasets: [{
            label: 'BinanceCoin-BNB',
            data: [0,0,0,0,0,0,0,0,0,0],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
            ],
            fill:true,
            borderWidth: 1
        }]
    },
    options: {},
    plugins:[ChartDataLabels],
        options:{}
}

const graphData_3 = {
    type: 'line',
    data: {
        labels: ['', '', '', '', '','', '', '', '', ''],
        datasets: [{
            label: 'Ethereum-ETH Price',
            data: [0,0,0,0,0,0,0,0,0,0],
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
            ],
            fill:true,
            borderWidth: 1
        }]
    },
    options: {},
    plugins:[ChartDataLabels],
        options:{}
}

const graphData_4 = {
    type: 'line',
    data: {
        labels: ['', '', '', '', '','', '', '', '', ''],
        datasets: [{
            label: 'Solana-SOL',
            data: [0,0,0,0,0,0,0,0,0,0],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
  
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
            ],
            fill:true,
            borderWidth: 1
        }]
    },
    options: {},
    plugins:[ChartDataLabels],
        options:{}
}

const ctx = document.getElementById('myChart').getContext('2d');
const ctx_2 = document.getElementById('myChart_2').getContext('2d');
const ctx_3 = document.getElementById('myChart_3').getContext('2d');
const ctx_4 = document.getElementById('myChart_4').getContext('2d');
const date_variable = document.getElementById('cur_date');




const myChart = new Chart(ctx, graphData);
const myChart_2 = new Chart(ctx_2, graphData_2);
const myChart_3 = new Chart(ctx_3, graphData_3);
const myChart_4 = new Chart(ctx_4, graphData_4);

//https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
var socket = new WebSocket('ws://localhost:8000/ws/graph/');

//Each time an update is recieved, the onmessage event occurs and runs the function for updating the graph data
socket.onmessage = function(e){
    var djangoData = JSON.parse(e.data);
    console.log(djangoData)
 

    var newGraphData = graphData.data.datasets[0].data
    var newGraphData_2 = graphData_2.data.datasets[0].data
    var newGraphData_3 = graphData_3.data.datasets[0].data
    var newGraphData_4 = graphData_4.data.datasets[0].data
   
    // taking the first element (most recent data)
    newGraphData.shift();
    newGraphData_2.shift();
    newGraphData_3.shift();
    newGraphData_4.shift();

    // adds the current data to the end of the array
    newGraphData.push(djangoData.value);
    newGraphData_2.push(djangoData.value_2);
    newGraphData_3.push(djangoData.value_3);
    newGraphData_4.push(djangoData.value_4);

    graphData.data.datasets[0].data = newGraphData;
    graphData_2.data.datasets[0].data = newGraphData_2;
    graphData_3.data.datasets[0].data = newGraphData_3;
    graphData_4.data.datasets[0].data = newGraphData_4;

    date_variable.innerHTML = djangoData.date_value;

    myChart.update();
    myChart_2.update();
    myChart_3.update();
    myChart_4.update();


}