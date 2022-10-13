---
id: with-higher-order-component
sidebar_label: With higher order component
title: With Higher Order Component
description: With higher order component | React Patterns, techniques, tips and tricks in development for React developers.
keywords: ['with higher order component', 'react ternary operation', 'reactpatterns', 'react patterns', 'reactjspatterns', 'reactjs patterns', 'react', 'reactjs', 'react techniques', 'react tips and tricks']
version: With higher order component
image: /img/reactpatterns-cover.png
---

Higher order component is a perfect match for conditional rendering in React. HOC can have multiple use cases. Yet one use case could be to alter the look of a component. To make the use case more specific, it could be to apply a conditional rendering for a component, let's have a look at a HOC that either shows a loading indicator or a desired component.

```jsx
// HOC declaration
function withLoadingIndicator(Component) {
  return function EnhancedComponent({ isLoading, ...props }) {
    if (!isLoading) {
      return <Component { ...props } />
    }

    return <div><p>Loading...</p></div>
  }
}

// Usage
const ListWithLoadingIndicator = withLoadingIndicator(List)

<ListWithLoadingIndicator
  isLoading={props.isLoading}
  list={props.list}
/>
```

In the example above, the `List` component can focus on rendering the list. It doesn't have to bother with a loading state. Ultimately you could add more HOC to shield away multiple conditional rendering edge cases.
