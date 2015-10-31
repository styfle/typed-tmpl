var works = 'Works!';
var h1 = (_a = ["<h1>My Template ", "</h1>"], _a.raw = ["<h1>My Template ", "</h1>"], Tmpl.print(_a, works));
var name = 'typed-tmpl';
var div = (_b = ["<div class=\"container\">\n", "\n<p>This is the body using ", "</p>\n</div>"], _b.raw = ["<div class=\"container\">\n", "\n<p>This is the body using ", "</p>\n</div>"], Tmpl.print(_b, h1, name));
document.getElementById('my-template').innerHTML = div.html;
var _a, _b;
