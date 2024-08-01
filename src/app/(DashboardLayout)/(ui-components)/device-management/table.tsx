"use client";
import React from "react";
import { Grid, Typography, IconButton } from "@mui/material";
import CustomTable from "@/app/(components)/mui-components/Table";
import CustomTextField from "@/app/(components)/mui-components/Text-Field's";
import CommonDialog from "@/app/(components)/mui-components/Dialog";
import Link from "next/link";

import { BsPencilSquare, BsTrash, BsEye } from "react-icons/bs";
export default function DeviceManagement() {
  const columns = [
    { id: "deviceInfo", label: "Device Info" },
    { id: "macId", label: "Device Mac ID" },
    { id: "assignedOn", label: "Assigned on" },
    { id: "powerStatus", label: "Power Status" },
  ];
  const devices = [
    {
      deviceInfo: "Device 1",
      macId: "12345",
      assignedOn: "2024-03-08",
      powerStatus: "on",
    },
    {
      deviceInfo: "Device 2",
      macId: "67890",
      assignedOn: "2024-03-09",
      powerStatus: "off",
    },
    {
      deviceInfo: "Device 2",
      macId: "67890",
      assignedOn: "2024-03-09",
      powerStatus: "off",
    },
    {
      deviceInfo: "Device 2",
      macId: "67890",
      assignedOn: "2024-03-09",
      powerStatus: "off",
    },
    {
      deviceInfo: "Device 2",
      macId: "67890",
      assignedOn: "2024-03-09",
      powerStatus: "off",
    },
    {
      deviceInfo: "Device 2",
      macId: "67890",
      assignedOn: "2024-03-09",
      powerStatus: "off",
    },
    {
      deviceInfo: "Device 2",
      macId: "67890",
      assignedOn: "2024-03-09",
      powerStatus: "off",
    },
    {
      deviceInfo: "Device 2",
      macId: "67890",
      assignedOn: "2024-03-09",
      powerStatus: "off",
    },
    {
      deviceInfo: "Device 2",
      macId: "67890",
      assignedOn: "2024-03-09",
      powerStatus: "off",
    },
    {
      deviceInfo: "Device 2",
      macId: "67890",
      assignedOn: "2024-03-09",
      powerStatus: "off",
    },
    {
      deviceInfo: "Device 2",
      macId: "67890",
      assignedOn: "2024-03-09",
      powerStatus: "off",
    },
    {
      deviceInfo: "Device 2",
      macId: "67890",
      assignedOn: "2024-03-09",
      powerStatus: "off",
    },
    {
      deviceInfo: "Device 2",
      macId: "67890",
      assignedOn: "2024-03-09",
      powerStatus: "off",
    },
  ];

  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(10);
  const [open, setOpenDialog] = React.useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleConfirm = () => {
    handleCancel();
  };

  const handleCancel = () => {
    setOpenDialog(false);
  };
  const renderActions = () => (
    <>
      <Link href={`/device-management/${2324}`}>
        <IconButton size="small">
          <BsEye />
        </IconButton>
      </Link>
      <IconButton size="small">
        <BsPencilSquare />
      </IconButton>
      <IconButton size="small" onClick={handleOpenDialog}>
        <BsTrash />
      </IconButton>
    </>
  );
  const actions = [renderActions()];
  return (
    <>
      <CommonDialog
        open={open}
        fullWidth={true}
        maxWidth={"xs"}
        title="Confirmation"
        message="Are you sure you want to delete this device?"
        color="error"
        onClose={handleCancel}
        onConfirm={handleConfirm}
      />
      <Grid
        container
        mt={2}
        sx={{
          padding: "12px",
        }}
      >
        <Grid container justifyContent={"space-between"}>
          <Grid item>
            <Typography> Showing 10 out of 30 Devices</Typography>
          </Grid>
          <Grid item>
            <CustomTextField type="search" placeholder="Search ID / Name" />
          </Grid>
        </Grid>
        <CustomTable
          page={page}
          rows={devices}
          actions={actions}
          columns={columns}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
        />
      </Grid>
    </>
  );
}
