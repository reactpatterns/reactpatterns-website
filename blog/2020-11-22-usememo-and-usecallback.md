---
slug: usememo-and-usecallback
title: When to useMemo and useCallback?
author: Bunlong
author_title: React Patterns Team
author_url: https://github.com/Bunlong
author_image_url: https://avatars1.githubusercontent.com/u/37023003?s=400&u=0049c6773040efb265cdf622076305f8b47facec&v=4
tags: [hooks, useMemo, useCallback]
image: /img/useMemo-useCallback.png
---

![When to useMemo and useCallback?](/img/useMemo-useCallback.png "When to useMemo and useCallback?")

React library provides us two built-in hooks to optimize the performance of our applications are `useMemo` and `useCallback`.

The usage of this two built-in hooks is quite similar so it can get confusing about when to use each. To clear that confusion, let's dig in and understand the actual difference and the correct way to use them both.

<!--truncate-->

## Differences

### useMemo

* Call a function and return its result
* Uses reference equality to prevent unnecessary renders

### useCallback

* Call a function and return the function without calling it
* Prevent a function from being recreated when app is rerendered

## Similars

* Both return a new value, just when one of the dependencies value changes
* **1st argument**: a function
* **2nd argument**: an array of dependencies

### Syntax

#### useMemo

```javascript
const hello = () => {
  return 'world';
};

const memoizedResult = useMemo(hello, []);
memoizedResult; // 'world'
```

#### useCallback

```javascript
const hello = () => {
  return 'world';
}

const memoizedCallback = useCallback(hello, []);
memoizedCallback(); // 'world'
```
