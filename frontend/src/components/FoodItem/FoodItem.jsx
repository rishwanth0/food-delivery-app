import React, { useContext } from 'react'
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {

    // const [itemCount, setItemCount] = useState(0);
    const {cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  return (
    <div className='food-item'> 
        <div className="food-item-img-container">
            <img src={url+"/images/"+image} alt="" className="food-item-image" />
            {!cartItems[id]
                ?<img onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" className='add' />
                :<div className="food-item-counter">
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" className="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" className="" />
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" className="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem;