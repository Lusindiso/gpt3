import './Navbar.scss';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';

const Navbar = () => {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='app logo' />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'>
          <a href='#home'>Home</a>
        </li>
        <li className='p__opensans'>
          <a href='#about'>About</a>
        </li>
        <li className='p__opensans'>
          <a href='#menu'>Menu</a>
        </li>
        <li className='p__opensans'>
          <a href='#awards'>Awards</a>
        </li>
        <li className='p__opensans'>
          <a href='#contact'>Contact us</a>
        </li>
      </ul>
      <div className='aoo__navbar-login'>
        <a href='#'></a>
      </div>
    </nav>
  );
};

export default Navbar;
