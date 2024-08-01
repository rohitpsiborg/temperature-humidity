"use client";
import React from "react";
import { Grid, Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface BreadcrumbItem {
  label: string;
  link: string;
}

interface CustomBreadcrumbsProps {
  breadcrumbItems: BreadcrumbItem[];
}

const CustomBreadcrumbs: React.FC<CustomBreadcrumbsProps> = ({
  breadcrumbItems,
}) => {
  const pathname = usePathname();
  return (
    <Grid
      container
      sx={{ backgroundColor: "#fff", pl: "12px", pr: "12px", pt: "12px" }}
      direction="row"
      justifyContent="start"
    >
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbItems.map((item, index) => (
          <Link href={item.link} key={index}>
            <Typography
              color={pathname === item.link ? "primary" : "grey"}
              variant={pathname === item.link ? "h6" : "h6"}
              style={{
                cursor: pathname !== item.link ? "pointer" : "initial",
              }}
            >
              {item.label}
            </Typography>
          </Link>
        ))}
      </Breadcrumbs>
    </Grid>
  );
};

export default CustomBreadcrumbs;
