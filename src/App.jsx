import './App.css';
import {Route, Routes,BrowserRouter} from "react-router-dom";
import Header from './components/Header';
import HomeHero from './components/HomeHero';
import Restourent from './components/Restourent';
import Quotes from './components/Quotes';
import Footer from './components/Footer';
import Contact from './components/Contact'
function App() {

  return (
    <>
      <BrowserRouter>
          <Header/>
          <Routes>
                 <Route path="/" element={<HomeHero/>}></Route>
                 <Route path="/Quotes" element={<Quotes/>}></Route>
                 <Route path="/Restourent" element={<Restourent/>}></Route>
                 <Route path="/Contact" element={<Contact/>}></Route>

          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
