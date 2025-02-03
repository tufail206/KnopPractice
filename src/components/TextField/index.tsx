import { TextFieldProps } from "@mui/material";
import React, { ReactNode } from "react";
import { Control, Controller, RegisterOptions } from "react-hook-form";
import StyledOutlinedInput from "./StyledOutlinedInputs";

type UITextInputProps = {
  placeholder?: string;
  control?: Control<any>;
  name?: string;
  rules?: RegisterOptions;
  multiline?: boolean;
  fullWidth?: boolean; // Make fullWidth optional
  label?: ReactNode;
  type?: React.HTMLInputTypeAttribute;
} & TextFieldProps;

const UITextInput = ({
  placeholder,
  fullWidth = true, // Default to true if not provided
  control,
  name,
  rules,
  multiline,
  label,
  type,
  ...props
}: UITextInputProps) => {
  return control && name ? (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <StyledOutlinedInput
          {...field}
          label={label}
          placeholder={placeholder}
          error={Boolean(fieldState.error)}
          helperText={fieldState.error?.message}
          multiline={multiline}
          type={type}
          fullWidth={fullWidth}
          onChange={(e) => {
            const { value } = e.target;

            // Type casting for number input
            field.onChange(
              type === "number" ? (value ? Number(value) : null) : value
            );
          }}
          value={field.value || ""}
          {...props}
        />
      )}
    />
  ) : (
    <StyledOutlinedInput
      placeholder={placeholder}
      type={type}
      fullWidth={fullWidth}
      {...props}
    />
  );
};

export default UITextInput;
