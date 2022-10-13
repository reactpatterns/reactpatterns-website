---
id: spreading-props-on-dom-elements-is-an-anti-pattern
sidebar_label: Spreading props on DOM elements is an anti-pattern
title: Spreading props on DOM Elements is an Anti-pattern
description: spreading props on DOM elements is an anti-pattern | React Patterns, techniques, tips and tricks in development for React developers.
keywords: ['shouldComponentUpdate avoid heavy re-renders', 'reactpatterns', 'react patterns', 'reactjspatterns', 'reactjs patterns', 'react', 'reactjs', 'react techniques', 'react tips and tricks']
version: Spreading props on DOM elements is an anti-pattern
image: /img/reactpatterns-cover.png
---

Well, we usually spread the properties to the elements to avoid writing every single one manually.

```jsx
<Component {...props} />
```

This works very well, however, when we spread props into a Dom element, we run the risk of adding unknown HTML attributes, which is a bad pratice.

To see the warning in the console, a basic operation we can do is render the following component.

```jsx
const Spread = () => <div foo="bar" />
```

The message we get looks like the following.

```jsx
Unknown props `foo` on <div> tag. Remove this prop from the element
```

Because the foo property is not valid for a div element.

In this case, as we said, it's easy to figure out which attribute we are passing and remove it but, if we use the spread operator, as in the following.

```jsx
const Spread = props => <div {...props} />
```

We can't control which properties are passed from the parent.

If we use the component in the following way, there are no issues.

```js
<Spread className="foo" />
```
