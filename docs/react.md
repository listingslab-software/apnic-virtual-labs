
## React

I Bootstrapped a new react app in a few minutes by using my own template developed over the past 5 years. It's based on Create React App, but adds several key technologies and coding patterns making it possible to immediately start prototyping complex apps

### Technologies used in this app

- React DND To handle the Drag & Drop requirement
- Material UI User Interface components based on Google Material Design System 
- Redux using [Toolkit](https://listingslab.com/work/javascript/redux)
- Async, promise based API integration with axios



#### Consuming WordPress API

**/src/redux/app/actions.js => getLabs()**

I've used [axios](https://www.npmjs.com/package/axios), this redux action deals with consuming the [WordPress](https://academy.apnic.net/wp-json/academy/virtual-labs) API's JSON response from 

The list is loaded once and placed into the redux store for display.

