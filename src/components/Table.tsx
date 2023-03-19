import TableHead from "./TableHead";
import orderTableColumns from "../util/tableutil";
import TableBody from "./TableBody";
import React, {useState} from "react";
import {Orders} from "../types/types";

const Table = ({data}: { data: Orders }) => {

    const [tableData, setTableData] = useState(data);
    const handleSorting = (sortField: string | number, sortOrder: string) => {
        if (sortField) {
            const sorted = [...tableData].sort((a, b) => {
                const sortValueA = a[sortField] || "";
                const sortValueB = b[sortField] || "";
                return sortOrder === "asc"
                    ? sortValueA.toString().localeCompare(sortValueB.toString(), "en", {numeric: true})
                    : sortValueB.toString().localeCompare(sortValueA.toString(), "en", {numeric: true});
            });
            setTableData(sorted);
        }
    };
    return (
        <table
            aria-label="Orders data"
            className="max-w-fit bg-white"
        >
            <TableHead columns={orderTableColumns} handleSorting={handleSorting}/>
            <TableBody tableData={tableData} columns={orderTableColumns}/>
        </table>
    )
}

export default Table;