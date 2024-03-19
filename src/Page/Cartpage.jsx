import { useContext } from "react"
import { CartContext } from "../App"
import ItemCart from "../Components/ItemCart"
import { NavLink } from 'react-router-dom';

function Cartpage() {

    const { cartItems, quantities } = useContext(CartContext)

    const calculateTotal = () => {
        let total = cartItems.reduce((total, item) => {
            return total + (item.price * quantities[item.id] || 0);
        }, 0);
        return total.toFixed(2);
    };

    const fakeCheckOut = () => {
        alert('thanks for your payment!  \n \njust kidding, this is a fake e-commerce')
    }

    return (
        <div className="min-h-screen bg-slate-100">
            <div className="md:pt-24">
            {cartItems && cartItems.map((item, index) => (
                <div key={index} className="p-3 px-6 md:flex md:justify-center md:p-0 md:  ">
                    <ItemCart item={item} />
                </div>
            ))}</div>

            <div className={`flex  justify-center items-center gap-4 md:py-8 pb-3 text-xl ${cartItems.length == 0 ? 'hidden' : '' } `}>
            <span className="font-bold border-b border-[#374f54]">Total Price: <span>{calculateTotal()}</span></span>
            <button className="bg-[#dfc9b3] p-2 text-white rounded" onClick={() => fakeCheckOut()}>Checkout</button>
            </div>

            <div className={`flex  justify-center items-center gap-6 pt-80 text-2xl ${cartItems.length == 0 ? '' : 'hidden' } `}>
            <span className="font-bold border-b border-[#374f54]">There's no item in the Cart</span>
            <NavLink to="/store">
            <button className="bg-[#dfc9b3] p-2 text-white rounded" >Store</button>
            </NavLink>
            </div>
        </div>
    )
}

export default Cartpage