(function() {
	const flag = 'isEnabled';
	const isEnabled = false;
	var p1 = Tmpl.printIf(isEnabled) `<p>The ${flag} flag is <b>ON</b></p>`;
	var p2 = Tmpl.printUnless(isEnabled) `<p>The ${flag} flag is <b>OFF</b></p>`;
	var div = Tmpl.print `
	<div class="container">
		<p>Only one will print below</p>
		${p1}
		${p2}
		<p>Try changing the ${flag} variable</p>
	</div>`;
	// Now we are ready to append the HTML to the DOM
	document.getElementById('my-template').innerHTML = div.getHtml();

})();