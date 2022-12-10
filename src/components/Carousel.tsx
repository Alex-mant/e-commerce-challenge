import styled from 'styled-components';
import iconNext from '../../images/icon-next.svg';
import iconPrev from '../../images/icon-previous.svg';

import product1 from '../../images/image-product-1.jpg'
import product2 from '../../images/image-product-2.jpg'
import product3 from '../../images/image-product-3.jpg'
import product4 from '../../images/image-product-4.jpg'

const productsCollection = [product1, product2, product3, product4];

const StyledCarousel = styled.div`
//
background: transparent;
*{
  background: white;
}
//

  position: relative;
  .productCollection{
    position: absolute;
    top: 0;
    left: 0;
    width: 375px;
    height: 300px;
    object-fit: cover;
  }
  button{
    position: absolute;
    width: 42px;
    height: 42px;
    background: #fff;
    border-radius: 50%;
    z-index: 1;
    top: 110px;
    img{
      vertical-align: middle;
      width: 12px;
      margin: 0 auto;
    }
  }
  .prev{
    left: 15px;
  }
  .next{
    right: 15px;
  }
`

const Carousel = () => {
  return (
    <StyledCarousel>
      <button className='prev'><img src={iconPrev} alt="previous" /></button>
      <img className="productCollection" src={productsCollection[0]} alt="sneakers" />
      <button className='next'><img src={iconNext} alt="next" /></button>
    </StyledCarousel>
  )
}

export default Carousel