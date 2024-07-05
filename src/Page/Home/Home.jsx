import { Helmet } from "react-helmet-async";
import AllPhotos from "../../Components/AllPhotos/AllPhotos";
import Banner from "../../Components/Banner/Banner";
import BestCollection from "../../Components/BestCollection/BestCollection";



const Home = () => {

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Mehedi's Graphy || Home</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <Banner></Banner>
            <BestCollection></BestCollection>
            <AllPhotos></AllPhotos>

        </div>
    );
};

export default Home;