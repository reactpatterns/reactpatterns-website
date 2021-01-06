---
slug: react-server-component
title: What is React Server Component
author: Bunlong
author_title: React Patterns Team
author_url: https://github.com/Bunlong
author_image_url: https://avatars1.githubusercontent.com/u/37023003?s=400&u=0049c6773040efb265cdf622076305f8b47facec&v=4
tags: [server]
image: /img/react-server-component.png
---

![What is React Server Component?](/img/react-server-component.png "What is React Server Component?")

## What is React Server Component?

React Server Component (CSR) is a new component in React.

Recently, All components in React are client-side component (MyComponent.js) but now you can create them as server-side component by just adding `.server` (MyComponent.server.js).

Anyway client-size component and server-size component work together very well.

<!--truncate-->

## What new in React Server Component?

### React Server Component allows static content render faster

Server-side components can't have any interactivity like using `useState` hook but they can import client-size components with which the user interact.

### Won't affect the bundle size

Whatever library you include inside your server component as well as the text content it won't affect the bundle size because it is render on the server.

### Accessing database directly

Imagine accesing database directly from your components instead of calling API.

Accessing data by calling API:

```js
const users = fetch('http://localhost:8000/users).json();
```

You can access your data as below:

```js
const users = db.query(
  `SELECT * FROM users WHERE name LIKE $1`,
  ['%' + searchText + '%']
).rows;
```

The feature is still in the experimental phase so keep an eye on the upcoming version of React.
