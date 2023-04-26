import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import { CartProvider } from "./components/store/Context";


import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import Warenkorb from './components/Shop/Warenkorb'
import Formular from './components/Formular/Formular'
import Kasse from './components/Shop/Kasse'
import NotFound from './components/NotFound/NotFound'
import Merkzettel from './components/Navbar/Merkzettel'

function App() {

  return (
    <div className="App">
       <CartProvider>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route index element={<Home/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/warenkorb" element={<Warenkorb/>} />
            <Route path='/formular' element={<Formular/>}/>
            <Route path="/merkzettel" element={<Merkzettel/>} />
            <Route path="/kasse" element={<Kasse />} />            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </CartProvider>
    </div>
  )
}

export default App
