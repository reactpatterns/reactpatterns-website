---
id: container-component
sidebar_label: Container component (Stateful component)
title: Container Component (Stateful Component)
description: Container component (Stateful component) | React Patterns, techniques, tips and tricks in development for React developers.
keywords: ['container component (stateful component)', 'child component', 'reactpatterns', 'react patterns', 'reactjspatterns', 'reactjs patterns', 'react', 'reactjs', 'react techniques', 'react tips and tricks']
version: Container component (Stateful component)
image: /img/reactpatterns-cover.png
---

A container does data fetching and then renders its corresponding sub-component.

Assume that you have a component that displays comments, you didn't know about container components, so you put everything in one place.

```jsx
const fetchSomeComments = cb =>
  cb([
    { author: "Bunlong VAN", body: "Nice to see you here!" },
    { author: "You", body: "Thanks!" }
  ])

class CommentList extends React.Component {
  this.state = { comments: [] }

  componentDidMount() {
    fetchSomeComments(comments => this.setState({ comments: comments }))
  }

  render() {
    return (
      <ul>
        {this.state.comments.map(c => (
          <li>{c.body}—{c.author}</li>
        ))}
      </ul>
    )
  }
}

ReactDOM.render(
  <CommentList />,
  document.getElementById("root")
)
```

Your component is responsible for both fetching data and presenting it. There's nothing wrong with this but you miss out on a few benefits of React.

`CommentList` can't be reused unless under the exact same circumstances.

Lets pull out data-fetching into a container component.

```jsx
class CommentListContainer extends React.Component {
  state = { comments: [] }

  componentDidMount() {
    fetchSomeComments(comments =>
      this.setState({ comments: comments }))
  }

  render() {
    return <CommentList comments={this.state.comments} />
  }
}
```

Now, let's rework `CommentList` to take comments as a prop.

```js
const CommentList = props =>
  <ul>
    {props.comments.map(c => (
      <li>{c.body}—{c.author}</li>
    ))}
  </ul>
```

What we got:
  * Separated our data-fetching and rendering concerns
  * Made our `CommentList` component reusable
  * Given `CommentList` the ability to set PropTypes
