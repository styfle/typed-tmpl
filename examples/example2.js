function getLink(o) {
    return (_a = ["<a href=\"", "\" class=\"", "\">", "</a>"], _a.raw = ["<a href=\"", "\" class=\"", "\">", "</a>"], Tmpl.print(_a, o.href, o.className, o.text));
    var _a;
}
function getUserDiv(extra) {
    var u = { first: 'John', last: 'Doe', age: 25 };
    var div = (_a = ["<div>\n\tHello ", " ", ", you are ", " years old.\n\tExtra stuff: ", "\n\t</div>"], _a.raw = ["<div>\n\tHello ", " ", ", you are ", " years old.\n\tExtra stuff: ", "\n\t</div>"], Tmpl.print(_a, u.first, u.last, u.age, extra));
    return div;
    var _a;
}
function getListItem(text, i) {
    return (_a = ["<li>#", ": ", "</li>"], _a.raw = ["<li>#", ": ", "</li>"], Tmpl.print(_a, i, text));
    var _a;
}
var link = getLink({
    href: 'http://www.ceriously.com',
    className: 'btn',
    text: 'View Profile'
});
var div = getUserDiv(link);
console.log(div.html);
var list = ['First Item', 'Second Item', 'Last <wat> Item'];
var listTemplate = (_a = ["<h1>List items</h1>\n<ul>\n\t", "\n</ul>\nHyperlink: ", ""], _a.raw = ["<h1>List items</h1>\n<ul>\n\t", "\n</ul>\nHyperlink: ", ""], Tmpl.print(_a, list.map(getListItem).join('\n  '), link));
console.log(listTemplate.html);
var _a;
