---
id: make-the-api-call-in-componentdidmount
sidebar_label: Make the API call
title: Make the API Call in componentDidMount()
description: Make the API call in componentDidMount(), techniques, tips and tricks in development for Ract developer.
keywords: ['make the api call in componentDidMount()', 'reactpatterns', 'react patterns', 'reactjspatterns', 'reactjs patterns', 'react', 'reactjs', 'react techniques', 'react tips and tricks']
version: Make the API call in componentDidMount()
image: /img/reactpatterns-cover.png
---

You should populate data with AJAX calls in the `componentDidMount` lifecycle method. So you can use setState to update your component when the data is retrieved.

For example using Class:

```jsx
function componentDidMount() {
  fetch('api/sms')
    .then(result => {
      const sms = result.data
      console.log('COMPONENT WILL Mount messages : ', sms)
      this.setState({sms: [...sms.content]})
    })
}
```

For example using Hook:

```jsx
useEffect(() => {
  fetch('api/sms')
    .then(result => {
      const sms = result.data
      console.log('COMPONENT WILL Mount messages : ', sms)
      this.setState({sms: [...sms.content]})
    })
}, [])
```
