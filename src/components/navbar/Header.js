import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../pages/StateProvider';

function Header() {
    const [{ basket }, dispach] = useStateValue();
  return (
    <div className='header'>
        <Link to="/">
            <img 
                className='header__logo' src='http://localhost:3000/hljLogo.png' alt='logo'/>
        </Link>
        <div className='header__search'>
            <input className='header__searchInput' type="text"/>
            <SearchIcon className='header__searchIcon'/>
        </div>
        <div className='header__nav'/>
            <div className='header__option'>
                <span className='header__optionLineOne'>Hola invitado</span>
                <span className='header__optionLineTwo'>Ingresar</span>
            </div>
            <div className='header__option'>
                <span className='header__optionLineOne'>Articulos</span>
                <span className='header__optionLineTwo'>& novedades</span>
            </div>
            <div className='header__option'>
                <span className='header__optionLineOne'>Noticias</span>
                <span className='header__optionLineTwo'>& ofertas</span>
            </div>
            <Link to="/Checkout">
                <div className='header__optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='header__optionLineTwo header__basketCount'>
                        {basket?.length}
                    </span>
                </div>
            </Link>
        <div/>
    </div>
  )
}

export default Header