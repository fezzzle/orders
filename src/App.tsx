import React from 'react';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import useOrders from "./hooks/useOrders";
import {Order} from "./types/types";

interface Props {
    order: Order;
}

interface CurrencyMap {
    [key: string]: string;
}

const TableRow = ({order}: Props) => {
    const currencies: CurrencyMap = {
        EUR: "€",
        USD: "$",
    };
    return (
        <tr className="border-b-2"
        >
            <td className="px-4 py-2">{order.id}</td>
            <td className="px-4 py-2">{order.date}</td>
            <td className="px-4 py-2">{order.total} {currencies[order.currency] ? currencies[order.currency] : order.currency }{}</td>
            <td className="px-4 py-2">{order.quantity}</td>
            <td className="px-4 py-2 text-center"><span
                className="bg-gray-200 rounded-full py-2 px-2">{order.status}</span></td>
        </tr>
    )
}

function App() {
    const {data, error, loading} = useOrders()
    return data ? (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <div
                className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 lg:mx-auto sm:rounded-lg sm:px-10">
                <div className="flex justify-between mx-auto max-w-md">
                    <p className="font-bold">All orders</p>
                    <form>
                        <input className="gray" placeholder="Search" type="text" id="" name=""/>
                    </form>
                </div>
                <div className="mt-4 border-b-2"></div>
                <div className="divide-y divide-gray-300/50">
                    <div className="flex-1 flex flex-col sm:flex-row mx-auto">
                        <main className="flex flex-col py-4 px-8 sm:px-10 flex-grow items-center">
                            <table
                                aria-label="Orders data"
                                className="max-w-fit bg-white"
                            >
                                <thead>
                                <tr>
                                    <th className="px-4 py-2">Order ID
                                        <UnfoldMoreIcon/></th>
                                    <th className="px-4 py-2">Order date
                                        <UnfoldMoreIcon/>
                                    </th>
                                    <th className="px-4 py-2">Order total
                                        <UnfoldMoreIcon/>
                                    </th>
                                    <th className="px-4 py-2">Quantity
                                        <UnfoldMoreIcon/>
                                    </th>
                                    <th className="px-4 py-2">Status
                                        <UnfoldMoreIcon/>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {data.map((order, index) => (
                                    <TableRow key={order.id} order={order}/>
                                ))}
                                </tbody>
                            </table>
                        </main>
                    </div>
                </div>
            </div>
        </div>

    ) : null;
}

export default App;
