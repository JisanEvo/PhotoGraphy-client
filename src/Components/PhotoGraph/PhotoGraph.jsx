import { Helmet } from "react-helmet-async";
import AllPhotos from "../AllPhotos/AllPhotos";

const PhotoGraph = () => {

    return (
        <div>
             <Helmet>
        <title>Mehedi'S Graphy || PhotoGraph</title>
    </Helmet>
           <AllPhotos></AllPhotos>
        </div>
    );
};

export default PhotoGraph;