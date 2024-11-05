import { CssBaseline } from "@mui/material";
import { type Metadata } from "next";
import localFont from 'next/font/local';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import ThemeWrapper from "@theme/ThemeWrapper";
import theme from "@theme/theme";

export const metadata: Metadata = {
  title: "NexLabs - Index your trades, your investment, your future",
  description: "NexLabs: Index your trades, your investment, your future.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const Aeonik = localFont({
  src: [
    { path: './fonts/Aeonik-Air.woff2', weight: '100', style: 'normal' },
    { path: './fonts/Aeonik-Thin.woff2', weight: '200', style: 'normal' },
    { path: './fonts/Aeonik-Light.woff2', weight: '300', style: 'normal' },
    { path: './fonts/Aeonik-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/Aeonik-Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/Aeonik-Bold.woff2', weight: '700', style: 'normal' },
    { path: './fonts/Aeonik-Black.woff2', weight: '900', style: 'normal' },
  ],
  display: 'swap',
});


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={Aeonik.className} style={{ overflowX: 'hidden', backgroundColor: theme.palette.background.default }}>
        <ThemeWrapper>
          <AppRouterCacheProvider>
            <CssBaseline />
            {children}
          </AppRouterCacheProvider>
        </ThemeWrapper>
      </body>
    </html>
  );
}
