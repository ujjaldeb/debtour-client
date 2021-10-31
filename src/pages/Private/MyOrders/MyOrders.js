import useAuth from "../../../Hooks/useAuth";
import useOrders from "../../../Hooks/useOrders";
import "./MyOrders.css";

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useOrders(user.email);

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

    return (
        <>
            <div className="container my-orders">
                <h2 className="my-5">My Orders</h2>
                <div className="row gy-5">
                    {orders.map((order) => (
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

export default MyOrders;
