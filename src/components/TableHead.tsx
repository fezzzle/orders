import React, {useState} from "react";
import returnSortingIcon from "../util/sortingIcon";
import {Column} from "../types/types";

interface Props {
    columns: Column[];
    handleSorting: (accessor: string, order: string) => void;
}

const TableHead = ({columns, handleSorting}: Props) => {
    const [sortField, setSortField] = useState("");
    const [order, setOrder] = useState("asc");
    const handleSortingChange = (accessor: string) => {
        const sortOrder =
            accessor === sortField && order === "asc" ? "desc" : "asc";
        setSortField(accessor);
        setOrder(sortOrder);
        handleSorting(accessor, sortOrder);
    };
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
        </thead>
    );
};

export default TableHead;
