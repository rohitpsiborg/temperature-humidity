"use client";
import React, { useState, ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { DialogActions, Button, DialogContent } from "@mui/material";
import ManagementGrid from "@/app/(components)/mui-components/Card";
import CustomTextField from "@/app/(components)/mui-components/Text-Field's";
import ConfirmationDialog from "@/app/(components)/mui-components/Dialog/confirmation-dialog";
import ToastComponent, {
  notifyError,
  notifySuccess,
} from "@/app/(components)/mui-components/Snackbar";
import CommonDialog from "@/app/(components)/mui-components/Dialog/common-dialog";
import OverviewTab from "@/app/(components)/pages/Device_Management/profile_tabs/overview";
import AnalyticsTab from "@/app/(components)/pages/Device_Management/profile_tabs/analytics";
import AssignedTab from "@/app/(components)/pages/Device_Management/profile_tabs/assigned";
import LogsTab from "@/app/(components)/pages/Device_Management/profile_tabs/logs";

export default function deviceProfile({
  params,
}: {
  params: { slug: string };
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
    getValues,
    reset,
  } = useForm();
  type Breadcrumb = {
    label: string;
    link: string;
  };
  const breadcrumbItems: Breadcrumb[] = [
    { label: "Dashboard", link: "/" },
    { label: "Device Management", link: "/device-management" },
    { label: "Device 1", link: "" },
  ];
  interface TabData {
    label: string;
  }

  const tabs: TabData[] = [
    { label: "Overview" },
    { label: "Analytics" },
    { label: "Assigned" },
    { label: "Logs" },
  ];

  const TabPanelList = [
    {
      component: <OverviewTab />,
    },
    {
      component: <AnalyticsTab />,
    },
    {
      component: <AssignedTab />,
    },
    {
      component: <LogsTab />,
    },
  ];

  const [value, setTabValue] = React.useState(0);
  const [open, setOpen] = useState<boolean>(false);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  const handleClose = () => {
    setOpen(false);
    reset();
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const onSubmit = async () => {
    try {
      const formData = getValues();
      console.log(formData);
      notifySuccess("Device create successfully");
      handleClose();
    } catch (error) {
      handleClose();
    }
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValue(name, value);
    if (errors[name]) {
      clearErrors(name);
    }
  };
  return (
    <>
      <ToastComponent />
      <CommonDialog
        open={open}
        maxWidth={"xs"}
        fullWidth={true}
        title="Edit Device"
        message={"Are you sure you want to cancel ?"}
        titleConfirm={"Cancel"}
        onClose={handleClose}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <CustomTextField
              {...register("deviceMACID", {
                required: "Device MAC ID is required",
              })}
              name="deviceMACID"
              label="Device MAC ID"
              placeholder="Enter Device MAC ID"
              error={!!errors.deviceMACID}
              helperText={errors.deviceMACID?.message}
              onChange={handleInputChange}
            />
            <CustomTextField
              {...register("deviceName", {
                required: "Device Name is required",
              })}
              name="deviceName"
              label="Device Name"
              placeholder="Enter Device Name"
              error={!!errors.deviceName}
              helperText={errors.deviceName?.message}
              onChange={handleInputChange}
            />
            <CustomTextField
              {...register("deviceUID", {
                required: "Device UID is required",
              })}
              label="Device UID"
              placeholder="Enter Device UID"
              error={!!errors.deviceUID}
              helperText={errors.deviceUID?.message}
              onChange={handleInputChange}
            />
          </DialogContent>
          <DialogActions className="dialog-action-btn">
            <ConfirmationDialog
              title={"Cancel"}
              handleCloseFirst={handleClose}
              message={"Are you sure you want to cancel ?"}
            />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </DialogActions>
        </form>
      </CommonDialog>
      <ManagementGrid
        moduleName="Device 1"
        button="Edit Device"
        tabs={tabs}
        value={value}
        handleClickOpen={handleClickOpen}
        handleChange={handleChange}
        breadcrumbItems={breadcrumbItems}
        TabPanelList={TabPanelList}
      />
    </>
  );
}
