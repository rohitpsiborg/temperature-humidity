"use client";
import React from "react";
import { Grid, Typography, AppBar, styled } from "@mui/material";
import Breadcrumbs from "@/app/(components)/mui-components/Breadcrumbs";
import { Tabs, Tab, Button } from "@mui/material";
import { IoMdAddCircleOutline } from "react-icons/io";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{ width: "100%" }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
interface Breadcrumb {
  label: string;
  link: string;
}

interface TabData {
  label: string;
}

interface TabPanelItem {
  component: React.ReactNode;
}

interface ManagementGridProps {
  breadcrumbItems: Breadcrumb[];
  value?: number;
  handleChange?: (event: React.SyntheticEvent, newValue: number) => void;
  tabs?: TabData[];
  TabPanelList?: TabPanelItem[];
  moduleName?: string;
  button?: string;
  handleClickOpen?: any;
}

const ChildBarStyled = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  transition: "none",
  color: theme.palette.text.primary,
}));

const ManagementGrid: React.FC<ManagementGridProps> = ({
  moduleName,
  breadcrumbItems,
  value,
  handleChange,
  tabs,
  TabPanelList,
  button,
  handleClickOpen,
}) => {
  return (
    <>
      <ChildBarStyled position="sticky" color="default">
        <Breadcrumbs breadcrumbItems={breadcrumbItems} />
        <Typography
          sx={{ backgroundColor: "#fff", padding: "12px" }}
          component={"h2"}
          variant="h3"
          color="info"
        >
          {moduleName}
        </Typography>
        {tabs && (
          <Grid
            container
            sx={{
              backgroundColor: "#fff",
              p: "0px 12px 12px 12px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Tabs value={value} onChange={handleChange} centered>
              {tabs.map((tab: TabData, index: number) => (
                <Tab key={index} label={tab.label} {...a11yProps(index)} />
              ))}
            </Tabs>
            {button && (
              <Button
                onClick={handleClickOpen}
                startIcon={<IoMdAddCircleOutline />}
                variant="contained"
                size="small"
              >
                {button}
              </Button>
            )}
          </Grid>
        )}
      </ChildBarStyled>
      {TabPanelList && (
        <Grid container sx={{ backgroundColor: "#fff", mt: 2 }}>
          {TabPanelList.map((panel: any, index: number) => (
            <TabPanel key={index} value={value} index={index}>
              {panel.component}
            </TabPanel>
          ))}
        </Grid>
      )}
    </>
  );
};

export default ManagementGrid;
