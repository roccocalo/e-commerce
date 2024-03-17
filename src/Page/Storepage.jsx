import Item from "../Components/Item"

function StorePage({ products, error, loading }) {



    return (
        <div className="bg-slate-200">
            
            {loading && (
                <div className="text-xl font-medium">Loading posts...</div>
            )}
            {error && <div className="text-red-700">{error}</div>}

            <div className="md:grid md:grid-cols-3">
            {products && products.map((item, index) => (
                <div key={index} className="p-3 px-6  ">
                <Item item={item} />
                </div>
                
            ))}
            </div>




        </div>
    )
}

export default StorePage