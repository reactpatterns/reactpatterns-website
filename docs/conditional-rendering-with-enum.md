---
id: conditional-rendering-with-enum
sidebar_label: Conditional rendering with enum
title: Conditional Rendering with Enum
description: Conditional rendering with enum | React Patterns, techniques, tips and tricks in development for React developers.
keywords: ['conditional rendering with enum', 'child component', 'reactpatterns', 'react patterns', 'reactjspatterns', 'reactjs patterns', 'react', 'reactjs', 'react techniques', 'react tips and tricks']
version: Conditional rendering with enum
image: /img/reactpatterns-cover.png
---

In JavaScript an object can be used as an enum when the object is used as a map of key value pairs.

```jsx
const ENUM = {
  a: '1',
  b: '2',
  c: '3',
}
```

An enum is a great way to have multiple conditional renderings. Let's consider the notification component again, this time we can use the enum as inlined object.

```jsx
function Notification({ text, state }) {
  return (
    <div>
      {{
        info: <Info text={text} />,
        warning: <Warning text={text} />,
        error: <Error text={text} />,
      }[state]}
    </div>
  )
}
```

The state property key helps us to retrieve the value from the object. It is much more readable compared to the switch case operator.

In this case we had to use an inlined object, because the values of the object depend on the `text` property. That would be my recommended way anyway. However, if it wouldn't depend on the text property, you could use an external static enum too.

```jsx
const NOTIFICATION_STATES = {
  info: <Info />,
  warning: <Warning />,
  error: <Error />,
}

function Notification({ state }) {
  return (
    <div>
      {NOTIFICATION_STATES[state]}
    </div>
  )
}
```

Although we could use a function to retrieve the value, if we would depend on the `text` property.

```jsx
const getSpecificNotification = (text) => ({
  info: <Info text={text} />,
  warning: <Warning text={text} />,
  error: <Error text={text} />,
})

function Notification({ state, text }) {
  return (
    <div>
      {getSpecificNotification(text)[state]}
    </div>
  )
}
```

After all, the enum approach in comparison to the switch case statement is more readable. Objects as enum open up plenty of options to have multiple conditional renderings. Consider this last example to see what is possible.

```jsx
function FooBarOrFooOrBar({ isFoo, isBar }) {
  const key = `${isFoo}-${isBar}`
  return (
    <div>
      {{
        ['true-true']: <FooBar />,
        ['true-false']: <Foo />,
        ['false-true']: <Bar />,
        ['false-false']: null,
      }[key]}
    </div>
  )
}

FooBarOrFooOrBar.propTypes = {
  isFoo: React.PropTypes.boolean.isRequired,
  isBar: React.PropTypes.boolean.isRequired,
}
```
