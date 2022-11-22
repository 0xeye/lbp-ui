import { FC } from 'react';
import { ThemeProvider, Box } from '@mui/system';
import { Container, styled } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes, HashRouter } from 'react-router-dom';
import { ModalProvider } from 'react-modal-hook';
import { TransitionGroup } from 'react-transition-group';
import { SWRConfig } from 'swr';
import { createStateContext } from 'react-use';
import { Mainnet, DAppProvider, Config, Kovan } from '@usedapp/core';
import { SnackbarProvider } from 'notistack';

import { LBP } from './pages/LBP';
import { Toasts } from './shared/Toasts';
import { Header } from './shared/Header';

import { ContractProvider, ContractUpdater } from '../context/ContractProvider';
import { NotificationsProvider } from '../context/notifications/provider';
import { ApolloProvider } from '../context/ApolloProvider';
import { nestComponents } from '../utils/reactUtils';
import { useMuiTheme } from '../hooks/useMuiTheme';
import { RPC_URLS } from '../constants';

const Inner = styled(Box)`
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const Layout: FC = ({ children }) => (
  <ModalProvider rootComponent={TransitionGroup}>
    <SnackbarProvider maxSnack={5}>
      <CssBaseline />
      <Toasts />
      <Inner>
        <Header />
        <Container>{children}</Container>
      </Inner>
    </SnackbarProvider>
  </ModalProvider>
);

export const [useImpersonateCtx, ImpersonateProvider] = createStateContext<string | undefined>(
  undefined,
);

const Providers = nestComponents(
  HashRouter as unknown as FC,
  ContractProvider,
  NotificationsProvider,
  ApolloProvider,
  ImpersonateProvider,
  ({ children }) => <ThemeProvider theme={useMuiTheme()}>{children}</ThemeProvider>,
);

const dappProviderConfig: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: RPC_URLS[Mainnet.chainId],
    [Kovan.chainId]: RPC_URLS[Kovan.chainId],
  },
};

export const App: FC = () => (
  <DAppProvider config={dappProviderConfig}>
    <SWRConfig
      value={{
        revalidateIfStale: true,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      }}
    >
      <Providers>
        <Layout>
          <Routes>
            <Route key={0} path="/" element={<LBP />} />
          </Routes>
        </Layout>
        <ContractUpdater />
      </Providers>
    </SWRConfig>
  </DAppProvider>
);
