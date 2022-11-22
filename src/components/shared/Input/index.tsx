import { forwardRef } from 'react';
import { styled, TextField, Button, TextFieldProps, Typography } from '@mui/material';

interface InputProps {
  onMaxClick?(): unknown;
  numeric?: boolean;
  label: string;
}

const TextFieldWrapper = styled('div')`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const MaxButton = styled(Button)`
  background-color: ${({ theme }) => theme.appColors.slate[600]};
  height: 1.5rem;
  border-radius: 0.25rem;
  white-space: nowrap;
  padding: 0 1.25rem;
  min-width: 2rem;
`;

const StyledTextField = styled(TextField)``;

export const Input = forwardRef(
  (
    {
      onMaxClick,
      maxButtonLabel = 'Max',
      numeric = true,
      label,
      ...props
    }: InputProps & TextFieldProps & { maxButtonLabel?: string },
    ref: any,
  ) => {
    return (
      <TextFieldWrapper>
        <StyledTextField
          {...props}
          ref={ref}
          sx={{ flex: '1' }}
          InputLabelProps={{ shrink: true }}
          size="small"
          label={label}
          variant="outlined"
          InputProps={{
            ...(numeric
              ? {
                  inputMode: 'decimal',
                  pattern: '^[0-9]*[.,]?[0-9]*$',
                  minLength: 1,
                  maxLength: 79,
                }
              : null),
            type: 'text',
            autoComplete: 'off',
            autoCorrect: 'off',
            spellCheck: 'false',
            endAdornment: onMaxClick && (
              <MaxButton
                sx={{ ml: 1 }}
                onClick={onMaxClick}
                size="small"
                color="secondary"
                variant="contained"
              >
                <Typography fontWeight={400} fontSize={13}>
                  {maxButtonLabel}
                </Typography>
              </MaxButton>
            ),
          }}
        />
      </TextFieldWrapper>
    );
  },
);
