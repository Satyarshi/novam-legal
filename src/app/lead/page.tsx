import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import LeadTable from "@/components/Tables/LeadTable";
import LeadFilter from "@/components/LeadManagement/LeadFilter";

const LeadManagement = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Lead Management" />

      <div className="flex flex-col gap-10">
        <LeadFilter />
        <LeadTable />
      </div>
    </DefaultLayout>
  );
};

export default LeadManagement;

