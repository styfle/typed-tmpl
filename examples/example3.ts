// Define the main context
interface ListContext {
	title: string;
	subtitle: string;
	items: ItemContext[]
}

// Define the partial context
interface ItemContext {
	name: string;
	emotion: string;
}

// Create a context with some data
var context: ListContext = {
	title: 'Template Libraries',
	subtitle: 'Rendering the future obsolete',
	items: [
		{ name: "TypedTemplates", emotion: "<3" },
		{ name: "Handlebars", emotion: "like" },
		{ name: "Mustache", emotion: "enjoy" },
		{ name: "Ember", emotion: "want" }
	]
};

// Define the main template
function renderList(o: ListContext) {
	var {title, subtitle, items} = o;
	return Tmpl.print `
	<h1>${title}</h1>
	<small>${subtitle}</small>
	<ul>
		${Tmpl.printEach(items, renderItem)}
	</ul>
	`;
}

// Define the partial template
function renderItem(o: ItemContext) {
	var {emotion, name} = o;
	return Tmpl.print `<li>I agree. I ${emotion} ${name}.</li>`;
}

// Render using our example data
var result = renderList(context);

// Write HTML to the DOM
document.getElementById('my-template').innerHTML = result.getHtml();