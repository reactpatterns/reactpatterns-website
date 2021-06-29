---
slug: react-hooks-cheat-sheet
title: React Hooks Cheat Sheet
author: Bunlong
author_title: React Patterns Team
author_url: https://github.com/Bunlong
author_image_url: https://avatars1.githubusercontent.com/u/37023003?s=400&u=0049c6773040efb265cdf622076305f8b47facec&v=4
tags: [hook]
image: /img/react-hooks-cheat-sheet.png
---

![React Hooks Cheat Sheet](/img/react-hooks-cheat-sheet.png "React Hooks Cheat Sheet")

## State Management

### useState()

Declare state.

```js
const [name, setName] = useState('Initial value');
```

Update state.

```js
setName('New value'); // directly
```

```js
setName((value) => 'New' + value); // based on previous state
```

<!--truncate-->

## Side Effects

### useEffect()

Triggers callback function only once when component is mounted.

```js
useEffect( () => {
  // Side effects, HTTP request, setTimeout, ... etc.
}, []);
```

Triggers callback function when dependency 'VALUE' is changed.

```js
useEffect(() => {
  // Side effects, HTTP request, setTimeout, ... etc.
}, [value]);
```

Cleanup side effects when component is unmounted.

```js
useEffect(() => {
  let timeout = setTimeout(doSomething, 5000);
  return () => clearTimeout(timeout);
}, [value]);
```
 
## Memoize a Callback

### useCallback()

Return new function only when dependencies change.

```js
const handleClick = useCallback(() => {
  doSomethingWith(param1, param2);
}, [param1, param2]);
```

Memoize callback for a dynamic list of elements.

```js
const handleClick = useCallback((event) => {
  const button = event.target;
  const value = button.getAttribute('data-value');
  doSomethingWith(value);
}, []);

<ul>
  {objects.map((obj) => (
    <li key={obj.id}>
      <button data-value={obj.value} onClick={handleClick}>
        {obj.value}
      </button>
    </li>
  ))}
</ul>
```

## Memoize a Value

### useMemo()

Will trigger only when dependencies change.

```js
const value = useMemo(() => {
  // evaluates only when param1 or param2 change
  return expensiveOperation(param1, param2);
}, [param1, param2]);
```

## Reference Element

### userRef()

userRef is like a "BOX" that can hold a mutable value in its current property.

```js
const inputRef = useRef(null); // initialize
...
const onButtonClick = () => {
  // current points to input element
  inputRef.current.focus(); // get reference
}

<input type="text" placeholder="Name" ref={inputRef} />
<button onClick={onButtonClick}>Focus input</button>
```

## Context API

### useContext()

Avoid props drilling using context API.

```js
// create and export context
export const ThemeContext = createContext(null);

// wrap parent component with context provider
return (
  <ThemeContext.Provider value={{theme: 'dark}}>
    <App />
  </ThemeContext.Provider>
);

// use context inside any child component
const { theme } = useContext(ThemeContext);
```

## Manage State

### useReducer()

Initialize a local state and create reducer.

```js
const initialState = {
  value: 0
};

const reducer = (state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, value: state.value + 1 };
    case 'set_to':
      return { ...state, value: state.value };
    default:
      throw new Error('Unhandled action');
  }
};
```

Create local state and dispatch actions.

```js
const [state, dispatch] = useReducer(reducer, initialState);
...
<button onClick={() => dispatch({ type: 'increment' })} />
<button onClick={() => dispatch({ type: 'set_to', value: 24 })} />
<button><button>
```

## Create Your Own Custom Hook

Custom hooks must start with `use`.

```js
const useApiResult = (param) => {
  const [result, setResult] = useState(null);
  useEffect(() => {
    // your tasks
  }, [param]);
  return { result };
};

// to use it in a component
const { result } = useApiResult('some-param');
```
