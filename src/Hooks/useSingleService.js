import { useEffect, useState } from "react";

const useSingleService = (id) => {
  const [singleService, setSingleService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((response) => response.json())
      .then((data) => setSingleService(data));
  }, []);
  return [singleService, id, setSingleService];
};

export default useSingleService;