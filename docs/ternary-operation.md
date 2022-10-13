---
id: ternary-operation
sidebar_label: Ternary operation
title: Ternary Operation
description: Ternary operation | React Patterns, techniques, tips and tricks in development for React developers.
keywords: ['ternary operation', 'react ternary operation', 'reactpatterns', 'react patterns', 'reactjspatterns', 'reactjs patterns', 'react', 'reactjs', 'react techniques', 'react tips and tricks']
version: Ternary operation
image: /img/reactpatterns-cover.png
---

## Syntax

You can make your `if-else` statement more concise by using a ternary operation.

```jsx
condition ? expr1 : expr2
```

## For example

Imagine you have a toggle to switch between two modes, edit and view, in your component. The derived condition is a simple boolean. You can use the boolean to decide which element you want to return.

```jsx
function Item({ item, mode }) {
  const isEditMode = mode === 'EDIT'

  return (
    <div>
      { isEditMode
          ? <ItemEdit item={item} />
          : <ItemView item={item} />
      }
    </div>
  )
}
```

If your blocks in both branches of the ternary operation are getting bigger, you can use parentheses.

```jsx
function Item({ item, mode }) {
  const isEditMode = mode === 'EDIT'

  return (
    <div>
    { isEditMode ? 
      (
        <ItemEdit item={item} />
      ) : 
      (
        <ItemView item={item} />
      )
    }
    </div>
  );
}
```

The ternary operation makes the conditional rendering in React more concise than the `if-else` statement. It is simple to inline it in your return statement.
