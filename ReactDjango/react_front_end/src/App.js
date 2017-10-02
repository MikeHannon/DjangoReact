import React, { Component } from 'react'
import './App.css'
import { login } from './utils/Auth'
import View from './components/view.js'
import Snippets from './components/snippets.js'
import { Provider } from 'react-redux'
import store from './store'
class App extends Component {
  render() {
    login('michaelhannon', 'helloworld')
    return (
      <Provider store={store}>
        <div className="App">
          <View />
          <Snippets />
        </div>
      </Provider>
    )
  }
}

export default App
