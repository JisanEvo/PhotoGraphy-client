
// import { Link, NavLink } from 'react-router-dom';
// import logo from '../../../public/Documents/ll.jpg'
// import useAuth from '../../hooks/useAuth';
// const BottomTabNavigation = () => {
// const {user}=useAuth()
//     const Links = <>

//  <li className='text-black font-bold'><Link to='/'>Home</Link></li>
//  <li className='text-black font-bold'><Link to='/photograph'>PhotoGraph</Link></li>
//  <li className='text-black font-bold'><Link to='/videograph'>VideoGraph</Link></li>
//  {/* <li className='text-black font-bold'><Link to='/login'>Log in</Link></li> */}


//     </>
//     return (
//         <div>
//         <div className="navbar bg-base-100  bg-opacity-30 z-10">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//                         </svg>
//                     </div>
//                     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                         {Links}
//                     </ul>
//                 </div>
//                 <div className="flex items-center justify-center ">
//                 <img className="w-16 h-16 btn-circle hidden md:block " src={logo} alt="Logo" />
//                     <a className=" text-xl hidden md:block mt-4">Mehedi's Grapgy</a>
//                 </div>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     {Links}
//                 </ul>
//             </div>
//             <div className="navbar-end">
//                 <Link to='/login'>
//                 <p>Login </p>
//                 </Link>

//                 {user ? (
//     <div title={user?.displayName} className="dropdown dropdown-end z-40">
//         <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//             <div className="w-10 rounded-full">
//                 <img src={user?.photoURL || "https://i.postimg.cc/QNkbjGzf/images.png"} alt={user?.displayName} />
//             </div>
//         </label>
//         <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 items-center">
//             <li>
//                 <button className="btn btn-sm btn-ghost">{user?.displayName || "Jisan"}</button>
//             </li>
//             <li>
//                 <Link to="/dashboard">
//                     <button className="btn btn-sm btn-ghost">Dashboard</button>
//                 </Link>
//             </li>
//             <li>
//                 <button className="btn btn-sm btn-ghost" onClick={logOut}>Logout</button>
//             </li>
//         </ul>
//     </div>
// ) : (
//     <Link to="/login">
//         <button className="btn btn-sm btn-ghost text-center bg-white">Login</button>
//     </Link>
//     </div>
//     </div>
// )}

// export default BottomTabNavigation;

import { Link } from 'react-router-dom';
import logo from '../../../public/Documents/ll.jpg';
import useAuth from '../../hooks/useAuth';

const BottomTabNavigation = () => {
    const { user, logOut } = useAuth();

    const Links = (
        <>
            <li className="text-black font-bold">
                <Link to="/">Home</Link>
            </li>
            <li className="text-black font-bold">
                <Link to="/photograph">PhotoGraph</Link>
            </li>
            <li className="text-black font-bold">
                <Link to="/videograph">VideoGraph</Link>
            </li>
        </>
    );

    return (
        <div>
            <div className="navbar bg-base-100 bg-opacity-30 z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Links}
                        </ul>
                    </div>
                    <div className="flex items-center justify-center">
                        <img className="w-16 h-16 btn-circle hidden md:block" src={logo} alt="Logo" />
                        <a className="text-xl hidden md:block mt-4">Mehedi's Grapgy</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <div title={user?.displayName} className="dropdown dropdown-end z-40">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL || "https://i.postimg.cc/QNkbjGzf/images.png"} alt={user?.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 items-center">
                                <li>
                                    <button className="btn btn-sm btn-ghost">{user?.displayName || "Jisan"}</button>
                                </li>
                                <li>
                                    <Link to="/dashboard">
                                        <button className="btn btn-sm btn-ghost">Dashboard</button>
                                    </Link>
                                </li>
                                <li>
                                    <button className="btn btn-sm btn-ghost" onClick={logOut}>Logout</button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <Link to="/login">
                            <button className="btn btn-sm btn-ghost text-center bg-white">Login</button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BottomTabNavigation;
