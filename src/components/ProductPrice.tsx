import styled from "styled-components"

const StyledProductPrice = styled.div`
  margin: 15px 0;
  div{
    width: 105px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;

  .promo-price{
    font-weight: bolder;
    font-size: 28px;
  }
  .promo{
    font-size: 14px;
    font-weight: bolder;
    padding: 3px;
    border-radius: 5px;
    color: #E6802E;
    background: #FFECE1;
  }
  .original-price{
    color: grey;
    font-weight: bolder;
    text-decoration-line: line-through;
  }
`;

const ProductPrice = () => {
  const price = 250;
  const reduction = 50/100;
  const priceAfterReduction = price - (price * reduction);
  return (
    <StyledProductPrice>
      <div>
        <p className="promo-price">{"$" + priceAfterReduction}</p>
        <p className="promo">{reduction * 100 + "%"}</p>
      </div>
      <p className="original-price">{"$" + price}</p>
    </StyledProductPrice>
  )
}

export default ProductPrice