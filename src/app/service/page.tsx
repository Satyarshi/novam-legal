"use client";
import { useState } from "react";
import { MdToggleOn, MdToggleOff } from "react-icons/md";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SelectService from "@/components/SelectGroup/SelectService";
import SelectDuration from "@/components/SelectGroup/SelectDuration";
import SelectConsultation from "@/components/SelectGroup/SelectConsultation";

const Service = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleStatus = () => {
    setIsActive(!isActive);
  };
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Service Management" />

      <div className="mt-4 flex min-h-screen items-center justify-center">
        <div className="w-full max-w-3xl rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="text-xl font-semibold text-black dark:text-white">
              Service Details
            </h3>
          </div>
          <form action="#">
            <div className="p-6.5">
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Service Name
                  </label>
                  <input
                    type="text"
                    placeholder="Eg: Property Dispute Consultation"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div className="w-full xl:w-1/2">
                  <SelectService />
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <SelectDuration />
                </div>
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Price(₹)
                  </label>
                  <input
                    type="text"
                    placeholder="eg: 1500"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              <SelectConsultation />

              <div className="mb-4.5 flex items-center gap-2">
                <label className="block text-black dark:text-white">
                  Status
                </label>
                <div
                  className="flex cursor-pointer items-center"
                  onClick={toggleStatus}
                >
                  {isActive ? (
                    <MdToggleOn size={50} className="text-3xl text-green-500" />
                  ) : (
                    <MdToggleOff size={50} className="text-3xl" />
                  )}
                </div>
              </div>

              <div className="my-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Special Instructions{" "}
                  <span className="text-xs text-[#9CA3AF]">
                    (optional: its for us to find the best client for you, it will not be shown to the clients)
                  </span>
                </label>
                <textarea
                  rows={6}
                  placeholder="Eg: Clients should bring all relevant documents during consultation."
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                ></textarea>
              </div>

              <button className="flex float-right rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                Publish
              </button>
            </div>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Service;
