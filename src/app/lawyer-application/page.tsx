import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import LawyerApplicationTable from "@/components/Tables/LawyerApplicationTable";
import LawyerFilter from "@/components/Lawyer/LawyerFilter";

const LawyerApplication = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Lawyer Application" />

      <div className="flex flex-col gap-10">
        <LawyerFilter />
        <LawyerApplicationTable />
      </div>
    </DefaultLayout>
  );
};

export default LawyerApplication;
