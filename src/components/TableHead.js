import React from "react";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

const TableHead = ({columns}) => {
    return (
        <thead>
        <tr>
            {columns.map(({label, accessor}) => {
                return (<th className="px-4 py-2" key={accessor}>{label}
                    <UnfoldMoreIcon/>
                </th>)
            })}
        </tr>
        </thead>);
};

export default TableHead;