import { useEffect, useState } from "react";

const useOrders = (userEmail = '') => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${userEmail}`)
            .then((response) => response.json())
            .then((data) => setOrders(data));
    }, []);
    return [orders, setOrders];
};

export default useOrders;