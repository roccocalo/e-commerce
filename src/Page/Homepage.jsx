import { NavLink } from 'react-router-dom';

function HomePage() {



    return (


        <div className="h-dvh" style={{ backgroundImage: `url('./Images/md_background.jpg')`, backgroundSize: 'cover' }}>

            <div className="text-xl text-center py-10 px-4  items-center justify-center text-white md:px-96">
                <div className="flex flex-col gap-2  bg-[#374f54]  rounded-2xl border border-none bg-opacity-80 mt-20 p-4  ">
                    <h1 className="text-3xl md:text-4xl font-semibold  ">Catch the <b className='text-[#dfc9b3]'>PrimeWave</b></h1>
                    <h2 className="text-2xl md:text-3xl font-semibold ">Unveiling the Latest in Fashion and Tech!</h2>
                    <p className="md:px-32 md:text-2xl">
                        Welcome to PrimeWave, your ultimate destination for the latest in fashion, cutting-edge electronics, and stunning jewelry pieces.</p>
                    <NavLink to="/store"> <button className='p-2 text-[#dfc9b3] font-bold rounded-xl mt-1'>Shop Now!</button></NavLink>

                </div></div>

        </div>
    )
}

export default HomePage
