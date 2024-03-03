const {html} = require('common-tags');

function ChartComponent(data){
	return html`
	<script>
	
	var options = pieChartOptions;
	var type = "${data.type}";
	if(type == 'bar'){
		options = barChartOptions;
	}
	if(type == 'bar-h'){
		type='bar';
		options = hBarOptions;
	}
	ctx = document.getElementById("${data.Id}").getContext('2d');
	var chart = new Chart(ctx, {
		type: type,
		data: ${JSON.stringify(data)},
		options: options,
	});
	</script>
	`;

	
}

module.exports = ChartComponent;