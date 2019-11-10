// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");

let anotherHolderValue = document.getElementById('another-holder-value').textContent
let mainHolderValue = document.getElementById('main-holder-value').textContent

var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Main Holder", "Another Holder"],
    datasets: [{
      data: [parseFloat(mainHolderValue), parseFloat(anotherHolderValue)],
      backgroundColor: ['#9C8510', '#1cc88a'],
      hoverBackgroundColor: ['#7C5520', '#17a673'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
