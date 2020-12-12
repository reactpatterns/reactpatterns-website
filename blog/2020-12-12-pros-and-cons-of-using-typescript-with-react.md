---
slug: pros-and-cons-of-using-typescript-with-react
title: Pros and Cons of Using TypeScript with React
author: Bunlong
author_title: React Patterns Team
author_url: https://github.com/Bunlong
author_image_url: https://avatars1.githubusercontent.com/u/37023003?s=400&u=0049c6773040efb265cdf622076305f8b47facec&v=4
tags: [typescript]
image: /img/pros-and-cons-of-using-typescript-with-react.png
---

![Pros and Cons of Using TypeScript with React](/img/pros-and-cons-of-using-typescript-with-react.png "Pros and Cons of Using TypeScript with React")

## Pros

We have a positive experience with TypeScript. Let we give you an example of how TypeScript is very beneficial in a big project.

<!--truncate-->

For example you have a function called `function example(param1, param2)`.

`param1` should be a string and `param2` should be an object. When you write this function in JS, you can't define the type and shape of your params. You can pass the wrong variables to this function.

But with TypeScript, you can define the type and shape of the object. So you can't pass the wrong variable, TypeScript will highlight the error before you recognize what is wrong.

## Cons

You have to take time to write the interface, it's time-consuming but worth it.

Some libraries don't fully support TypeScript even a popular library like styled-components still has trouble with TypeScript. You find yourself have to put comment `// @ts-ignore` in components made by styled-components.
