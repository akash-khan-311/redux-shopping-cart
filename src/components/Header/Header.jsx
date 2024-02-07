import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from '../../assets/images/me.png'


const Header = () => {
  const carts = useSelector(state=> state.carts)
  const cartItem = carts.reduce((totalItem,item)=>item.cartQuantity + totalItem, 0)
    return (
        <>
          <nav className="bg-[#171C2A] py-4">
         <div className="navBar">
           <Link to={'/' } className="flex items-center gap-x-3">
             <img
               src={logo}
               alt="Logo"
               className="max-w-[60px]"
             />
             <h1 className="text-3xl text-white font-bold italic">Akash Khan</h1>
           </Link>
           <div className="flex gap-4">
             <Link to={'/'} className="navHome" id="lws-home">
               
               Home
             </Link>
             <Link to={'/cart'} href="cart.html" className="navCart" id="lws-cart">
               <i className="text-xl fa-sharp fa-solid fa-bag-shopping" />
               <span id="lws-totalCart">{cartItem}</span>
             </Link>
           </div>
         </div>
       </nav></>
    )
};

export default Header;