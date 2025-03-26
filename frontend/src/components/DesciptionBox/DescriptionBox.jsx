import './DescriptionBox.css'

const DescriptionBox = () =>{
  return(
    <div className='descriptionBox'>
      <div className='descriptionBox-navigator'>
        <div className="descriptionBox-navbox">Description</div>
        <div className="descriptionBox-navbox fade">Review (122)</div>
      </div>
      <div className="descriptionBox-description">
          <p> An e-commerce is an online platform facilitating buying and selling of products or services over the internet.</p>
          <p>Upgrade your wardrobe with the latest fashion trends at [Your Store Name]. Explore a curated collection of stylish apparel, footwear, and accessories for every occasion. Shop now and redefine your style with exclusive designs and premium quality!</p>         
      </div>
    </div>
  )
}

export default DescriptionBox