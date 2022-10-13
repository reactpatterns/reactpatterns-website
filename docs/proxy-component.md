---
id: proxy-component
sidebar_label: Proxy component
title: Proxy Component
description: Proxy Component | React Patterns, techniques, tips and tricks in development for React developers.
keywords: ['proxy component', 'reactpatterns', 'react patterns', 'reactjspatterns', 'reactjs patterns', 'react', 'reactjs', 'react techniques', 'react tips and tricks']
version: Proxy Component
image: /img/reactpatterns-cover.png
---

A proxy component is a placeholder component that can be rendered to or from another component. In short a proxy component is a reusable component.

For example:

```jsx
import React from 'react'

class Button extends React.Component {
  render() {
    return <button type="button">My Button</button>
  }
}

class App extends React.Component {
  render() {
    return <Button />
  }
}

export default App
```
