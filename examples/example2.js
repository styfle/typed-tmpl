(function () {
    function getLink(o) {
        return (_a = ["<a href=\"", "\" class=\"", "\">", "</a>"], _a.raw = ["<a href=\"", "\" class=\"", "\">", "</a>"], Tmpl.print(_a, o.href, o.className, o.text));
        var _a;
    }
    function getUserDiv(extra) {
        var u = { first: 'John', last: 'Doe', age: 25 };
        var div = (_a = ["<div>\n\t\tHello ", " ", ", you are ", " years old.\n\t\tExtra stuff: ", "\n\t\t</div>"], _a.raw = ["<div>\n\t\tHello ", " ", ", you are ", " years old.\n\t\tExtra stuff: ", "\n\t\t</div>"], Tmpl.print(_a, u.first, u.last, u.age, extra));
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
    var list = ['First Item', 'Second Item', 'Last <script>alert("hack");</script> Item'];
    var listTemplate = (_a = ["<h1>List items</h1>\n\t<ul>\n\t\t", "\n\t</ul>\n\tHyperlink: ", ""], _a.raw = ["<h1>List items</h1>\n\t<ul>\n\t\t", "\n\t</ul>\n\tHyperlink: ", ""], Tmpl.print(_a, Tmpl.printEach(list, getListItem), link));
    console.log(listTemplate.getHtml());
    document.getElementById('my-template').innerHTML = listTemplate.getHtml();
    var _a;
})();
