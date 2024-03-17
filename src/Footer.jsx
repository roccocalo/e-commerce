
function Footer() {



    return (
        <div className="p-2 bg-[#374f54] ">
            <div className="flex flex-col gap-4 md:pt-2">
            <div className="flex flex-col md:flex-row md:gap-12 gap-2 justify-center items-center text-white">
                <p className="font-semibold text-[#dfc9b3]">JOIN THE PRIMEWAVE COMMUNITY</p>
                <span className=" border" >
                    <input type="email" name="email" id="" placeholder="Enter your email" className="bg-[#374f54] pl-2 outline-none text-[#dfc9b3]" />
                    <button className="bg-[#dfc9b3] p-2">SUBSCRIBE</button>
                </span>
                <p className="mb-1 md:mb-0">Unlock 10% off your initial order upon registration!</p>
                
            </div>
            <div className="flex md:flex-row flex-col justify-center md:gap-20 gap-4 ">
                <ul className="flex justify-center md:gap-8 gap-4  text-[#dfc9b3]">
                    <li className="no-underline ">© {(new Date()).getFullYear()} PrimeWave </li>
                    <li className="underline md:text-white"><a href="">Blog</a></li>
                    <li className="underline md:text-white"><a href="">Terms of Service</a></li>
                    <li className="underline md:text-white"><a href="">FAQ</a></li>
                </ul>
                <ul className="flex justify-center gap-8  text-white">
                    <li className="underline"><a href="https://www.freepik.com/free-photo/fast-fashion-vs-slow-sustainable-fashion_19533979.htm#page=2&position=16&from_view=search&track=ais&uuid=e5968f40-afb3-4b7c-8aed-173504117319">Image by Freepik</a></li>
                    <li className="underline"><a href="https://www.flaticon.com/free-icons/internet" >Logo by Flaticon</a></li>
                </ul>
            </div>
            <div className="flex justify-center items-center gap-2  ">
            <img className="w-6" src="./Images/github-svgrepo-com (1).svg" alt="" />
            <a href="https://github.com/roccocalo" className="text-md text-[#dfc9b3]">Developed by Rocco Calo</a>
            </div>
            </div>
        </div>
    )
}

export default Footer