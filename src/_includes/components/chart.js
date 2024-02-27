const {html} = require('common-tags');

function ChartComponent(data){
	return html`
	<script>
	var pieChartOptions = {
		responsive: true,
		maintainAspectRatio: false // This prevents Chart.js from overwriting canvas width and height
	  };
	
	ctx = document.getElementById("${data.title}").getContext('2d');
	var chart = new Chart(ctx, {
		type: "${data.type}",
		data: ${JSON.stringify(data)},
		options: pieChartOptions,
	});
	</script>
	`;

	
}

module.exports = ChartComponent;