import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateOrder = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, []);

    const handleStatusChange = e => {
        const updatedStatus = e.target.value;
        const updatedOrder = { travel_time: order.travel_time, price: order.price, status: updatedStatus };
        setOrder(updatedOrder);
    };

    const handleUpdateOrder = e => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated successfully.');
                    setOrder({});
                }
            });
        e.preventDefault();
    };

    return (
        <div>
            <h2>Update the order below</h2>
            <form onSubmit={handleUpdateOrder}>
                <select onChange={handleStatusChange} value={order.status || ''}>
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                </select>
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateOrder;