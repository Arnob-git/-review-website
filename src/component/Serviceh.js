import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './serviceh.css'

const Serviceh = () => {
    const [service, setService] = useState([]);


    useEffect(() => {
        fetch('service.json')
            .then((res) => res.json())
            .then((data) => setService(data));
    }, []);

    return (
        <div className="service-container">
            <h1> Our Service  </h1>
            <div className="service">
                <div className="row">
                    {
                        service.slice(0, 3).map(service => (
                            <div className="col-md-4">
                                <div className="cart">
                                    <div className="logo-image">
                                        <img className="size" src={service.img} alt="" />
                                    </div>
                                    <div>
                                        <h1 className="card-title">{service.name}</h1>
                                        <h6>Price: {service.price}</h6>
                                        <NavLink className='btn btn-info' to='/contact' onClick={() => alert('Please subscribe first')}>Go Now</NavLink>
                                    </div>


                                </div>
                            </div>

                        )

                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Serviceh;