import { useState, useEffect, useContext } from "react"

import Item from "../Components/Item"

function StorePage({ products, error, loading }) {
    const [category, setCategory] = useState("all")
    const [list, setList] = useState([])

    


    const setCart = () => {
        setList(() => {
            if (category == "all") {
                return products
            } else if (category == "men") {
                return products.filter(li => li.category == "men's clothing")
            } else if (category == "women") {
                return products.filter(li => li.category == "women's clothing")
            } else if (category == "jewelery") {
                return products.filter(li => li.category == "jewelery")
            } else {
                return products.filter(li => li.category == "electronics")
            }
        })
    }

    useEffect(() => {
        setCart()
    }, [category, products])


    return (
        <div className="bg-slate-200">


            <label htmlFor="category" className="flex items-center p-2 pt-5 px-6 justify-center">
                <h2 className="font-bold pr-2 text-xl">Category: </h2>
                <select
                    className="shadow-md rounded-xl p-1 bg-white border-[#374f54] border text-lg"
                    name="category"
                    value={category}
                    onChange={e => setCategory(e.target.value)}>
                    <option value="all">All</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="electronics">Electronics</option>
                </select>
            </label>

            {loading && (
                <div className="text-xl font-medium">Loading posts...</div>
            )}
            {error && <div className="text-red-700">{error}</div>}

            <div className="md:grid md:grid-cols-3">
                {products && list &&
                    list.map((item, index) => (
                        <div key={index} className="p-3 px-6  ">
                            <Item item={item} />
                        </div>

                    ))}
            </div>




        </div>
    )
}

export default StorePage