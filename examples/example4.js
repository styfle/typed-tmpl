(function () {
    var flag = 'isEnabled';
    var isEnabled = false;
    var p1 = (_a = ["<p>The ", " flag is <b>ON</b></p>"], _a.raw = ["<p>The ", " flag is <b>ON</b></p>"], Tmpl.printIf(isEnabled)(_a, flag));
    var p2 = (_b = ["<p>The ", " flag is <b>OFF</b></p>"], _b.raw = ["<p>The ", " flag is <b>OFF</b></p>"], Tmpl.printUnless(isEnabled)(_b, flag));
    var div = (_c = ["\n\t<div class=\"container\">\n\t\t<p>Only one will print below</p>\n\t\t", "\n\t\t", "\n\t\t<p>Try changing the ", " variable</p>\n\t</div>"], _c.raw = ["\n\t<div class=\"container\">\n\t\t<p>Only one will print below</p>\n\t\t", "\n\t\t", "\n\t\t<p>Try changing the ", " variable</p>\n\t</div>"], Tmpl.print(_c, p1, p2, flag));
    document.getElementById('my-template').innerHTML = div.getHtml();
    var _a, _b, _c;
})();
