---
id: destructuring
sidebar_label: What is destructuring?
title: What is Destructuring?
description: Destructuring | React Patterns, techniques, tips and tricks in development for React developers.
keywords: ['destructuring', 'react component injection', 'reactpatterns', 'react patterns', 'reactjspatterns', 'reactjs patterns', 'react', 'reactjs', 'react techniques', 'react tips and tricks']
version: Destructuring
image: /img/reactpatterns-cover.png
---

Destructuring shown assigns properties of an object to variables of the same name. There is also a longhand syntax that allows you to assign to variables of different names. 

Destructuring works with nested objects, with arrays, and can be used in variable declarations, function return values and function arguments.

## For example

Without destructuring.

```js
class Modals extends Component {
  render() {
    const modalList = this.props.modalList
    const currIndex = this.state.currIndex
    const showModal = this.state.showModal

    // ...
  }
}
```

Destructuring the objects `this.props` and `this.state`.

```js
class ChainedModals extends Component {
  render() {
    const { modalList } = this.props
    const { currIndex, showModal } = this.state
    
    // ...
  }
}
```
