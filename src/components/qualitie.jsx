/** @format */

import PropTypes from "prop-types";
import React from "react";

const Qualitie = (props) => {
    return (
        <span>
            {props.qualities.map((quality) => (
                <span
                    key={quality._id}
                    className={props.onGetBageClasses(quality.color)}
                >
                    {quality.name}
                </span>
            ))}
        </span>
    );
};

Qualitie.propTypes = {
    qualities: PropTypes.array.isRequired,
    onGetBageClasses: PropTypes.func.isRequired
};

export default Qualitie;
