## React
- `Mounting`, `Updating`, and `Unmounting` are the three main phases in react

### Mounting
- `Mounting` in React refers to the process by which a component is created and inserted into the DOM. 
- This is the first phase in the lifecycle of a React component, and it includes a series of methods that are called in a specific order to set up and display the component.
- The render()  is the method that actually outputs the HTML to the DOM.
- The local state in any component is set to the default value when the component is mounted and not when it is rendered

## Unmouting phase
- In the `updating` phase, the component gets updated while being present in the DOM. 
- In the `unmounting` phase, the component is removed from the DOM.

## Rendering
- “Rendering” is anytime the function(Component) gets called which is sending you some instruction on creating a DOM
- “Mounting” is when the component rendered for the first time i.e. react builds the DOM for this component for the first time.

## Rerendering
- A “re-render” is when the React calls the function component again to get a new set of instruction on an already mounted component.
- the first "render" is going to lead to React "mounting" stuff to the DOM, and re-renders just update the DOM but don't mount since mounting just happens once.

## Hydration
- Hydration in web development refers to the process of taking a server-rendered HTML page and making it interactive by attaching event listeners and other dynamic behaviors using client-side JavaScript.
- In SSR (Server-side Rendering), the HTML and JavaScript are generated on the server and sent to the client as a fully-formed document. However, this HTML is still just a static representation of the page. Hydration is still necessary to attach event listeners to the page and make it interactive and dynamic. Once the HTML and JavaScript bundles have been downloaded by the browser, the JavaScript takes over and attaches event listeners to the HTML, allowing for a fully interactive user experience.

- Hydration isn't needed in client-side rendering (CSR) because the entire JavaScript bundle is loaded and executed on the client, which includes all the necessary event listeners and JavaScript behavior. This means that the JavaScript code can directly manipulate the HTML elements that it created, without the need for hydration. Unlike server-side rendering (SSR), where HTML is generated on the server and sent to the client as a fully-formed

## Debugging Strategies
- Using Developer Tools
  - React Developer Tools:
    - It allows you to inspect the component tree, view props and state, and see how components are rendered.
  - Browser Developer Tools:
- Console Logging
- Error Boundaries
- Using TypeScript
  TypeScript for Static Typing:
- Debugging Tools: breakpoints
- Testing
  - Unit Testing with Jest:
  - End-to-End Testing: cypress
  - Integration Testing:

### REFERENCES
- https://reacttraining.com/blog/mount-vs-render