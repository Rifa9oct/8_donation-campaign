import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="flex flex-col lg:flex-row justify-between items-center max-w-[1340px] mx-auto mt-14">
                <img src="/src/assets/logo.png" alt="" />
                <ul className="flex gap-12 text-lg my-10 lg:my-0">
                    <li>
                        <NavLink to='/' className={({ isActive, isPending }) => isActive ? "underline text-[#FF444A] font-bold" : isPending ? "pending" : ""}>Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/donation' className={({ isActive, isPending }) => isActive ? "underline text-[#FF444A] font-bold" : isPending ? "pending" : ""}>Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/statistic' className={({ isActive, isPending }) => isActive ? "underline text-[#FF444A] font-bold" : isPending ? "pending" : ""}>Statistic
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;