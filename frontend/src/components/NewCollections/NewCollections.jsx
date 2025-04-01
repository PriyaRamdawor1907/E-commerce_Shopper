import './NewCollections.css'
import Item from '../Item/Item'
import { useEffect, useState } from 'react'

const NewCollections = () => {

  const [new_collection, setNewCollection] = useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/newcollections')
    .then((res)=> res.json())
    .then((data)=> setNewCollection(data))
  },[])

  return(
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item,i)=>{
          return <Item key={i} {...item}/>
        })}        
      </div>
    </div>
  )
}
export default NewCollections
