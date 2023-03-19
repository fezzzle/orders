import React from 'react'

import {Orders, Column, CurrencyMap} from "../types/types";


const TableBody = ({tableData, columns}: { tableData: Orders, columns: Column[] }) => {
    const currencies: CurrencyMap = {
        EUR: "€",
        USD: "$",
    };
    return (
        <tbody>
        {tableData.map((data) => {
            return (
                <tr className="border-b-2" key={data.id}>
                    {columns.map(({label, accessor}) => {
                        const tableData = data[accessor] ? data[accessor] : "N/A";
                        if (label.toLowerCase() === 'status') {
                            return (
                                <td className="px-4 py-2" key={accessor}>
                                    <span className="bg-gray-200 rounded-full py-2 px-2">{tableData}</span>
                                </td>
                            );
                        }
                        if (label.toLowerCase() === 'currency') {
                            return <td className="px-4 py-2"
                                       key={accessor}>{tableData} {currencies[tableData.currency] ? currencies[tableData.currency] : tableData.currency}</td>;
                        } else {
                            return <td className="px-4 py-2" key={accessor}>{tableData}</td>;
                        }
                    })}
                </tr>
            );
        })}
        </tbody>
    );
};


export default TableBody;