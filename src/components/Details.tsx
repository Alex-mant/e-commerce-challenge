import styled from "styled-components";
import ProductInfo from "./ProductInfo";
import ProductPrice from "./ProductPrice";
import AddToCart from "./AddToCart";

const StyledDetails = styled.div`
  position: relative;
  padding: 25px;
  top: -5px;  
`;

const Details = () => {
  return (
    <StyledDetails>
      <ProductInfo/>
      <ProductPrice/>
      <AddToCart/>
    </StyledDetails>
  )
}

export default Details