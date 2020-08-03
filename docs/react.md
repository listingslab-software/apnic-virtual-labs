
## React

> Requirement; Create React App which sensibly displays a list of Virtual Labs

A new react app was bootstrapped in a few minutes from my template developed over the past 5 years. It's based on Create React App, and adds several key technologies and coding patterns making it possible to immediately start prototyping complex apps

### Technologies used here

- React DND To handle the Drag & Drop requirement
- Material UI User Interface components based on Google Material Design System 
- Redux using [Toolkit](https://listingslab.com/work/javascript/redux)
- Axios async, promise based API integration

#### Displaying the data

We compose the app using layers of MUI components connected with redux. This flexible and fast approach means we don't have to compromise or spend time on creating complex functionality like pagination. 

#### Redux

After trying many, many patterns to make the use of redux in React as easy as possible, this implementation of Redux Toolkit has emerged as the cleanest, simplest and quickest so far

#### Redux Toolkit

> The official, opinionated, batteries-included toolset for efficient Redux development

- Simple: Includes utilities to simplify common use cases like store setup, creating reducers, immutable update logic, and more.
- Opinionated: Provides good defaults for store setup out of the box, and includes the most commonly used Redux addons built-in.
- Powerful: Takes inspiration from libraries like Immer and Autodux to let you write "mutative" immutable update logic, and even create entire "slices" of state automatically.
- Effective: Lets you focus on the core logic your app needs, so you can do more work with less code


#### Consuming WordPress API

**/src/redux/app/actions.js => getLabs()**

I've used [axios](https://www.npmjs.com/package/axios), this redux action deals with consuming the [WordPress](https://academy.apnic.net/wp-json/academy/virtual-labs) API's JSON response from 

The list is loaded once and placed into the redux store for display.