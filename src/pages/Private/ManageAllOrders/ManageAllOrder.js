import React from "react";
import useOrders from "../../../Hooks/useOrders";

const ManageAllOrder = () => {
    const [orders, setOrders] = useOrders("");

    // delete 
    const orderDeleteHandle = (id) => {
        if (window.confirm("Do you want to delete?")) {
            fetch(`https://guarded-caverns-85546.herokuapp.com/orders/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        const remainingOrders = orders.filter((order) => order._id !== id);
                        setOrders(remainingOrders);
                    }
                });
        }
    };

    // update status

    const handleUpdateStatus = (id) => {
        if (window.confirm("Do you want update order status?")) {
            fetch(`https://guarded-caverns-85546.herokuapp.com/orders/${id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    status: "Approved",
                }),
            })
                .then((res) => res.json())
                .then((data) => console.log(data));
        }
    };

    return (
        <>
            <div className="container mb-5">
                <h2 className="my-5">Manage Orders</h2>
                <div className="row gy-5">
                    {!orders.length ? (
                        <>
                            <div className="col-lg-3 mx-auto">
                                <div className="spinner-border text-info" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {orders.map((order) => (
                                <div key={order._id} className="col-lg-4 col-md-6">
                                    <div className="single_place">
                                        <h2 className="my-3">
                                            <span className="fw-bold">Travel Spot: </span>
                                            {order.tarvelSpot}
                                        </h2>
                                        <div className="d-flex justify-content-around">
                                            <p>
                                                <span className="fw-bold">Customer Name: </span>
                                                {order.userName}
                                            </p>
                                            <p>
                                                <span className="fw-bold">Customer Email: </span>
                                                {order.email}
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-around">
                                            <p>
                                                <span className="fw-bold">Price: </span> {order.price}
                                            </p>
                                            <p>
                                                <span className="fw-bold">Tarvel Time: </span>
                                                {order.travel_time}
                                            </p>
                                            <p>
                                                <span className="fw-bold">Booking Status: </span>{" "}
                                                {order.status}
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-around">
                                            <button
                                                onClick={() => handleUpdateStatus(order._id)}
                                                className="btn btn-info"
                                            >
                                                Order Update
                                            </button>
                                            <button
                                                onClick={() => orderDeleteHandle(order._id)}
                                                className="btn btn-warning"
                                            >
                                                Order Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default ManageAllOrder;
