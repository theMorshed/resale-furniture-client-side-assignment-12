import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';

const SellerProducts = () => {
    const {user} = useContext(AuthContext);
    // const [sellerProducts, setSellerProducts] = useState([]);
    // useEffect(() => {
    //     axios(`https://resale-server.vercel.app/sellerproducts/${user?.email}`)
    //     .then(result => {
    //         setSellerProducts(result.data);
    //     });
    // }, [user?.email]);

    const {data: sellerProducts, refetch} = useQuery({
        queryKey: ['sellerproducts'],
        queryFn: async() => {
            const result = await fetch(`https://resale-server.vercel.app/sellerproducts/${user?.email}`);
            const data = await result.json();
            return data;
        }
    })

    const handleDelete = (id, name) => {
        fetch(`https://resale-server.vercel.app/deletefurniture/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            toast.success(`${name} deleted successfully.`);
            refetch();
        })
    }

    return (
        <div className='mt-10'>
            <h2 className="text-3xl font-bold text-gray-500 mb-10">{user?.displayName}'s Items: </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-5">
                {
                    sellerProducts?.map(product => 
                    <div className="card lg:card-side shadow-xl" key={product._id}>
                        <figure className='w-1/2'><img className='h-full' src={product.photo} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                            <p>Price: {product.resale_price}</p>
                            <p>Status: {product.status}</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleDelete(product._id, product.name)} className="btn btn-primary btn-xs">Delete</button>
                                <button className="btn btn-primary btn-xs">Advertise</button>
                            </div>
                        </div>
                    </div>)
                }                
            </div>
        </div>
    );
};

export default SellerProducts;