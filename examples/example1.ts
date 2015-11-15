(function() {
	// Call the tagged template with any substitutions
	var works = 'Works!';
	var h1 = Tmpl.print `<h1>My Template ${works}</h1>`;
	// The result is a `SafeString` (the name is shamelessly borrowed from Handlebars).
	// Repeat step 1 as needed to recursively build your template. For example:
	var name = 'typed-tmpl';
	var div = Tmpl.print `<div class="container">
	${h1}
	<p>This is the body using ${name}</p>
	</div>`;
	// Now we are ready to append the HTML to the DOM
	document.getElementById('my-template').innerHTML = div.getHtml();
})();