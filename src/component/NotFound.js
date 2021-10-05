import React from 'react';
import { NavLink } from 'react-router-dom';
import notf from '../img/notf.png';
const NotFound = () => {

    return <div>
        <img src={notf} />
        <p style={{ textAlign: "center" }}>
            <NavLink exact className="btn btn-secondary fs-md-3 px-4 py-2" to="/">Go Home</NavLink>
        </p>
    </div>;

}
export default NotFound;