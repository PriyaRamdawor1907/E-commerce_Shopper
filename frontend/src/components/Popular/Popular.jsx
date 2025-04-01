import './Popular.css'
import Item from '../Item/Item'
import { useEffect, useState } from 'react'

const Popular = () => {

  const [popularProducts, setPopularProducts]= useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/popularinwomen')
    .then((res)=>res.json())
    .then((data)=> setPopularProducts(data))
  },[])
  

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item,i)=>{
          return <Item key={i} {...item} />
        })}
      </div>
    </div>
  )
}

export default Popular
