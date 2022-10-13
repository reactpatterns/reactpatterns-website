---
id: props-in-initial-state-is-an-anti-pattern
sidebar_label: Props in initial state is an anti-pattern
title: Props in Initial State is an Anti-pattern
description: Props in initial state is an anti-pattern | React Patterns, techniques, tips and tricks in development for React developers.
keywords: ['props in initial state is an anti-pattern', 'reactpatterns', 'react patterns', 'reactjspatterns', 'reactjs patterns', 'react', 'reactjs', 'react techniques', 'react tips and tricks']
version: Props in initial state is an anti-pattern
image: /img/reactpatterns-cover.png
---

Using props to generate state in constructor ( or getInitialState) often leads to duplication of "source of truth", for example where the real data is. This is because constructor (or getInitialState) is only invoked when the component is first created.

The danger is that if the props on the component are changed without the component being 'refreshed', the new prop value will never be displayed because the constructor function (or getInitialState) will never update the current state of the component. The initialization of state from props only runs when the component is first created.

The bad one.

```jsx
class UserPassword extends Component {
  // Constructor (or getInitialState)
  constructor(props) {
    super(props)
    this.state = {
      confirmed: false,
      inputVal: props.inputValue
    }
  }

  render() {
    return <div>{this.state.inputVal && <AnotherComponent/>}</div>
  }
}
```

The good one.

```jsx
class UserPassword extends Component {
  // Constructor function (or getInitialState)
  constructor(props) {
    super(props);
    this.state = {
      confirmed: false
    }
  }

  render() {
    return <div>{this.props.inputValue && <AnotherComponent/>}</div>
  }
}
```
