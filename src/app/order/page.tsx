import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import OrderTable from "@/components/Tables/OrderTable";
import OrderFilter from "@/components/OrderManagement/OrderFilter";

const OrderManagement = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Order Management" />

      <div className="flex flex-col gap-10">
        <OrderFilter />
        <OrderTable />
      </div>
    </DefaultLayout>
  );
};

export default OrderManagement;
