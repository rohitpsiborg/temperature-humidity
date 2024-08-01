"use client";
import React from "react";
import PageContainer from "@/app/(components)/container/PageContainer";
import {
  Typography,
  Button,
  IconButton,
  Grid,
  Box,
  Stack,
} from "@mui/material";
import Tabs from "@/app/(components)/mui-components/Tabs";
import { AiOutlineDelete } from "react-icons/ai";
import CustomTooltip from "@/app/(components)/mui-components/Tooltip";
import BaseCard from "@/app/(components)/mui-components/Card/shared/BaseCard";
import CommonPhoneInput from "@/app/(components)/mui-components/Text-Field's/phone-Input-Wrapper";
import Calendar from "@/app/(components)/mui-components/Text-Field's/Date-range-Picker";
import ToastComponent, {
  notifyError,
  notifySuccess,
} from "@/app/(components)/mui-components/Snackbar";
import CustomTextField from "@/app/(components)/mui-components/Text-Field's";
import ConfirmationDialog from "@/app/(components)/mui-components/Dialog/confirmation-dialog";
import AssignDialog from "@/app/(components)/mui-components/Dialog/assign-dialog";
import Breadcrumbs from "@/app/(components)/mui-components/Breadcrumbs";
import SwitchDialog from "@/app/(components)/mui-components/Switch";
import CustomTable from "@/app/(components)/mui-components/Table";
import { BsPencilSquare, BsTrash, BsEye } from "react-icons/bs";

interface TabData {
  label: string;
}

const tabs: TabData[] = [{ label: "One" }, { label: "Two" }];

const TabPanelList = [
  {
    component: "",
  },
  {
    component: "",
  },
];
type Breadcrumb = {
  label: string;
  link: string;
};

const breadcrumbItems: Breadcrumb[] = [
  { label: "Dashboard", link: "/" },
  {
    label: "Device Management",
    link: "/device-management",
  },
  {
    label: "Patient Management",
    link: "/patient-management",
  },
  {
    label: "Doctor Management",
    link: "/doctor-management",
  },
];
const columns = [
  { id: "deviceInfo", label: "Device Info" },
  { id: "macId", label: "Device Mac ID" },
  { id: "assignedOn", label: "Assigned on" },
  { id: "powerStatus", label: "Power Status" },
];

const renderActions = () => (
  <>
    <IconButton size="small">
      <BsEye />
    </IconButton>
    <IconButton size="small">
      <BsPencilSquare />
    </IconButton>
    <IconButton size="small">
      <BsTrash />
    </IconButton>
  </>
);
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
];
const actions = [renderActions()];
const Dashboard = () => {
  const [value, setTabValue] = React.useState(0);
  const [date, setDate] = React.useState();
  const [dataForTableOrder, setdataForTableOrder] = React.useState(null);

  const [analyticsDate, setAnalyticsDate] = React.useState([]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  const handleSuccess = () => {
    notifySuccess("Operation successful");
  };

  const handleError = () => {
    notifyError("Operation failed");
  };
  const handleInputPhoneChange = (value: string) => {
    // Handle phone number change
  };

  const handleClose = () => {};

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <ToastComponent />
      <Typography variant="h1" color={"primary"} component="h1">
        Dashboard
      </Typography>
      <Breadcrumbs breadcrumbItems={breadcrumbItems} />
      <Grid container spacing={3}>
        <Grid item lg={2}>
          <BaseCard title="Color Buttons">
            <Box sx={{ "& button": { mr: 1 } }}>
              <Button
                size="small"
                variant="outlined"
                color="info"
                sx={{ marginBottom: "5px" }}
              >
                outlined
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ marginBottom: "5px" }}
              >
                Contained
              </Button>
              <Button
                variant="contained"
                color="error"
                size="medium"
                sx={{ marginBottom: "5px" }}
              >
                Contained
              </Button>
              <Button
                size="large"
                variant="contained"
                color="secondary"
                sx={{ marginBottom: "5px" }}
              >
                Contained
              </Button>
            </Box>
          </BaseCard>
        </Grid>
        <Grid item lg={1.2}>
          <BaseCard title="ToolTip">
            <CustomTooltip title="Delete">
              <IconButton>
                <AiOutlineDelete />
              </IconButton>
            </CustomTooltip>
          </BaseCard>
        </Grid>
        <Grid item lg={2}>
          <BaseCard title="Tabs">
            <Tabs
              value={value}
              handleChange={handleChange}
              tabs={tabs}
              TabPanelList={TabPanelList}
            />
          </BaseCard>
        </Grid>
        <Grid item xs={2}>
          <BaseCard title="Snackbar">
            <Stack>
              <Button
                variant="contained"
                color="success"
                size="medium"
                onClick={handleSuccess}
                sx={{ marginBottom: "5px" }}
              >
                Success
              </Button>
              <Button
                variant="contained"
                color="error"
                size="medium"
                onClick={handleError}
                sx={{ marginBottom: "5px" }}
              >
                Error
              </Button>
            </Stack>
          </BaseCard>
        </Grid>
        <Grid item xs={4}>
          <BaseCard title="TextField">
            <Stack>
              <CommonPhoneInput
                country="in"
                value=""
                onChange={handleInputPhoneChange}
              />
            </Stack>
            <Stack mt={2}>
              <CustomTextField type="email" label="Email" />
              <CustomTextField type="text" label="First Name" />
              <CustomTextField type="search" placeholder="Search ID / Name" />
            </Stack>
            <Stack mt={3}>
              <Typography component={"h3"}> Date Range Picker</Typography>
              {/* <Calendar getDataFromChildHandler={getDataFromChildHandler} /> */}
            </Stack>
          </BaseCard>
        </Grid>
        <Grid item xs={4}>
          <BaseCard title="Dialog">
            <Typography component={"h3"} mb={2}>
              Confirmation Dialog
            </Typography>
            <ConfirmationDialog
              title={"Cancel"}
              handleCloseFirst={handleClose}
              message={"Are you sure you want to cancel ?"}
            />
            <Typography component={"h3"} mt={2}>
              Assign Dialog
            </Typography>
            <AssignDialog />
          </BaseCard>
        </Grid>
        <Grid item xs={1.8}>
          <BaseCard title="Switch Dialog">
            <SwitchDialog />
          </BaseCard>
        </Grid>

        <Grid item xs={12}>
          <CustomTable
            columns={columns}
            rows={devices}
            actions={actions}
            rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
          />{" "}
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Dashboard;
