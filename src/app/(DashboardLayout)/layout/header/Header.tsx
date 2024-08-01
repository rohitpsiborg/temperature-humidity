import React from "react";
import { Box, AppBar, Grid, styled, Stack, IconButton } from "@mui/material";
import PropTypes from "prop-types";
// components
import Profile from "./Profile";
import { LuMenu } from "react-icons/lu";

interface ItemType {
  toggleMobileSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}

const Header = ({ toggleMobileSidebar }: ItemType) => {
  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    background: theme.palette.primary.main,
    transition: "none",
    padding: "12px 12px 0px 12px",
    backgroundColor: "#fff",
    color: theme.palette.text.primary,
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <Grid container justifyContent={"space-between"}>
        <Grid item>
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={toggleMobileSidebar}
            sx={{
              color: "#ddd",
              display: {
                lg: "none",
                xs: "flex",
              },
            }}
          >
            <LuMenu width="22" height="22" />
          </IconButton>
        </Grid>

        <Grid item>
          <Profile />
        </Grid>
      </Grid>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
