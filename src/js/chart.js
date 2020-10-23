
'use strict';
import Chart from 'chart.js';
/*var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");*/
/*var myCanvas = document.getElementById("canvas");
myCanvas.width = 120;
myCanvas.height = 120;

function drawLine(ctx, startX, startY, endX, endY){
  ctx.beginPath();
  ctx.moveTo(startX,startY);
  ctx.lineTo(endX,endY);
  ctx.stroke();
};
function drawArc(ctx, centerX, centerY, radius, startAngle, endAngle){
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.stroke();
};
function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(centerX,centerY);
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.closePath();
  ctx.fill();
};
var myVinyls = {
  "Хорошо": 65,
  "Великолепно": 130,
  "Удовлетворительно": 65,
  "Разочарован": 0
};
var ctx = myCanvas.getContext("2d");
var Piechart = function(options){
  this.options = options;
  this.canvas = options.canvas;
  this.ctx = this.canvas.getContext("2d");
  this.colors = options.colors;

  this.draw = function(){
      var total_value = 0;
      var color_index = 0;
      for (var categ in this.options.data){
          var val = this.options.data[categ];
          total_value += val;
      }

      var start_angle = 0;
      for (categ in this.options.data){
          val = this.options.data[categ];
          var slice_angle = 2 * Math.PI * val / total_value;

          drawPieSlice(
              this.ctx,
              this.canvas.width/2,
              this.canvas.height/2,
              Math.min(this.canvas.width/2,this.canvas.height/2),
              start_angle,
              start_angle+slice_angle,
              this.colors[color_index%this.colors.length]
          );

          start_angle += slice_angle;
          color_index++;
      }

      //drawing a white circle over the chart
      //to create the doughnut chart
      if (this.options.doughnutHoleSize){
          drawPieSlice(
              this.ctx,
              this.canvas.width/2,
              this.canvas.height/2,
              this.options.doughnutHoleSize * Math.min(this.canvas.width/1.05,this.canvas.height/1.05),
              0,
              2 * Math.PI,
              "#fff"
          );
      }

  }
}
var myDougnutChart = new Piechart(
  {
      canvas:myCanvas,
      data:myVinyls,
      colors:["#fde23e","#f16e23", "#57d9ff","#937e88"],
      doughnutHoleSize:0.5
  }
);
myDougnutChart.draw();

-----******------
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
myCanvas.width = 120;
myCanvas.height = 120;
function drawMultiRadiantCircle(xc, yc, r, radientColors) {
    var partLength = (2 * Math.PI) / radientColors.length;
    var start = 0;
    var gradient = null;
    var startColor = null,
        endColor = null;

    for (var i = 0; i < radientColors.length; i++) {
        startColor = radientColors[i];
        endColor = radientColors[(i + 1) % radientColors.length];
           
        // x start / end of the next arc to draw
        var xStart = xc + Math.cos(start) * r;
        var xEnd = xc + Math.cos(start + partLength) * r;
        // y start / end of the next arc to draw
        var yStart = yc + Math.sin(start) * r;
        var yEnd = yc + Math.sin(start + partLength) * r;

        ctx.beginPath();

        gradient = ctx.createLinearGradient(xStart, yStart, xEnd, yEnd);
        gradient.addColorStop(0, startColor);
        gradient.addColorStop(1.0, endColor);

        ctx.strokeStyle = gradient;
        ctx.arc(xc, yc, r, start, start + partLength);
        ctx.lineWidth = 10;
        ctx.stroke();
        ctx.closePath();

        start += partLength;
    }
}


var someColors = [];
someColors.push('#0F0');
someColors.push('#0FF');
someColors.push('#F00');
someColors.push('#FF0');
someColors.push('#F0F');

drawMultiRadiantCircle(150, 150, 120, someColors);
*/
/*----  chart.js   -----*/
var ctx = $('#canvas').get(0).getContext('2d');

var gradientColors = [{start: '#919191',end:'#3D4975'},{start: '#BC9CFF',end: '#8BA4F9'},{start: '#6FCF97',end: '#66D2EA'},{start: '#FFE39C',end: '#FFBA9C'}];

var gradients = [];
gradientColors.forEach( function( item ){
      var gradient = ctx.createLinearGradient(0, 0, 150 , 150);
      gradient.addColorStop(0, item.start);
      gradient.addColorStop(1, item.end);
      gradients.push(gradient);
});
Chart.defaults.global.legend.align= "end";
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
      labels: ["Разочарован", "Удовлетворительно","Хорошо","Великолепно"],
      position: 'right',
      datasets: [{
          backgroundColor: gradients,
          borderColor: '#fff',
          data: [0,65,65,135]
      }]
  },
  options: {
      cutoutPercentage: 90,
      maintainAspectRatio: false,
      startAngle: 0,
      tooltips: {
          mode: 'index',
          backgroundColor: '#393e48'
      },
      layout: {
        padding: {
            right: 41,
            top: 0,
            left: 0,
            botoom: 0
        }
    },
      animation: {
        duration: 0
    },
      legend: {
          position: 'right',
          reverse: "true",
          usePointStyle: true,
          labels: {
              fontColor: 'rgba(31, 32, 65, 0.75)',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 14,
              boxWidth: 10,
              usePointStyle: true,
              
          }
      }
  }
  });

