import { Link, styled } from '@mui/material';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.appColors.violet[400]};
`;
