import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import LoadingSpinner from '../../Sections/Common/LoadingSpinner';

const ReportedItems = () => {
    const {data: reportedItems, isLoading, refetch} = useQuery({
        queryKey: ['reported'],
        queryFn: async () => {
            const result = await fetch('https://resale-server.vercel.app/reportedFurniture');
            const data = await result.json();
            return data;
        }
    });

    if(isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    const handleDelete = (id, name) => {
        fetch(`https://resale-server.vercel.app/deleteReported/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                //toast.success(`${name} deleted successfully.`);
                refetch();
            })

        fetch(`https://resale-server.vercel.app/deleteReportedFromReports/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                toast.success(`${name} deleted successfully.`);
                refetch();
            })
    }

    return (
        <div>
            {reportedItems?.length > 0 ? <h2 className="text-3xl font-bold text-gray-500 mb-10">Reported Items:</h2> : <h2 className="text-3xl font-bold text-gray-500 mb-10">You don't have any items to display</h2>}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6'>
                {
                    reportedItems?.map(report => <div className='border p-3 rounded-lg hover:border-primary' key={report._id}>
                        <p className="text-gray-500">Name: {report.name}</p>
                        <p className="text-gray-500">Price: {report.price}</p>
                        <p className="text-gray-500">Seller: {report.seller}</p>
                        <button className="btn btn-primary mt-6 btn-sm" onClick={() => handleDelete(report.product_id, report.name)}>Delete</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ReportedItems;