---
slug: optimize-your-promise-by-using-async-await-in-react
title: Optimize Your Promise by Using Async/Await in React
author: Bunlong
author_title: React Patterns Team
author_url: https://github.com/Bunlong
author_image_url: https://avatars1.githubusercontent.com/u/37023003?s=400&u=0049c6773040efb265cdf622076305f8b47facec&v=4
tags: [async/await, async, await]
image: /img/optimize-your-promise-by-using-async-await.png
---

![Optimize Your Promise by Using Async/Await in React](/img/optimize-your-promise-by-using-async-await.png "Optimize Your Promise by Using Async/Await in React")

When Promise was introduced in ES5, it was meant to solve a problem with asynchronous code, and they did, but over the 2 years that separated ES5 and ES7, it was clear that promises could not be the final solution.

Promise was introduced to solve the famous callback hell problem, but they introduced complexity on their own, and syntax complexity.

How can we escape Promise syntax complexity? Good things come to those who Await.

<!--truncate-->

## Escape Syntax Complexity

### Without Using Async/Await

Don't over complicate your code and save time using Async/Await.

```js
const getUses = () => {
  fetch('https://api.example.com.com/users')
    .then((result) =>
      result
        .json()
        .then((users) => console.log(users))
        .catch((error) => console.log(error))
    )
    .catch((error) => console.log(error));
};
```

### Using Async/Await

```js
const getUsers = async () => {
  try {
    const result = await fetch('https://api.example.com.com/users');
    const users = await result.json();
    console.log(users);
  } catch (error) {
    console.log(error);
  }
};
```

## Why Async/Await?

* Added in ES6 as a native implementation by default
* Make your code cleaner
* Make your request and code maintenance easier
* Reduce .catch to handle errors

## How to Use it?

Create a function with async keyword.

```javascript
const getPhotos = async (user) => {
  ...
};
```

Use await inside an async function only.

```javascript
const response = await getPhotos('Jonh');
console.log(response);
```
