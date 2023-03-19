import React, {useState} from "react";
import returnSortingIcon from "../util/sortingIcon";
import {Column} from "../types/types";


const TableHead = ({columns} : {columns: Column[] }) => {
    return (
        <thead>
        <tr>
            {columns.map(({label, accessor}) => {
                const iconDirection =
                    sortField === accessor && order === "asc"
                        ? "up"
                        : sortField === accessor && order === "desc"
                            ? "down"
                            : "default";
                return (
                    <th
                        className="px-4 py-2"
                        key={accessor}
                        onClick={() => handleSortingChange(accessor)}
                    >
                        {label}
                        {returnSortingIcon(iconDirection)}
                    </th>
                );
            })}
        </tr>
        </thead>);
};

export default TableHead;