


import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import CSS for the carousel


import ban1 from'../../../public/Documents/banner1.jpg'
import ban2 from'../../../public/Documents/bn2.jpg'
import ban3 from'../../../public/Documents/ban3.jpg'
import ban4 from'../../../public/Documents/ban4.jpg'
import ban6 from'../../../public/Documents/bn6.jpg'
import ban5 from'../../../public/Documents/ban5.jpg'
const Banner = () => {
    return (
        <Carousel showArrows={true} autoPlay interval={1000} infiniteLoop>
            <div>
                <img className='relative'  src={ban1} alt="Legend 1" />
                <p className="absolute  text-5xl font-bold py-12    -mt-96 text-white ">Every photograph is a story waiting to be told. Capturing the essence of life, one frame at a time.</p>
            </div>
            <div>
                <img src={ban2} alt="Legend 2" />
                <p className="absolute  text-5xl font-bold py-14  -mt-96 text-white ">Taking pictures is like tiptoeing into the kitchen late at night and stealing Oreo cookies.</p>

            </div>
            <div>
                <img src={ban3} alt="Legend 3" />
                <p className="absolute  text-5xl font-bold py-12  -mt-96 text-white ">It’s one thing to make a picture of what a person looks like, it’s another thing to make a portrait of who they are.</p>

            </div>
            <div>
                <img src={ban4}alt="Legend 4" />
                <p className="absolute  text-5xl font-bold py-12  -mt-96 text-white ">Every photograph is a story waiting to be told. Capturing the essence of life, one frame at a time.</p>

            </div>
            <div>
                <img src={ban5}alt="Legend 5" />
                <p className="absolute  text-5xl font-bold py-12  -mt-96 text-white ">It’s one thing to make a picture of what a person looks like, it’s another thing to make a portrait of who they are</p>

            </div>
            <div>
                <img src={ban6}alt="Legend 5" />
                <p className="absolute  text-5xl font-bold py-12  -mt-96 text-white ">It’s one thing to make a picture of what a person looks like, it’s another thing to make a portrait of who they are</p>

            </div>

        </Carousel>
    );
};

export default Banner;
