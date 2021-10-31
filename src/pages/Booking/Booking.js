import React from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useSingleService from "../../Hooks/useSingleService";
import useAuth from "../../Hooks/useAuth";
import "./Booking.css";
import axios from "axios";

const Booking = () => {
  // destructuring
  const { serviceId } = useParams();
  const { register, handleSubmit, reset } = useForm();

  // data load
  const [singleService] = useSingleService(serviceId);

  const { user } = useAuth();

  // single service destructuring
  const { sName, price, travel_time } = singleService;

  // data save for database
  const onSubmit = (data) => {
    axios.post("https://guarded-caverns-85546.herokuapp.com/orders", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Booking Submitted");
          reset();
        }
      });
  };

  return (
    <section className="booking-form">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mx-auto">
            <h3>Please Book Your Tarvel Spot</h3>
            <br />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="d-flex flex-column post-form"
            >
              <label className="text-start ms-1 fw-bold" htmlFor="">
                Travel Spot
              </label>
              <input
                {...register("tarvelSpot", { required: true })}
                placeholder="Travel Spot"
                defaultValue={sName}
                readOnly
              />
              <label className="text-start ms-1 fw-bold" htmlFor="">
                User Name
              </label>
              <input
                {...register("userName", { required: true })}
                placeholder="User Name"
                defaultValue={user.displayName}
                readOnly
              />
              <label className="text-start ms-1 fw-bold" htmlFor="">
                User Email
              </label>
              <input
                {...register("email", { required: true })}
                placeholder="User Email"
                defaultValue={user.email}
                readOnly
              />
              <label className="text-start ms-1 fw-bold" htmlFor="">
                Price
              </label>
              <input
                type="number"
                {...register("price", { required: true })}
                placeholder="Price"
                defaultValue={price}
                readOnly
              />
              <label className="text-start ms-1 fw-bold" htmlFor="">
                Tarvel Time
              </label>
              <input
                type="number"
                {...register("travel_time", { required: true })}
                placeholder="Travel Time"
                defaultValue={travel_time}
                readOnly
              />
              <label className="text-start ms-1 fw-bold" htmlFor="">
                User Address
              </label>
              <textarea
                type="url"
                {...register("address", { required: true })}
                placeholder="Your Address"
              />
              <input
                type="text"
                {...register("status")}
                defaultValue="Pending"
                hidden
              />
              <input type="submit" value="Book" />
              <br />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
