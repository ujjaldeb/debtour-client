import React from 'react';
import useServices from '../../../Hooks/useServices';
import Service from '../Service/Service';
import "./Services.css";

const Services = () => {
    // destructuring
    const [services] = useServices();
    // console.log(services);

    return (
        // services area
        <section className="popular_places_area">
            <div className=" container">
                <div className="row">
                    <div className="col-12 col-lg-6 mx-auto">
                        <div className="section_heading white-heading">
                            <h2>Our Services</h2>
                            <p>Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon beard words.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {services.map(service => <Service key={service._id} service={service}></Service>)}
                </div>
            </div>
        </section>
    );
};

export default Services;