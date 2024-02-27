function createChart(contextId, type, data){
	
	var pieChartOptions = {
		responsive: true,
		maintainAspectRatio: false // This prevents Chart.js from overwriting canvas width and height
	  };
	
	console.log(data);
	  console.log(`search for canvas with Id: ${contextId}`);
	ctx = document.getElementById(contextId).getContext('2d');
	new Chart(ctx, {
		type: type,
		data: data,
		options: pieChartOptions
	});
}
function printCharts(){
	fetch('/_data/charts.json')
	.then((response) => response.json())
	.then((charts) => {
		charts.forEach((data,_) => {
			console.log(data);
			createChart(data.title,data.type,data );	
		} )
		
	});
}

printCharts();
