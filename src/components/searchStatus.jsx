/** @format */

import React from "react";
import PropTypes from "prop-types";

const SearchStatus = (props) => {
    return (
        <span className={props.onGetBageClassesToString(props.users.length)}>
            {props.onCreateString(props.users.length)}
        </span>
    );
};

SearchStatus.propTypes = {
    onGetBageClassesToString: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    onCreateString: PropTypes.func.isRequired
};

export default SearchStatus;
