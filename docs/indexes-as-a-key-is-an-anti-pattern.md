---
id: indexes-as-a-key-is-an-anti-pattern
sidebar_label: Indexes as a key is an anti-pattern
title: Indexes as a Key is an Anti-pattern
description: Indexes as a key is an anti-pattern | React Patterns, techniques, tips and tricks in development for React developers.
keywords: ['indexes as a key is an anti-pattern', 'higher order function', 'reactpatterns', 'react patterns', 'reactjspatterns', 'reactjs patterns', 'react', 'reactjs', 'react techniques', 'react tips and tricks']
version: Indexes as a key is an anti-pattern
image: /img/reactpatterns-cover.png
---

Keys should be unique so that React can keep a better track of elements.

Assume you use index of an item as its key when render a list as below.

```jsx
{todos.map((todo, index) =>
  <Todo
    {...todo}
    key={index}
  />
)}
```

A key is the only thing React uses to identify DOM elements. What going on if you push an item to the list or remove items in the middle, if the key is same as before React assumes that the DOM element represents the same component as before.

The better way, each items should have a permanent and unique property, it should be assigned when the item is created.

Then we can use it the following way.

```jsx
{todos.map((todo) =>
  <Todo 
    {...todo}
    key={todo.id} 
  />
)}
```
