import React from 'react';
import useOrders from "./hooks/useOrders";
import Table from "./components/Table"

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
                            <Table data={data}/>
                        </main>
                    </div>
                </div>
            </div>
        </div>

    ) : null;
}

export default App;
