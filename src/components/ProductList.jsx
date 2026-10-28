import { useState } from "react"
import { products } from "../datas/product"
import ProductCard from "./ProductCard"

const ProductList = ({product}) => {

  <section>
    <h2>상품 목록</h2>
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </section>

}

export default ProductList