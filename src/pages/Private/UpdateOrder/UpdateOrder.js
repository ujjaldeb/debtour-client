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

    const handleTravelTimeChange = e => {
        const updatedTravelTime = e.target.value;
        const updatedOrder = { travel_time: updatedTravelTime, price: order.price, status: order.status };
        setOrder(updatedOrder);
    };

    const handlePriceChange = e => {
        const updatedPrice = e.target.value;
        const updatedOrder = { travel_time: order.travel_time, price: updatedPrice, status: order.status };
        setOrder(updatedOrder);
    };

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
            <h2>Update the order with id: {order._id}</h2>
            <form onSubmit={handleUpdateOrder}>
                <input type="text" onChange={handleTravelTimeChange} value={order.travel_time || ''} />
                <input type="text" onChange={handlePriceChange} value={order.price || ''} />
                <input type="text" onChange={handleStatusChange} value={order.status || ''} />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateOrder;