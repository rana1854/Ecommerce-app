import {React} from 'react'
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
<<<<<<< HEAD:frontend/src/components/Navbar.jsx
        <div>Navbar is here</div>
    )
}
=======
        <header>
            <nav className='bg-white'>
            <div className='flex item-center font-medium justify-around'>
                <div>
                    {/* <img src="" alt="" /> */}
                    <FaSearch />
                </div>
                <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
                    <li>
                        <link to= "/" class="py-7 px-3 inline-block">
                            Home
                        </link>
                        </li>
                        <Navlinks/>
                </ul>
                <div className='md:block hidden'>
                    <Buttons/>
                </div>
>>>>>>> 61862cc (unknown):frontend/src/components/navbar/Navbar.jsx

                </div>

            
            </nav>
        
        </header>
    );
};

export default Navbar;