---
id: render-callback
sidebar_label: Render callback
title: Render Callback
description: Render callback | React Patterns, techniques, tips and tricks in development for Ract developer.
keywords: ['render callback', 'reactpatterns', 'react patterns', 'reactjspatterns', 'reactjs patterns', 'react', 'reactjs', 'react techniques', 'react tips and tricks']
version: Render callback
image: /img/reactpatterns-cover.png
---

For example below, notice that we create a function `foo` which takes a callback function as a parameter. When we call `foo`, it turns around and calls back to the passed-in function.

```jsx
const foo = (hello) => {
  return hello('foo')
}

foo((name) => {
  return `hello from ${name}`
})

// hello from foo
```

As you can see, `foo` used the callback function to complete a portion of a string.

In the React world, a render callback works the same way, but returning a portion of the rendered markup.
