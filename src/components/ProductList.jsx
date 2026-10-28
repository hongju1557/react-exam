import { useState } from "react"
import { products } from "../datas/product"
import ProductCard from "./ProductCard"

const ProductList = ({product}) => {

    return(
        <div className="product-list">
                <h2>상품 리스트</h2>
            <table>
                <thead>
                    <tr>
                        <th>
                            번호
                        </th>
                        <th>
                            상품명
                        </th>
                        <th>
                            가격
                        </th>
                    </tr>
                </thead>
                <tbody>
            {products.map((product) =>(
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>
                            {product.name}
                        </td>
                        <td>{product.price}</td>
                        
                
                    </tr>
            ))} 


                </tbody>



            </table>
        </div>

        
    )

    

}

export default ProductList