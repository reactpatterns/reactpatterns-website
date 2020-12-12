---
id: destructuring-rest-or-spread-operator
sidebar_label: Destructuring rest/spread operator
title: Destructuring Rest/Spread Operator
description: Destructuring rest/spread operator | React Patterns, techniques, tips and tricks in development for Ract developer.
keywords: ['destructuring rest/spread operator', 'child component', 'reactpatterns', 'react patterns', 'reactjspatterns', 'reactjs patterns', 'react', 'reactjs', 'react techniques', 'react tips and tricks']
version: Destructuring rest/spread operator
image: /img/reactpatterns-cover.png
---

The `...` rest operator gathers the rest of the items in the props object argument and puts them in the variable rest.

The `...` rest in the JSX is actually JSX syntax for spreading the props in the the rest object into individual props.

## For example

Without using rest/spread.

```js
function Modal(props) {
  var onClick = props.onClick
  var show = props.show
  var backdrop = props.backdrop

  return (
    <Modal show={show} backdrop={backdrop}>
      <Button onClick={onClick}>Next</Button>
    </Modal>
  )
}
```

Destructuring rest/spread operator.

```js
function Modal({ onClick, ...rest }) {
  return (
    <Modal {...rest}>
      <Button onClick={onClick}>Next</Button>
    </Modal>
  )
}
```
