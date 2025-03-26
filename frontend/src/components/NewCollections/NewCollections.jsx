import './NewCollections.css'
import Item from '../Item/Item'
import new_collection from '../assets/new_collections'

const NewCollections = () => {
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
