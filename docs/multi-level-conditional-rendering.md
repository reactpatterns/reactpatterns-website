---
id: multi-level-conditional-rendering
sidebar_label: Multi-level conditional rendering
title: Multi-level Conditional Rendering
description: Multi-level conditional rendering, techniques, tips and tricks in development for React developers.
keywords: ['multi-level conditional rendering', 'reactpatterns', 'react patterns', 'reactjspatterns', 'reactjs patterns', 'react', 'reactjs', 'react techniques', 'react tips and tricks']
version: Multi-level conditional rendering
image: /img/reactpatterns-cover.png
---

What about nested conditional renderings? Let's have a look at the `List` component that can either show a list, an empty text or nothing.

```jsx
function List({ list }) {
  const isNull = !list
  const isEmpty = !isNull && !list.length

  return (
    <div>
      { isNull
          ? null
          : ( isEmpty
              ? <p>Sorry, the list is empty.</p>
              : <div>{list.map(item => <ListItem item={item} />)}</div>
            )
      }
    </div>
  )
}

// usage
<List list={null} /> // <div></div>
<List list={[]} /> // <div><p>Sorry, the list is empty.</p></div>
<List list={['a', 'b', 'c']} /> // <div><div>a</div><div>b</div><div>c</div><div>
```

It works, however I would recommend to keep the nested conditional renderings to a minimum, it makes it less readable, my recommendation would be to split it up into smaller components which themselves have conditional renderings.

```jsx
function List({ list }) {
  const isList = list && list.length

  return (
    <div>
      { isList
          ? <div>{list.map(item => <ListItem item={item} />)}</div>
          : <NoList isNull={!list} isEmpty={list && !list.length} />
      }
    </div>
  )
}

function NoList({ isNull, isEmpty }) {
  return (!isNull && isEmpty) && <p>Sorry, the list is empty.</p>
}
```
