import { useEffect, useState } from "react";

const useSingleService = (id) => {
  const [singleService, setSingleService] = useState({});

  useEffect(() => {
    fetch(`https://guarded-caverns-85546.herokuapp.com/services/${id}`)
      .then((response) => response.json())
      .then((data) => setSingleService(data));
  }, []);
  return [singleService, id, setSingleService];
};

export default useSingleService;