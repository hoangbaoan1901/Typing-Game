const ctx = document.getElementById('myChart').getContext('2d');

var data = {
  labels:[0],
  datasets:[{
    data: [0],
    label:"User",
    borderColor: "#43FFAF",
    fill : false,
  }]
}

let chart = new Chart(ctx, {
    type: 'line',
    options: {
        scales:{
            yAxes:[{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Words per Minute'
              },
                ticks:{
                    beginAtZero : true,
                    stepSize : 1
                }
                
            }]
        }
    },
    data: data,
  options: {
    title: {
      display: true,
      text: "User's Word Per Minute"
    }
  }
});

// Chart.defaults.global.elenments.line.fill = false; // vô hiệu hóa fill for all

let a = JSON.parse(localStorage.getItem('results'))
function addData(newData){
  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(newData)
  });
  chart.update();
}
for (let i of a){
  addData(parseInt(i))
}
function addLabel(newLabel){
  chart.data.labels.push(newLabel);
  chart.update()
}

for (let k = 1 ;k<=a.length;k++){
  addLabel(k)
}
// addLabel(1)
// addData(14)
