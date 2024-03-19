import { useState, useContext, useEffect } from "react";
import { CartContext } from "../App"


function ItemCart({ item }) {
    const [quantity, setQuantity] = useState(1)

    const { updateQuantity, removeItemCart } = useContext(CartContext)

    const addQuantity = () => {
        setQuantity(quantity + 1)
    }

    const removeQuantity = () => {
        if (quantity == 1) return
        setQuantity(quantity - 1)
    }

    useEffect(() => {
        updateQuantity(item.id, quantity);
    }, [quantity]);

    return (
        <>
            <div className="p-5 border-2 border-[#374f54]  rounded flex flex-col items-center gap-3 shadow-xl bg-white dark:bg-[#414141]  md:hidden" >

                <p className="font-bold text-2xl text-center   ">{item.title}</p>
                <img className="w-3/5 mt-1 md:w-auto " src={item.image} alt="" />
                <span className="flex items-center gap-1 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#374f54] fill-current " height="24" viewBox="0 -960 960 960" width="24"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" /></svg>
                    <p className="text-xl">{item.rating.rate}/5</p>
                </span>
                <p className="text-xl font-semibold">{item.price}$</p>
                <div className="border-b-2 border-[#dfc9b3] flex justify-center items-center gap-2 text-lg">
                    <button className="px-2 text-[#374f54] dark:text-[#dfc9b3] text-2xl" onClick={() => removeQuantity()}>-</button>
                    <span>{quantity}</span>
                    <button className="px-2 text-[#374f54] dark:text-[#dfc9b3] text-2xl" onClick={() => addQuantity()}>+</button>
                </div>
                <button className="p-2 px-6 bg-[#374f54] text-white  rounded-md" onClick={() => removeItemCart(item)}>Delete</button>
            </div>

            <div className="hidden md:grid grid-cols-2 p-5 border-b border-[#374f54] dark:border-slate-100 rounded shadow-xl bg-white dark:bg-[#414141] w-[900px]">
                <div className="flex justify-center pr-4 items-center">
                    <img className=" w-auto h-32 object-cover object-center" src={item.image} alt="" />
                </div>
                <div className="flex flex-col gap-3 justify-center  ">
                    <p className="font-bold text-2xl text-center pb-2   ">{item.title}</p>
                    <div className="flex gap-10 justify-end items-center pr-4">
                        <span className="flex items-center gap-1 ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#374f54] fill-current " height="24" viewBox="0 -960 960 960" width="24"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" /></svg>
                            <p className="text-xl">{item.rating.rate}/5</p>
                        </span>
                        <p className="text-xl font-semibold">{item.price}$</p>
                        <div className="border-b-2 border-[#dfc9b3]  flex justify-center items-center gap-2 text-lg">
                            <button className="px-2 text-[#374f54] dark:text-[#dfc9b3] text-2xl" onClick={() => removeQuantity()}>-</button>
                            <span >{quantity}</span>
                            <button className="px-2 text-[#374f54] dark:text-[#dfc9b3] text-2xl" onClick={() => addQuantity()}>+</button>
                        </div>
                        <button className="p-2 px-6 bg-[#374f54] text-white rounded-md" onClick={() => removeItemCart(item)}>Delete</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ItemCart