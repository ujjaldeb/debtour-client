import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    axios.post('http://localhost:5000/services', data)
      .then(res => {
        // console.log(res);
        if (res.data.insertedId) {
          alert('Added successfully');
        }
      })
  };

  return (
    <section className="form-signin">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mx-auto">
            <h3>Please Add New Service</h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="d-flex flex-column post-form"
            >
              <input
                {...register("sName", { required: true })}
                placeholder="Servcie Name"
              />
              <textarea
                {...register("sdescription", { required: true })}
                placeholder="Short description"
              />
              <input
                type="number"
                {...register("price", { required: true })}
                placeholder="Price"
              />
              <input
                type="url"
                {...register("sImage", { required: true })}
                placeholder="Image Url"
              />
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddService;
