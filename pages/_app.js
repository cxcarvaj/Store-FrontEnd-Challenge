import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from 'react-redux';
import "tailwindcss/tailwind.css";
import Header from "../src/Components/Header";
import store from "../src/Redux/Store";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
