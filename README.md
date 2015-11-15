# Typed Templates
This is a *work in progress* so please provide feedback! The idea is to take advantage of ES6 Tagged Template Strings and TypeScript static analysis. This work is heavily influenced by the post by [ponyfoo.com](https://ponyfoo.com/articles/es6-template-strings-in-depth). It's worth a read before using this implementation.

## The Problem
The problem with other templating systems is they do not work well with TypeScript and are not type safe. They usually rely on some their own DSL such as `{{name}}` in [Handlebars](https://github.com/wycats/handlebars.js). This works great for JavaScript, however we expect more from TypeScript, especially when you have a large project with hundreds of templates. Then you refactor, deploy, and cross your fingers.

## The Goal
Renaming a variable should not fail siliently. Refactoring with Visual Studio (or equivalent) should change all instances of the variable, including any used inside a template. Alternatively, renaming the variable without renaming the variable used inside a template should show compile time errors.

The goal is to mimic Handlebars templates with a combination of ES6 Tagged Template Strings and escaping user input.

This **does not** support two-way binding or any event handling (neither does Handlebars).

## Usage

### Simple example:

```ts
// Create some variables
var title = 'Hello World';
var it = 'Handlebars';

// Create a template with your variables
var result = Tmpl.print `<h1>${title}</h1>
<p>Making ${it} type safe!</p>`;

// Write HTML to the DOM
document.getElementById('mydiv').innerHTML = result.getHtml();
```

Result:

```html
<h1>Hello world</h1>
<p>Making Handlebars type safe!</p>
```

### Conditional example:

```ts
const flag = 'isEnabled';
const isEnabled = false;
var p1 = Tmpl.printIf(isEnabled) `<p>The ${flag} flag is <b>ON</b></p>`;
var p2 = Tmpl.printUnless(isEnabled) `<p>The ${flag} flag is <b>OFF</b></p>`;
document.getElementById('mydiv').innerHTML = p1.getHtml() + p2.getHtml();
```

Result:

```html
<p>The isEnabled flag is <b>OFF</b></p>
```

### ForEach example:

```ts
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
```

Result:

```html
<h1>Template Libraries</h1>
<small>Rendering the future obsolete</small>
<ul>
	<li>I agree. I &lt;3 TypedTemplates.</li>
	<li>I agree. I like Handlebars.</li>
	<li>I agree. I enjoy Mustache.</li>
	<li>I agree. I want Ember.</li>
</ul>
```

## Browser support
Since we are using TypeScript, we can target ES5 and support most browsers.
* IE 8+
* Chrome
* Firefox
* node.js
