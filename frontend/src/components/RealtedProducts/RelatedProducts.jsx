import './RelatedProducts.css'
//import data_product from '../assets/data'
import Item from '../Item/Item'
import { useEffect, useState } from 'react'

const RelatedProducts = ({category})=>{

  const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(()=>{
    fetch(`http://localhost:4000/relatedproducts/${category}`)
    .then((res)=>res.json())
    .then((data)=>setRelatedProducts(data)) 
  },[category])

  return(
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {relatedProducts.map((item,i)=>{
          return <Item key={i} {...item}/>
        })}
      </div>
    </div>
  )
}

export default RelatedProducts