import { useEffect, useState } from "react";

const useOrders = () => {
    const [orders, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/orders")
            .then((response) => response.json())
            .then((data) => setServices(data));
    }, []);
    return [orders, setServices];
};

export default useOrders;