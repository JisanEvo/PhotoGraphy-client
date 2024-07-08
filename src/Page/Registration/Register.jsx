import { Link, useNavigate } from 'react-router-dom';
import regBg from '../../../public/Documents/regbg.jpg'
import useAuth from '../../hooks/useAuth';
import { TbFidgetSpinner } from "react-icons/tb";

// import { useForm } from 'react-hook-form';
import axios from 'axios'
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
const Register = () => {
    const { createUser, updateUserProfile, signInWithGoogle,loading } = useAuth()
    const navigate = useNavigate()
    const form = location.state?.from?.pathname || "/";
    //handle sign in
    const handleSignIn = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.files[0];

        const formData = new FormData();
        formData.append('image', image);

        try {
            // 1. Upload image and get image URL
            const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, formData);
            const imageUrl = data.data.display_url;
            console.log(imageUrl);

            // 2. User registration
            const result = await createUser(email, password);
            console.log(result);

            // 3. Save user name and photo in Firebase
            await updateUserProfile(name, imageUrl);

            // Navigate to home page
            navigate('/');

            // Show success message
            Swal.fire({
                title: "Great Work !!",
                text: "Account Created Successfully",
                icon: "success"
            });
        } catch (err) {
            // Show error message
            Swal.fire({
                title: "Wrong !!",
                text: err.message,
                icon: "error"
            });

            // Optional: navigate to home page on error as well
            navigate('/');
        }
    };
// google sign in
const handleGoogleSign = async () => {
    try {
        await signInWithGoogle();
        Swal.fire({
            icon: "success",
            title: "Great",
            text: "Google log in Successfully",
        });
        console.log("Navigating to:", form);  // Log the path
        navigate(form);
    } catch (err) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong",
        });
        console.error("Google sign-in error:", err);  // Log the error for debugging
    }
};

    return (
        <div>

            <section className="bg-white dark:bg-gray-900" style={{ backgroundImage: `url(${regBg})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                    <form
                        onSubmit={handleSignIn}
                        className="w-full max-w-md">
                        <div className="relative flex items-center mt-8">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>

                            <input
                                name='name'

                                type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username" />
                        </div>

                        <label className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>


                            <input
                               type="file" name="image" accept="image/*" required
                                className="file-input file-input-bordered border-none ml-2 file-input-primary w-full max-w-xs" />
                        </label>

                        <div className="relative flex items-center mt-6">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>

                            <input
                                name='email'
                                type="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 " placeholder="Email address" />
                        </div>

                        <div className="relative flex items-center mt-4">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </span>

                            <input
                                name='password'
                                type="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                        </div>




                        <div className="mt-6">
                            <button
                            disabled={loading}
                            className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                             {loading ?<TbFidgetSpinner  className='animate-spin m-auto text-white'/>: 'Sign up'}
                            </button>
                            <div className="flex items-center justify-between mt-4">
                                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                                <a href="#" className="text-xs text-center text-white font-bold  uppercase dark:text-gray-400 hover:underline">
                                    or Sign up with Social Media
                                </a>

                                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
                            </div>
                            <div className="flex items-center mt-6 -mx-2">
                                <button onClick={handleGoogleSign} type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                                    {/* <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                                        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                                        </path>
                                    </svg> */}
                                    <FcGoogle className='text-xl' />


                                    <span className="hidden mx-2 sm:inline">Sign up with Google</span>
                                </button>
                            </div>

                            <div className="mt-6 text-center flex justify-center text-white font-bold ">
                                <p className="text-sm  dark:text-blue-400">
                                    Already have an account?
                                </p>
                                <Link to='/login' className='ml-4'>
                                    Login Now
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default Register;