import React from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { TextFieldProps } from "@mui/material";

interface CustomTextFieldProps {
  type?: "email" | "text" | "search";
  label?: string;
  placeholder?: string;
  error?: boolean;
  helperText?: any;
  name?: any;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  type,
  label,
  placeholder,
  error,
  helperText,
  name,
  value,
  onChange,
  ...restProps
}) => {
  return (
    <Stack>
      <TextField
        {...restProps}
        name={name}
        label={label}
        error={error}
        value={value}
        variant="outlined"
        placeholder={placeholder}
        helperText={helperText}
        onChange={onChange}
        sx={{
          borderRadius: "8px",
          mb: 3,
        }}
        InputProps={
          type
            ? {
                startAdornment: (
                  <InputAdornment position="start">
                    {type === "email" && (
                      <MdOutlineMailOutline fontSize="medium" />
                    )}
                    {type === "search" && <FaMagnifyingGlass />}
                  </InputAdornment>
                ),
              }
            : {}
        }
      />
    </Stack>
  );
};

export default CustomTextField;
