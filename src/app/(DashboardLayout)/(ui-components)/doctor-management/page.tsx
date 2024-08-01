"use client";
import React, { useState, ChangeEvent } from "react";
import Table from "./table";
import ManagementGrid from "@/app/(components)/mui-components/Card";
import { useRouter } from "next/navigation";

export default function DeviceManagement() {
  type Breadcrumb = {
    label: string;
    link: string;
  };
  const breadcrumbItems: Breadcrumb[] = [
    { label: "Dashboard", link: "/" },
    { label: "Doctor Management", link: "/doctor-management" },
  ];
  interface TabData {
    label: string;
  }

  const tabs: TabData[] = [
    { label: "All Doctors" },
    { label: "Individual" },
    { label: "Hospital Associated" },
  ];

  const TabPanelList = [
    {
      component: <Table />,
    },
    {
      component: <Table />,
    },
    {
      component: <Table />,
    },
  ];

  const [value, setTabValue] = React.useState(0);
  const router = useRouter();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  const handleClickOpen = () => {
    router.push("/doctor-management/add-doctor");
  };

  return (
    <>
      <ManagementGrid
        moduleName="Doctor Management"
        button="Add Doctor"
        tabs={tabs}
        value={value}
        handleChange={handleChange}
        handleClickOpen={handleClickOpen}
        breadcrumbItems={breadcrumbItems}
        TabPanelList={TabPanelList}
      />
    </>
  );
}
