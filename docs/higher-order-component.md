---
id: higher-order-component
sidebar_label: Higher-Order component
title: Higher-Order Component
description: Higher-Order component | React Patterns, techniques, tips and tricks in development for React developers.
keywords: ['higher-order component', 'higher order component', 'reactpatterns', 'react patterns', 'reactjspatterns', 'reactjs patterns', 'react', 'reactjs', 'react techniques', 'react tips and tricks']
version: Higher-Order components
image: /img/reactpatterns-cover.png
---

## What is Higher-Order Component?

* Higher-Order Components in ReactJS is similar to Higher-Order Functions.
* A higher-order component is a function that takes a component and returns a new component.
* A higher-order component transforms a component into another component.

## For examples

Let's create a HOC that returns the component unaltered.

```jsx
const withElement = Element => () => <Element />
```

Let's make this a little bit more useful by adding the property and the color to that element.

```jsx
const withColor = Element => props => <Element {...props} color="red" />
```

Then we use this HOC (withColor) in a component.

```jsx
const Button = () => {
  return <button>My Button</button>
}

const ColoredButton = withColor(Button)
```

Then we can finally render the ColoredButton component in our app.

```jsx
function App() {
  return (
    <ColoredButton />
  )
}
```
