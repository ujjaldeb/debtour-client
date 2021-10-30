import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useOrders from "../../../Hooks/useOrders";
import "./MyOrders.css";

const MyOrders = () => {
    const { user } = useAuth();
    const [orders] = useOrders();
    const userOrders = orders.filter((order) => order.email === user.email);
    console.log(userOrders);

    return (
        <>
            <div className="container my-orders">
                <h2 className="my-5">My Orders</h2>
                <div className="row gy-5">
                    {userOrders.map((order) => (
                        <div className="col-lg-4 col-md-6" key={order._id}>
                            <div className="single_place">
                                <h2>
                                    <span className="fw-bold">Travel Spot:</span>{" "}
                                    {order.tarvelSpot}
                                </h2>
                                <div className="d-flex justify-content-around">
                                    <p>
                                        {" "}
                                        <span className="fw-bold">Price:</span> {order.price}
                                    </p>
                                    <p>
                                        {" "}
                                        <span className="fw-bold">Tarvel Time:</span>{" "}
                                        {order.travel_time}
                                    </p>
                                </div>
                                <div className="d-flex justify-content-around">
                                    <p>
                                        {" "}
                                        <span className="fw-bold">Booking Status:</span>{" "}
                                        {order.status}
                                    </p>
                                    <Link to={`/booking/`}>
                                        <button className="btn btn-warning">Order Delete</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MyOrders;
