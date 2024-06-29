import type { AppProps } from 'next/app'
import '../app/globals.css'
import { SnackbarProvider } from 'notistack'
import { TonConnectUIProvider, THEME } from '@tonconnect/ui-react';
import Header from './Header';
import Footer from './Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TonConnectUIProvider
      // manifestUrl="/tonconnect-manifest.json"
      manifestUrl="https://ipfs.io/ipfs/QmPGbEC1E62wMWi11Yn3Q3K35e1fdPiyU7qXH9jX9mq7tP"
      uiPreferences={{ theme: THEME.DARK }}
      walletsListConfiguration={{
        includeWallets: [
          {
            appName: "safepalwallet",
            name: "SafePal",
            imageUrl:
              "https://s.pvcliping.com/web/public_image/SafePal_x288.png",
            aboutUrl: "https://www.safepal.com/download",
            jsBridgeKey: "safepalwallet",
            platforms: ["ios", "android", "chrome", "firefox"],
          },
          {
            appName: "tonwallet",
            name: "TON Wallet",
            imageUrl: "https://wallet.ton.org/assets/ui/qr-logo.png",
            aboutUrl:
              "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
            universalLink: "https://wallet.ton.org/ton-connect",
            jsBridgeKey: "tonwallet",
            bridgeUrl: "https://bridge.tonapi.io/bridge",
            platforms: ["chrome", "android"],
          },
        ],
      }}
      actionsConfiguration={{
        twaReturnUrl: "https://t.me/tc_twa_demo_bot/start",
      }}
    >
      <SnackbarProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SnackbarProvider>
    </TonConnectUIProvider>
  );
}