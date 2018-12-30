---
title: Languages examples
path: blog/markdown-languages
tags: [vuejs, markdown]
cover: ./preview.jpeg
coverAlt: most used programming languages
date: 2018-12-21
---
## Links
Here fun doodles: [Google Doodle](https://www.google.com/doodles)

https://www.google.com/doodles

## CLI
```
npm install -g jake
npm install
```

## HTML

```html
<body>
    <h1>Page Not Found</h1>
    <p>Sorry, but the page you were trying to view does not exist.</p>
</body>
```
## CSS
```css
@media only screen and (max-width: 280px) {
    body, p {
        width: 95%;
    }
    h1 {
        font-size: 1.5em;
        margin: 0 0 0.3em;
    }
}
```
## Javascript
```js
var length = methods.length;
var console = (window.console = window.console || {});

while (length--) {
method = methods[length];

phrase
    .split('-')
    .map(word => {
      if (noFormatting.indexOf(word) !== -1) {
        return word;
      }
      if (word === 'javascript') {
        return 'JavaScript';
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');

// Only stub undefined methods.
if (!console[method]) {
    console[method] = noop;
}
```
Example. The following is an Observable that pushes the values 1, 2, 3 immediately (synchronously) when subscribed, and the value 4 after one second has passed since the subscribe call, then completes:
## Typescript
```typescript
interface AddEventListenerOptions extends EventListenerOptions {
    once?: boolean;
    passive?: boolean;
}

let reportDiagnostic = createDiagnosticReporter(sys);
function updateReportDiagnostic(options?: CompilerOptions) {
    if (shouldBePretty(options)) {
        reportDiagnostic = createDiagnosticReporter(sys, /*pretty*/ true);
    }
}
```
## JSX
```jsx
import React from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}
```