import pJSON from '../package.json'
import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import reduxStore from './redux'
import { Provider } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import App from './App'

console.log(`${pJSON.name} ${pJSON.version}`)

const store = reduxStore()
export const getStore = () => { return store }

const getHistory = () => { return createBrowserHistory() }
export { getHistory }

ReactDOM.render(
  <Provider store={store}>
  	<DndProvider backend={HTML5Backend}>
    	<App />
    </DndProvider>
  </Provider>,
  document.getElementById('apnic')
)
