import './App.css'
import LikeButton from './components/LikeButton'
import LiveInput from './components/LiveInput'
import Page from './components/Page'
import ProductList from './components/ProductList'
import Notice from './pages/Notice'
import ProductCard from './components/ProductCard'
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom'
import { products } from './datas/product'

function App() {

  return (
    <>
    <section className="app">
    <BrowserRouter>
    <div className='header'>
      <Link to="/">SPACE SHOP</Link>
      <Link to="/productlist">상품목록</Link>
      <Link to="/notice">공지사항</Link>
    </div>
    <Routes>
      <Route path='/productlist' element={<ProductList product={products}/>}></Route>
      <Route path='/notice' element={<Notice/>}></Route>
    </Routes>
    </BrowserRouter>
    {/* <LikeButton></LikeButton>
    <LiveInput></LiveInput>
    <Page></Page> */}
    </section>
    </>
  )
}

export default App
