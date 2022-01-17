/** @format */

import React, { useState } from "react";
import User from "./user";
import api from "../api/index";
import SearchStatus from "./searchStatus";
import Pagination from "./pagination";
import { paginate } from "./utils/paginate";

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const count = users.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageIndex) => {
        console.log("page: ", pageIndex);
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(users, currentPage, pageSize);

    const getBageClassesToString = (userLength) => {
        let classes = "";
        classes += userLength === 0 ? "badge bg-danger" : "badge bg-primary";
        return classes;
    };

    const createString = (number) => {
        let combination = "";
        combination += number === 1 || number > 4 ? "человек" : "человека";
        let string = "";
        string += number + " " + combination + " тусанёт с тобой сегодня";
        string = number === 0 ? "Никто с тобой не тусанёт" : string;
        return string;
    };

    const deleteTable = () => {
        const table = document.querySelector("table");
        if (table !== null) table.remove();
        console.log(table);
    };
    const deletePerson = (userId) => {
        setUsers((prevState) =>
            prevState.filter((users) => users._id !== userId)
        );
    };
    if (count === 0) {
        deleteTable();
    }
    if (count === 0) {
        return (
            <>
                <SearchStatus
                    onGetBageClassesToString={getBageClassesToString}
                    onCreateString={createString}
                />
            </>
        );
    } else {
        return (
            <>
                <span className={getBageClassesToString(users.length)}>
                    {createString(users.length)}
                </span>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" key={1}>
                                Имя
                            </th>
                            <th scope="col" key={2}>
                                Качества
                            </th>
                            <th scope="col" key={3}>
                                Профессия
                            </th>
                            <th scope="col" key={4}>
                                Встретился, раз
                            </th>
                            <th scope="col" key={5}>
                                Избранное
                            </th>
                            <th scope="col" key={5}>
                                Оценка
                            </th>
                            <th scope="col" key={6}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {userCrop.map((user) => (
                            <User
                                key={user._id}
                                onDeletePerson={deletePerson}
                                {...user}
                            />
                        ))}
                    </tbody>
                </table>
                <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </>
        );
    }
};
export default Users;
