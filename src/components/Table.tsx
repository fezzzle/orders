import TableHead from "./TableHead";
import orderTableColumns from "../util/tableutil";
import TableBody from "./TableBody";
import React from "react";
import {Orders} from "../types/types";

const Table = ({data}: {data: Orders}) => {
    return (
        <table
            aria-label="Orders data"
            className="max-w-fit bg-white"
        >
            <TableHead columns={orderTableColumns}/>
            <TableBody tableData={data} columns={orderTableColumns}/>
        </table>
    )
}

export default Table;