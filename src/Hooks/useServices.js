import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://guarded-caverns-85546.herokuapp.com/services")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return [services, setServices];
};

export default useServices;