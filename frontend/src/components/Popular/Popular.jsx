import './Popular.css'
import data_product from '../assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item,i)=>{
          return <Item key={i} {...item} />
        })}
      </div>
    </div>
  )
}

export default Popular
