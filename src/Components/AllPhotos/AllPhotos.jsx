import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import PostDetails from "../Post/PostDetails";

const AllPhotos = () => {
    const axiosSecure = useAxiosSecure()
    const { data, isLoading } = useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/post')

            return data
        },
    })

    return (
        <div>
            <h1 className="text-2xl font-bold text-center"> All Member'S Activity</h1>

            <div className="grid grid-cols-3 ">
                {
                    data?.map(item => <PostDetails key={item._id} item={item}></PostDetails>)
                }
            </div>
        </div>

    );
};

export default AllPhotos;