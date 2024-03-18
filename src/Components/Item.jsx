import { useState, useContext } from "react";
import { CartContext } from "../App"

function Item({ item }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded)};

        const { addToCart } = useContext(CartContext)

    return (
        <div className={`p-5 border-2 border-[#374f54] rounded flex flex-col items-center gap-3 shadow-xl bg-white md:h-[600px] ${isExpanded ? 'md:h-[700px]' : ''}`}>
          
            <p className="font-bold text-2xl text-center md:h-14  ">{item.title}</p>
            <img className="w-3/5 mt-1 md:w-auto md:h-2/5 " src={item.image} alt="" />
            <span className="flex items-center gap-1 ">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#374f54] fill-current "  height="24" viewBox="0 -960 960 960" width="24"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
            <p className="text-xl">{item.rating.rate}/5</p>
            </span>
            <p className="text-xl font-semibold">{item.price}$</p>

            <div className="">
                <p className={`text-center overflow-hidden ${isExpanded ? 'md:max-h-[173px]' : 'md:max-h-24 max-h-48'}`} onClick={toggleExpanded}>{item.description}</p>
                
            </div>

            <button className="p-2 px-6 bg-[#374f54] text-white rounded-md" onClick={() => addToCart(item)}>Add To Cart</button>

        </div>
    )
}

export default Item