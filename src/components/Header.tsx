import styled from 'styled-components';
import iconMenu from '../../images/icon-menu.svg';
import iconCart from '../../images/icon-cart.svg';
import imageAvatar from '../../images/image-avatar.png';
import logo from '../../images/logo.svg';

const StyledHeader = styled.div`

//
  background: white;
  *{
    background: white;
  }
//

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 70px; 
  .left-container, .right-container{
    height: 20px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    *{
      height: 100%;
    }
  }
  .left-container{
    width: 195px;
    .burger-menu{
      margin-top: 5px;
      height: 15px;
    }
    .logo{
      object-fit: contain;
    }
  }
  .right-container{
    width: 95px;
    .shopping-list, .profil-circle {
      width: 30px;
      img{
        object-fit: contain;
        width: 100%;
      }
      .profil-circle_img{
        width: 22px;
        height: 22px;
      }
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>

      <div className='left-container'>
        <button className='burger-menu'><img src={iconMenu} alt="burger menu icon" /></button>
        <img className='logo' src={logo} alt="logo" />
      </div>

      <div className='right-container'>
        <div className='shopping-list'>
          <img src={iconCart} alt="Cart icon" />
        </div>
        <div className='profil-circle'>
          <img className='profil-circle_img'src={imageAvatar} alt="user avatar" />
        </div>
      </div>

    </StyledHeader>
  )
}

export default Header