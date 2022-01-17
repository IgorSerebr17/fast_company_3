/** @format */
import React, { useState } from "react";

const BookMark = () => {
    const [iconClass, setIconClass] = useState("bi bi-suit-heart");

    const handleChangeIcon = () => {
        if (iconClass === "bi bi-suit-heart") {
            setIconClass("bi bi-suit-heart-fill");
        } else if (iconClass === "bi bi-suit-heart-fill") {
            setIconClass("bi bi-suit-heart");
        }
        return iconClass;
    };
    return (
        <div>
            <i onClick={handleChangeIcon} className={iconClass}></i>
        </div>
    );
};

export default BookMark;
