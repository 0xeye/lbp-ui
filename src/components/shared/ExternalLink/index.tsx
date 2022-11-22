import { FC } from 'react';
import { Stack, Typography, Link, LinkProps, styled } from '@mui/material';
import { ExternalIcon } from '../Icons';

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.appColors.slate[400]};
  text-decoration: none;

  svg path {
    fill: ${({ theme }) => theme.appColors.slate[400]};
  }
`;

export const ExternalLink: FC<LinkProps> = ({ href, children, ...props }) => (
  <StyledLink href={href} target="_blank" {...props}>
    <Stack direction="row" spacing={0.75} alignItems="center">
      <Typography color={props.color}>{children}</Typography>
      <ExternalIcon />
    </Stack>
  </StyledLink>
);
