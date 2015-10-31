# Typed Templates
This is a *work in progress* so please provide feedback! The idea is to take advantage of ES6 Tagged Template Strings and TypeScript static analysis. This work is heavily influenced by the post by [ponyfoo.com](https://ponyfoo.com/articles/es6-template-strings-in-depth). It's worth a read before using this implementation.

## Goals
The problem with other templating systems is they do not work well with TypeScript and cannot be type safe. They usually rely on some string syntax such as `{{name}}` for [Handlebars](https://github.com/wycats/handlebars.js). This works great at first until you have a large project with hundreds of templates. Then you refactor, deploy, and cross your fingers.

The goal here is that renaming a variable should not fail siliently. Either you refactor with Visual Studio and changes the variable used inside the template, or the definition is changed only which will break the template.

This **does not** support two-way binding or any event handling.

## Usage
The way templates are rendered is quite simple.

```ts
// Call the tagged template with any substitutions
var works = 'Works!';
var h1 = Tmpl.print `<h1>My Template ${works}</h1>`;
// The result is a `SafeString` (the name is shamelessly borrowed from Handlebars).
// Repeat step 1 as needed to recursively build your template. For example:
var name = 'typed-tmpl';
var div = Tmpl.print `<div class="container">
${h1}
<p>This is the body using ${name}</p>
</div>`;
// Now we are ready to append the HTML to the DOM
document.getElementById('my-template').innerHTML = div.html;
```

## Browser support
Since we are using TypeScript, we can target ES5 which will work in IE 8+, Chrome, Firefox, etc.