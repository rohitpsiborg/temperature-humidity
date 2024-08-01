"use client";
import React, { useState, FormEvent } from "react";
import { signIn } from "next-auth/react";
import axios from "axios";

import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
} from "@mui/material";
import Link from "next/link";
import CustomTextField from "@/app/(components)/forms/theme-elements/CustomTextField";

interface loginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}
const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    const body = {
      emailMobUid: username,
      // password: password,
      // email: username,
      password: password,
      userRole: "1",
      macAddress: "35678847447",
    };
    setErrorMessage(null);
    if (!username || !password) {
      setErrorMessage("Please provide both username and password.");
      return;
    }

    try {
      const response = await axios.post(
        // "http://localhost:5000/api/login",
        "https://api.brainstorminternational.co.in/auth/login",
        body
      );
      if (response.status) {
        signIn("credentials", {
          username: username,
          password: password,
          callbackUrl: `/`,
          redirect: true,
        });
      }
    } catch (error: any) {
      console.log("Catch Block Work", error);
      setErrorMessage(error?.response?.data?.message);
    }
  }
  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}

      <form onSubmit={handleLogin}>
        <Stack>
          <Box>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="username"
              mb="5px"
            >
              Username
            </Typography>
            <CustomTextField
              variant="outlined"
              fullWidth
              id="username"
              name="username"
              value={username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
            />
          </Box>

          <Box mt="25px">
            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="password"
              mb="5px"
            >
              Password
            </Typography>
            <CustomTextField
              type="password"
              variant="outlined"
              fullWidth
              name="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </Box>
          <Stack
            justifyContent="space-between"
            direction="row"
            alignItems="center"
            my={2}
          >
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "secondary.main",
                    }}
                  />
                }
                label="Remember this Device"
              />
            </FormGroup>
            <Typography
              component={Link}
              href="/"
              fontWeight="500"
              sx={{
                textDecoration: "none",
                color: "secondary.main",
              }}
            >
              Forgot Password?
            </Typography>
          </Stack>
        </Stack>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <Box>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            fullWidth
            type="submit"
          >
            Sign In
          </Button>
        </Box>{" "}
      </form>

      {subtitle}
    </>
  );
};

export default AuthLogin;
