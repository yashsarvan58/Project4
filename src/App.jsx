
import './App.css'

import React from 'react'
import PageRoutes from './PageRoutes'
import { Provider } from 'react-redux'
import Store from './Slice/Store'



const App = () => {
  return (
    <div ><Provider store={Store}>
          <PageRoutes/>
    </Provider>
 

    </div>
  )
}

export default App

