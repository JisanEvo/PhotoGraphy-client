// import footcover from"../../../public/Documents/footer.jpg"

import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {

    return (
        <div
            className="w-full mx-auto"
            style={{ backgroundImage: `url('https://i.postimg.cc/wvnK9tQD/k.jpg')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>

            <footer className="footer footer-center text-base-content rounded p-10    ">
                <nav className="grid grid-flow-col gap-4 text-white">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4 text-white">
                        <a>
                            <FaFacebook className="text-2xl text-blue-500"></FaFacebook>
                        </a>
                        <a>
                            <FaYoutube className="text-2xl text-red-400"></FaYoutube>
                        </a>
                        <a>
                            <FaTwitter className="text-2xl text-blue-300"></FaTwitter>
                        </a>
                    </div>
                </nav>
                <aside>
                    <p className="text-white"> All Rights Reserved By- Mehedi Hasan © {new Date().getFullYear()} </p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;