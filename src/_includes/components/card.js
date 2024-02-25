const {html} = require('common-tags');

function Card({title, src, description, link, linkText}){
	return html`	
		<div class="card col" style="width: 18rem;">
			<img src="${src}" class="card-img-top" alt="...">
			<div class="card-body">
				<h5 class="card-title">${title}</h5>
				<p class="card-text">${description}</p>
				<a href="${link}" class="btn btn-primary">${linkText}</a>
			</div>
		</div>
	`;
}

module.exports = Card;