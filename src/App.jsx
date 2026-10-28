import './App.css'
import ProductList from './components/ProductList'
import Notice from './pages/Notice'
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <>
    <section className="app">
    <BrowserRouter>
    <div className='header'>
      <Link to="/">SPACE SHOP</Link>
      <Link to="/">상품목록</Link>
      <Link to="/notice">공지사항</Link>
    </div>
    <Routes>
      <Route path='/' element={<ProductList/>}></Route>
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
