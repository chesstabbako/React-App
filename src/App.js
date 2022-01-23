import "react-perfect-scrollbar/dist/css/styles.css";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import GlobalStyles from "src/components/GlobalStyles";
import theme from "src/theme";
import routes from "src/routes";
import { Provider } from "react-redux";
import store from "./store";
import NotificationContainer from "./components/notification/Notify.js";

const App = () => {
  const routing = useRoutes(routes);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NotificationContainer />
        {routing}
      </ThemeProvider>
    </Provider>
  );
};

export default App;
