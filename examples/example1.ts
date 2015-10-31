// Call the tagged template with any substitutions
var works = 'Works!';
var h1 = Tmpl.print `<h1>My Template ${works}</h1>`;

var name = 'typed-tmpl';
var div = Tmpl.print `<div class="container">
${h1}
<p>This is the body using ${name}</p>
</div>`;

document.getElementById('my-template').innerHTML = div.html;