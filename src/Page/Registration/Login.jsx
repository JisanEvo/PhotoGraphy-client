// import { Link } from 'react-router-dom';
// import logbg from '../../../public/Documents/log.jpg';

// const Login = () => {
//     const handleLogin = async e => {
//         e.preventDefault();
//         const form = e.target;
//         const email = form.email.value;
//         const pass = form.password.value;

//     console.log(email,pass)
//     };
//     return (
//         <div>

//         <section className="bg-white dark:bg-gray-900" style={{ backgroundImage: `url(${logbg})`, backgroundSize: 'cover',backgroundAttachment:'fixed' }}>
//             <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
//                 <form
//                 onSubmit={handleLogin()}
//                 className="w-full max-w-md">
//                     <div className="relative flex items-center mt-6">
//                         <span className="absolute">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                             </svg>
//                         </span>

//                         <input
//                         name='email'
//                         type="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address"/>
//                     </div>

//                     <div className="relative flex items-center mt-4">
//                         <span className="absolute">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                             </svg>
//                         </span>

//                         <input
//                         name='password'
//                         type="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password"/>
//                     </div>



//                     <div className="mt-6">
//                         <input type='submit' className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
//                           Log in
//                         </input>

//                         <div className="mt-6 text-center flex justify-center text-white font-bold ">
//                             <p className="text-sm  dark:text-blue-400">
//                                 New Here?
//                             </p>
//                             <Link to='/register' className='ml-4'>
//                              Register Now
//                             </Link>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </section>

//     </div>
//     );
// };

// export default Login;

import { Link } from 'react-router-dom';
import logbg from '../../../public/Documents/log.jpg';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signIn } = useAuth()
    const handleLogin = async e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })

    };

    return (
        <div>
            <section
                className="bg-white dark:bg-gray-900"
                style={{
                    backgroundImage: `url(${logbg})`,
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                    <form
                        onSubmit={handleLogin}
                        className="w-full max-w-md"
                    >
                        <div className="relative flex items-center mt-6">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>

                            <input
                                name='email'
                                type="email"
                                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Email address"
                            />
                        </div>

                        <div className="relative flex items-center mt-4">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </span>

                            <input
                                name='password'
                                type="password"
                                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Password"
                            />
                        </div>

                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                            >
                                Log in
                            </button>
                            <div className="flex items-center justify-between mt-4">
                                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                                <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
                                    or login with Social Media
                                </a>

                                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
                            </div>
                            <div className="flex items-center mt-6 -mx-2">
                                <button type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                                    <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                                        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                                        </path>
                                    </svg>

                                    <span className="hidden mx-2 sm:inline">Sign in with Google</span>
                                </button>
                            </div>

                            <div className="mt-6 text-center flex justify-center text-white font-bold">
                                <p className="text-sm dark:text-blue-400">
                                    New Here?
                                </p>
                                <Link to='/register' className='ml-4'>
                                    Register Now
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Login;
