import { Helmet } from "react-helmet";

const VideoGraphy = () => {
    return (
        <div>
            <Helmet>
                <title>Mehedi's Graphy || VideoGraph</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <h1 className="text-xl font-bold text-center m-8">Enjoy Your Leisure Time Broh!!</h1>
            <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/bDJKs6r___g?si=hf1876-dXt0T-kgt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                </div>
                <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/QoaDkejcHSc?si=GjJ2nsmP7NSKjctc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                </div>
                <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ND9EbMDXpy0?si=SlWZe09xv785JBHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Jqf9haCd6mM?si=dy91hrkWyhHWYmzk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default VideoGraphy;