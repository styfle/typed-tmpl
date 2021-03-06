(function() {
	function getLink(o: { href: string, className:string, text: string}) {
		return Tmpl.print `<a href="${o.href}" class="${o.className}">${o.text}</a>`;
	}
	function getUserDiv(extra: Tmpl.SafeString) {
		var u = {first: 'John', last: 'Doe', age: 25};
		var div = Tmpl.print `<div>
		Hello ${u.first} ${u.last}, you are ${u.age} years old.
		Extra stuff: ${extra}
		</div>`;
		return div;
	}

	function getListItem(text: string, i: number) {
		return Tmpl.print `<li>#${i}: ${text}</li>`;
	}

	var link = getLink({
		href: 'http://www.ceriously.com',
		className:'btn',
		text: 'View Profile'
	});

	var div = getUserDiv(link);

	var list = ['First Item', 'Second Item', 'Last <script>alert("hack");</script> Item'];

	var listTemplate = Tmpl.print `<h1>List items</h1>
	<ul>
		${Tmpl.printEach(list, getListItem)}
	</ul>
	Hyperlink: ${link}`;

	console.log(listTemplate.getHtml())

	document.getElementById('my-template').innerHTML = listTemplate.getHtml();

})();