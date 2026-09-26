import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Desk", stock: 50 },
  { name: "Chair", stock: 30 },
  { name: "Laptop", stock: 12 },
  { name: "Monitor", stock: 20 }
];

export default function InventoryChart() {
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