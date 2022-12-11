import styled from "styled-components"

const StyledProductInfo = styled.div`
h2, h4{
  font-weight: bolder;
  margin-bottom: 10px;
}
h4{
  font-size: 12px;
  color: #d86d2a;
}
h2{
  width: 250px;
}
p{
  color: grey;
}
`

const ProductInfo = () => {
  return (
    <StyledProductInfo>
      <h4>SNEAKER COMPANY</h4>
      <h2>Fall Limited Edition Sneakers</h2>
      <p>
        These low-profile sneakers are your perfect
        casual wear companion. Featuring a durable rubber outer sole, they'll whithstand everything the weather can offer.
      </p>
    </StyledProductInfo>
  )
}

export default ProductInfo