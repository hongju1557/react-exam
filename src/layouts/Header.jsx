import {Link} from "react-router-dom"

const Header = () => {

    return(
        <div className="header">
            <Link to="/">SPACE SHOP</Link>
            <Link to="/productlist">상품 목록</Link>
            <Link to="/notice">공지사항</Link>

        </div>
    )
}

export default Header