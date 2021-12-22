import React, { useState, useEffect } from 'react'
import Search from '../components/Search'
import axios from 'axios'
import ProductCard from '../components/ProductCard'

export default function ProductList(props) {
  const [products, setProducts] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  
   const getProducts = async () => {
    const response = await axios.get('http://localhost:3001/products')
    console.log(response)
    setProducts(response.data.products)
  }
  useEffect(()=>{
  getProducts()
  },[])

  return (<div>
    <div className="products">
      <h2 style={{color:"white",textAlign:'center'}}> {props.storeName} Products</h2>
      <section className="container-grid">
        {products.map(product=>(
          <ProductCard key={product._id} 
          name={product.title} 
          rating={product.rating} 
          image={product.image} 
          onClick={()=>props.history.push(`/productdetails/${product._id}`)}
          {...product}/> 
          ))}
      </section>
    </div>  
    </div>)
}