var pieChartOptions = {
	responsive: true,
	maintainAspectRatio: false, // This prevents Chart.js from overwriting canvas width and height
	scales: {
		x: {
		   display: false,
		},
		y: {
		   display: false,
		}
	 },
  };

var barChartOptions = {
	responsive: true,
	maintainAspectRatio: false, // This prevents Chart.js from overwriting canvas width and height
	scales: {
		x: {
		   display: true,
		},
		y: {
		   display: true,
		}
	 },
  };

var hBarOptions = {
	responsive: true,
	maintainAspectRatio: false, // This prevents Chart.js from overwriting canvas width and height
	indexAxis: 'y',
	scales: {
		x: {
		  stacked: true,
		},
		y: {
		  stacked: true
		}
	  }
  };

function drawSegmentValues(myPieChart)
{
    var radius = myPieChart.outerRadius;
	if(myPieChart.segments == undefined)
		return;

	for(var i=0; i<myPieChart.segments.length; i++) 
    {
        ctx.fillStyle="white";
        var textSize = canvas.width/10;
        ctx.font= textSize+"px Verdana";
        // Get needed variables
        var value = myPieChart.segments[i].value;
        var startAngle = myPieChart.segments[i].startAngle;
        var endAngle = myPieChart.segments[i].endAngle;
        var middleAngle = startAngle + ((endAngle - startAngle)/2);

        // Compute text location
        var posX = (radius/2) * Math.cos(middleAngle) + midX;
        var posY = (radius/2) * Math.sin(middleAngle) + midY;

        // Text offside by middle
        var w_offset = ctx.measureText(value).width/2;
        var h_offset = textSize/4;

        ctx.fillText(value, posX - w_offset, posY + h_offset);
    }
}