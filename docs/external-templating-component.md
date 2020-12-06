---
id: conditional-rendering-with-enum
sidebar_label: Conditional rendering with enum
title: Conditional Rendering with Enum
description: Conditional rendering with enum | React Patterns, techniques, tips and tricks in development for Ract developer.
keywords: ['conditional rendering with enum', 'child component', 'reactpatterns', 'react patterns', 'reactjspatterns', 'reactjs patterns', 'react', 'reactjs', 'react techniques', 'react tips and tricks']
version: Conditional rendering with enum
image: /img/reactpatterns-cover.png
---

Last but not least there exist external solutions to deal with conditional renderings. They add control components to enable conditional renderings without JavaScript in JSX. Then it is not question anymore on how to use if else in React.

```jsx
<Choose>
  <When condition={isLoading}>
    <div><p>Loading...</p></div>
  </When>
  <Otherwise>
    <div>{list.map(item => <ListItem item={item} />)}</div>
  </Otherwise>
</Choose>
```

Some people use it, personally I wouldn’t recommend it, JSX allows you to use the powerful set of JavaScript functionalities to handle conditional rendering, there is no need to add templating components to enable conditional rendering, a lot of people consider React including JSX as their library of choice, because they can handle the rendering with pure HTML and JS in JSX.
