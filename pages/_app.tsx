import '../styles/globals.css';
import '../styles/completeModal.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'libs/theme/ThemeProvider';
import { GlobalStyle } from 'libs/theme/GlobalStyle';
import Loading from 'components/common/Loading';
import Modal from 'components/common/Modal';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { getCookie, setCookie } from 'cookies-next';
import axios from 'libs/axios';
import { NEXT_SERVER } from 'config';
import { userStore } from 'libs/zustand/store';
import { useEffect, useRef } from 'react';
import SocketNotice from 'components/common/SocketNotice';
import ToastList from 'components/common/Toast/ToastList';
import NotificationList from 'components/common/Popup/PopupList';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  const { setUser } = userStore();

  useEffect(() => {
    if (pageProps.user) {
      setUser(pageProps.user);
    }
  }, [setUser, pageProps.user]);

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider pageTheme={pageProps.theme}>
          <GlobalStyle />
          <Component {...pageProps} />
          <ToastList />
          <NotificationList />
          <Loading />
          <Modal />
          <SocketNotice user={pageProps.user} />
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

MyApp.getInitialProps = async ({ ctx, Component }: { ctx: any; Component: any }) => {
  const themeKeys: ThemeKey[] = ['pink', 'silver', 'mint', 'dark'];
  let pageProps: any = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  const cookie = ctx.req?.cookies;
  if (cookie) {
    const localTheme = getCookie('localTheme', ctx) as ThemeKey;
    if (themeKeys.includes(localTheme)) {
      Object.assign(pageProps, {
        theme: localTheme,
      });
    } else {
      Object.assign(pageProps, {
        theme: 'pink',
      });
    }
  }

  const { req, res } = ctx;
  const { data } = await axios.get(`${NEXT_SERVER}/api/auth`, {
    headers: {
      Cookie: req?.headers.cookie || '',
    },
  });
  if (data.accessToken) {
    setCookie('accessToken', data.accessToken, { req, res });
  }
  if (data.user) {
    Object.assign(pageProps, {
      user: data.user,
    });
  }

  return { pageProps };
};

export default MyApp;
