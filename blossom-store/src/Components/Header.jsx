import logo from '../Assets/Images/store-logo.png'
import { FaRegHeart,FaShoppingCart } from 'react-icons/fa';
import '..//Components/Header.css'
const Header = () => {
    return(
<nav className="nav-component">
    <div>
 
          <a href="/"><img src={logo}
       alt="Blossom" className="logo-img" />
      </a>
     
    </div>
    <div className="nav-center">
      <input className="search-bar" type="text" placeholder="Search Here..." />
    </div>
    <div className="right-nav">
     <ul className="nav-items">
       <li className="list-item">
        <button className="primary-btn btn">Log In </button>
       </li>
       <li className="list-item flex">
         <a className="item" href="/">
           <FaShoppingCart />
         </a>
       </li>
       <li className="flex">
          <a className="item" href="/">
            <FaRegHeart />
          </a>
       </li>
     </ul>
   </div>
   <div className="right-nav-menu">
     <ion-icon name="menu-outline"></ion-icon>
   </div>
</nav>
    )
    
}

export default Header