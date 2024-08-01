import React from "react";
import { Grid } from "@mui/material";
import ManagementGrid from "@/app/(components)/mui-components/Card";
type Breadcrumb = {
  label: string;
  link: string;
};
const breadcrumbItems: Breadcrumb[] = [
  { label: "Dashboard", link: "/" },
  { label: "Doctor Management", link: "/doctor-management" },
  { label: "Add Doctor", link: "" },
];
export default function DoctorAdd() {
  return (
    <>
      <ManagementGrid
        moduleName="Add New Doctor"
        breadcrumbItems={breadcrumbItems}
      />
      <Grid container mt={2}>
        <Grid item xs={6} sx={{ border: "1px solid #ddd" }}></Grid>
        <Grid item xs={6} sx={{ border: "1px solid #ddd" }}></Grid>
      </Grid>
    </>
  );
}
