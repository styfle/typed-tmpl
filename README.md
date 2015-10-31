# Typed Templates
This is a *work in progress*! The idea is to take advantage of ES6 Tagged Template Strings and TypeScript static analysis.

## Goals
The problem with other templating systems is they do not work well with TypeScript and cannot be type safe. They usually rely on some string syntax such as `{{name}}` for Handlebars. This works great at first until you have a large projects with hundreds of templates and you need to refactor.

The goal here is that renaming a variable should not fail siliently. Either your refactor with Visual Studio and it works as expected or the definition is changed which will fail to compile.

## Ideas
The way templates are rendered is quite simple.
1. Call the tagged template with any substitutions
```ts
var works = 'Works!';
var h1 = Tmpl.print `<h1>My Template ${works}</h1>`;
```
2. The result is a `SafeString` (the name is shamelessly borrowed from Handlebars).
3. Repeat step 1 as needed to recursively build your template. For example:
```ts
var name = 'typed-tmpl';
var div = Tmpl.print `<div class="container">
${h1}
<p>This is the body using ${name}</p>
</div>`;
```
4. Now we are ready to append the HTML to the DOM
```ts
document.getElementById('my-template').innerHTML = div.html;
```

## Browser support
Since we are using TypeScript, we can target ES5 which will work in IE 8+, Chrome, Firefox, etc.