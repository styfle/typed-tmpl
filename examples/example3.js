var context = {
    title: 'Template Libraries',
    subtitle: 'Rendering the future obsolete',
    items: [
        { name: "TypedTemplates", emotion: "<3" },
        { name: "Handlebars", emotion: "like" },
        { name: "Mustache", emotion: "enjoy" },
        { name: "Ember", emotion: "want" }
    ]
};
function renderList(o) {
    var title = o.title, subtitle = o.subtitle, items = o.items;
    return (_a = ["\n\t<h1>", "</h1>\n\t<small>", "</small>\n\t<ul>\n\t\t", "\n\t</ul>\n\t"], _a.raw = ["\n\t<h1>", "</h1>\n\t<small>", "</small>\n\t<ul>\n\t\t", "\n\t</ul>\n\t"], Tmpl.print(_a, title, subtitle, Tmpl.printEach(items, renderItem)));
    var _a;
}
function renderItem(o) {
    var emotion = o.emotion, name = o.name;
    return (_a = ["<li>I agree. I ", " ", ".</li>"], _a.raw = ["<li>I agree. I ", " ", ".</li>"], Tmpl.print(_a, emotion, name));
    var _a;
}
var result = renderList(context);
document.getElementById('my-template').innerHTML = result.getHtml();
