import React from "react";
import { Link } from "react-router-dom";
import useOrders from "../../../Hooks/useOrders";

const ManageAllOrder = () => {
    const [orders, setOrders] = useOrders("");

    const orderDeleteHandle = (id) => {
        if (window.confirm("Do you want to delete?")) {
            fetch(`http://localhost:5000/orders/${id}`, {
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
    return (
        <>
            <div className="container py-5">
                <h2 className="my-5">Manage Orders</h2>
                <div className="row gy-5">
                    {orders.map((order) => (
                        <div className="col-lg-4 col-md-6" key={order._id}>
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
                                    <Link to={`/orders/update/${order._id}`}>
                                        <button className="btn btn-info">Order Update</button>
                                    </Link>
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
                </div>
            </div>
        </>
    );
};

export default ManageAllOrder;
