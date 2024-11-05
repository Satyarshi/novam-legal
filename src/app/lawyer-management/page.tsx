import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import LawyerManagementTable from "@/components/Tables/LawyerManagementTable";
import LawyerFilter from "@/components/Lawyer/LawyerFilter";

const LawyerManagement = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Lawyer Management" />

      <div className="flex flex-col gap-10">
        <LawyerFilter />
        <LawyerManagementTable />
      </div>
    </DefaultLayout>
  );
};

export default LawyerManagement;
