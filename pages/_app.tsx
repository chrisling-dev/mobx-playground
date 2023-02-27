import { configure } from "mobx";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RootStoreProvider } from "../context/RootStoreProvider";

// mobx config
configure({
  enforceActions: "observed",
  computedRequiresReaction: true,
  reactionRequiresObservable: false,
  observableRequiresReaction: false,
  disableErrorBoundaries: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootStoreProvider>
      <Component {...pageProps} />
    </RootStoreProvider>
  );
}

export default MyApp;
