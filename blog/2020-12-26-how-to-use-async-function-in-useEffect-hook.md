---
slug: how-to-use-async-function-in-useEffect-hook
title: How to use async function in useEffect hook?
author: Bunlong
author_title: React Patterns Team
author_url: https://github.com/Bunlong
author_image_url: https://avatars1.githubusercontent.com/u/37023003?s=400&u=0049c6773040efb265cdf622076305f8b47facec&v=4
tags: [hook]
image: /img/how-to-use-async-function-in-useEffect-hook.png
---

![How to use async function in useEffect hook?](/img/how-to-use-async-function-in-useEffect-hook.png "How to use async function in useEffect hook?")

## How to use async function in useEffect hook?

At first glance you will have an idea as following.

```jsx
useEffect(async () => {
  await someTask();
}, []);
```

**What's wrong?**

The compiler should be yielding something as following.

```
Argument of type '() => Promise<void>' is not assignable to parameter of type 'EffectCallback'.
```

<!--truncate-->

Do you start seeing the problem here? Let's take a look the [useEffect hook](https://reactjs.org/docs/hooks-reference.html#useeffect) to get more informations.

The problem is `useEffect` expects a clean-up function in return to clear the created resources before the component leaves the screen, but when we use async function it return a promise instead. 

## How to deal with async function in useEffect hook?

You can define an async function inside `useEffect` and then call it over there as following.

```jsx
useEffect(() => {
  // Create an scoped async function in the hook
  async anyNameFunction() => {
    await someTask();
  }

  // Execute the created function directly
  anyNameFunction();
}, []);
```

You can also us an IIFE (Immediately Invoked Function Expression) as following.

```jsx
useEffect(() => {
  (async anyNameFunction() => {
    await someTask();
  })();
}, []);
```
