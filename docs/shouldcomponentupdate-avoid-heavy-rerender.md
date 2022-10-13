---
id: shouldcomponentupdate-avoid-heavy-re-render
sidebar_label: shouldComponentUpdate avoid heavy re-renders
title: shouldComponentUpdate Avoid Heavy Re-render
description: shouldComponentUpdate avoid heavy re-renders | React Patterns, techniques, tips and tricks in development for React developers.
keywords: ['shouldComponentUpdate avoid heavy re-renders', 'reactpatterns', 'react patterns', 'reactjspatterns', 'reactjs patterns', 'react', 'reactjs', 'react techniques', 'react tips and tricks']
version: shouldComponentUpdate avoid heavy re-renders
image: /img/reactpatterns-cover.png
---

React component re-render every time the props or state change, so imagine having to render the entire page every time there in an action, that takes a big load on the browser, that's where shouldComponentUpdate comes in, whenever React is rendering the view it checks to see if shouldComponentUpdate is returning false/true, so whenever you have a component that is static let do yourself a favor and return false or if not let check to see if the props/state has changed.

Let take a look the below example.

```jsx
const AutocompleteItem = (props) => {
  const selectedClass = props.selected === true ? 'selected' : ''
  var path = parseUri(props.url).path
  path = path.length <= 0 ? props.url : '...' + path

  return (
    <li
      onMouseLeave={props.onMouseLeave}
      className={selectedClass}>
      <i className="ion-ios-eye"
         data-image={props.image}
         data-url={props.url}
         data-title={props.title}
         onClick={props.handlePlanetViewClick} />
      <span
        onMouseEnter={props.onMouseEnter}>
        <div className="dot bg-mint" />
        {path}
      </span>
    </li>
  )
}
```

This component above has no state which causes it to re-render every time. So what we want is to convert it to a regular component and use the function `shouldComponentUpdate`. Then we want to check if the props that we use in this component have change. If there was a change return true else return false. The component becomes.

```jsx
export default class AutocompleteItem extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.url !== this.props.url || nextProps.selected !== this.props.selected
  }

  render() {
    const {props} = this;
    const selectedClass = props.selected === true ? 'selected' : ''
    var path = parseUri(props.url).path
    path = path.length <= 0 ? props.url : '...' + path

    return (
      <li
        onMouseLeave={props.onMouseLeave}
        className={selectedClass}>
        <i className="ion-ios-eye"
           data-image={props.image}
           data-url={props.url}
           data-title={props.title}
           onClick={props.handlePlanetViewClick} />
        <span
          onMouseEnter={props.onMouseEnter}>
          <div className="dot bg-mint" />
          {path}
        </span>
      </li>
    )
  }
}
```
