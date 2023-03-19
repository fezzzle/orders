import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Orders } from "../types/types";


const useOrders = () => {
  const [data, setData] = useState<Orders | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://outvio-dev-public1.s3.eu-central-1.amazonaws.com/json/orders.json"

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${url}`);
        setData(response.data);
        setError(null);
      } catch (err) {
        // @ts-ignore
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return { data, error, loading };
};

export default useOrders;
