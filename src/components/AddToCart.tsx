import IconCart from "../utils/SVGiconCart";
import styled from "styled-components";
import { useState } from "react";

const StyledAddToCart = styled.div`
  .add-button{
    display: flex;
    justify-content: center;
    align-items: center; 
    width: 100%;
    margin: 10px 0;
    background: orange;
    height: 50px;
    border-radius: 10px;
    color: #fff;
    font-weight: bolder;
    span{
      margin-left: 15px;
    }
  }
  .select-quantity{
    background: #f7f8fd;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button{
      background: transparent;
      color: orange;
      font-size: 22px;
      font-weight: bolder;
    }
    span{
      font-weight: bolder;
    }
    
  }
`

const AddToCart = () => {
  const [quantity, setQuantity] = useState(0);

  const changeProductQuantity = (e: React.MouseEvent) => {
    const addOrRemove = (e.target as HTMLButtonElement).innerText;
    switch(addOrRemove){
      case '+':
        setQuantity(quantity+1)
        break;
      case '-':
        setQuantity(quantity-1)
        //the following line avoids using a negative quantity :
        quantity <= 0 && setQuantity(0);
        break;
      default:
        break;
    }
  }

  const addProductFromCart = () => {
    quantity !== 0 ? console.log(quantity) : console.log();
  }

  return (
    <StyledAddToCart>
      <div className="select-quantity">
        <button onClick={changeProductQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={changeProductQuantity}>+</button>
      </div>
      <button onClick={addProductFromCart} className="add-button">
        <IconCart fill="#fff" width={22} />
        <span>Add to Cart</span>
      </button>
    </StyledAddToCart>
  )
}

export default AddToCart