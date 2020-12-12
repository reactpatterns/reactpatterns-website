---
id: nested-destructuring
sidebar_label: Nested destructuring
title: Nested Destructuring
description: Nested destructuring | React Patterns, techniques, tips and tricks in development for Ract developer.
keywords: ['nested destructuring', 'reactpatterns', 'react patterns', 'reactjspatterns', 'reactjs patterns', 'react', 'reactjs', 'react techniques', 'react tips and tricks']
version: Nested destructuring
image: /img/reactpatterns-cover.png
---

Destructuring also applies to objects nested in objects. 

## For example

Without destructuring:

```jsx
function setIndexFromRoute(props) {
  const modalList = props.modalList
  const pathname = props.location.pathname

  // ...
}
```

Destructuring the nested props object.

```jsx
function setIndexFromRoute(props) {
  const { modalList, location: { pathname } } = props

  // ...
}
```
