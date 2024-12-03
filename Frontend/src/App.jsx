import { Outlet } from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"


function App() {

  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
    
      </Provider>
    </>
  )
}

export default App
