import { useEffect, useState } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { api } from "../../services/api";

interface Product {
  id: string;
  name: string;
  stock: number;
}

export default function InventoryChart() {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response =
          await api.get("/products");

        setData(response.data);
      } catch (error) {
        console.error(
          "Failed to load inventory chart",
          error
        );
      }
    };

    fetchProducts();
  }, []);

  return (
    <ResponsiveContainer
      width="100%"
      height={300}
    >
      <BarChart data={data}>
        <XAxis dataKey="name" />

        <YAxis />

        <Tooltip />

        <Bar dataKey="stock" />
      </BarChart>
    </ResponsiveContainer>
  );
}