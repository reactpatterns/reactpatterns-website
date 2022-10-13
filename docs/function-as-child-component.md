---
id: function-as-child-component
sidebar_label: Function as child component
title: Function as Child Component
description: Function as child component | React Patterns, techniques, tips and tricks in development for React developers.
keywords: ['function as child component', 'child component', 'reactpatterns', 'react patterns', 'reactjspatterns', 'reactjs patterns', 'react', 'reactjs', 'react techniques', 'react tips and tricks']
version: Function as child component
image: /img/reactpatterns-cover.png
---

## What is Function as Child Component?

A Function as child component is a pattern that lets you pass a render function to a component as the children prop so you can change what you can pass as children to a component.

## Usage

When you use a Function as child component, instead of passing JSX markup, you assign children as a function.

```jsx
<Foo>
  {(name) => <div>`hello from ${name}`</div>}
</Foo>
```

And the `Foo` component would look something like this.

```jsx
const Foo = ({ children }) => {
  return children('foo')
}
```

## For examples

Let take a look at a advanced example of a Function as child component.

```jsx
import React from 'react'

class PageWidth extends React.Component {
  state = { width: 0 }

  componentDidMount() {
    this.setState({ width: window.innerWidth })

    window.addEventListener(
      'resize',
      ({ target }) => {
        this.setState({ width: target.innerWidth })
      }
    )
  }

  render() {
    const { width } = this.state

    return this.props.children(width)
  }
}
```

And then you could use it as.

```jsx
<PageWidth>
  {width => <div>Page width is {width}</div>}
</PageWidth>
```

As you can see above, children is "overloaded" and passed to `PageWidth` as a function instead of being a `ReactNodeList` as nature intended. The `PageWidth` component's render method calls `this.props.children` (passing it width), which returns rendered JSX.

The real power of [render callbacks](render-callback.md) can be seen in this example. `PageWidth` will do all of the heavy lifting, while exactly what is rendered can change, depending on the render function that is passed.
