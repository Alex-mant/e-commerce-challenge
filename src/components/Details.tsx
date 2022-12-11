import styled from "styled-components";
import ProductInfo from "./ProductInfo";
import ProductPrice from "./ProductPrice";

import cartIcon from "../../images/icon-cart.svg"

const StyledDetails = styled.div`
  position: relative;
  padding: 25px;
  top: -5px;

  .addToCart{
    .add-button{
      width: 100%;
      margin: 10px 0;
      background: orange;
      height: 50px;
      border-radius: 10px;
      color: #fff;
      font-weight: bolder;
      img{
        color: #fff;
      }
    }
    .select-quantity{
      background: #3131301c;
      border-radius: 10px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      button{
        background: transparent;
        color: orange;
        font-size: 22px;
      }
    }
  }
  
`;

const Details = () => {
  return (
    <StyledDetails>
      <ProductInfo/>
      <ProductPrice/>
      <div className="addToCart">
        <div className="select-quantity">
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>
        <button className="add-button"><img src={cartIcon} alt="cart icon" /> Add to Cart</button>
      </div>
    </StyledDetails>
  )
}

export default Details