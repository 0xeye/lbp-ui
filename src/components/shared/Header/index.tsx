import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, styled, Stack, Box, Container } from '@mui/material';

import { ReactComponent as Logo } from '../../../assets/Logo.svg';
import { ConnectButton } from '../Buttons/ConnectButton';
import { useIsMinWidth } from '../../../hooks/useIsMinWidth';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.125rem;
  border-radius: 24px;
  padding: 0.375rem 1rem;
  color: ${({ theme }) => theme.appColors.gray[400]};
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.palette.text.primary};
    text-decoration: none;
  }

  svg path {
    fill: ${({ theme }) => theme.palette.text.primary};
  }
`;

export const Header: FC = () => {
  const isMinWidth = useIsMinWidth(900);

  const headerContent = [
    <Grid item xs={6} sm={6} md={4} key="1">
      <Stack direction="row" flex={1} justifyContent="flex-end">
        <ConnectButton />
      </Stack>
    </Grid>,
  ];

  return (
    <Box sx={{ borderBottom: theme => `1px solid ${theme.appColors.slate[700]}` }}>
      <Container>
        <Grid container direction="row" alignItems="center" justifyContent="space-between">
          <Grid item sm={6} md={4}>
            <Box flex={1} my={2}>
              <Stack direction={'row'} alignItems={'center'}>
                <StyledLink to="/" replace>
                  <Logo />
                </StyledLink>
              </Stack>
            </Box>
          </Grid>
          {isMinWidth ? headerContent : headerContent.reverse()}
        </Grid>
      </Container>
    </Box>
  );
};
