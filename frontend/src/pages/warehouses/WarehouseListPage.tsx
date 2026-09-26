import DashboardLayout from "../../layouts/DashboardLayout";

import WarehouseForm from "../../components/warehouse/WarehouseForm";

import WarehouseTable from "../../components/warehouse/WarehouseTable";

export default function WarehouseListPage() {
  return (
    <DashboardLayout>
      <WarehouseForm />

      <br />

      <WarehouseTable />
    </DashboardLayout>
  );
}