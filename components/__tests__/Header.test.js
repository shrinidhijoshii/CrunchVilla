import { render } from "@testing-library/react";
import { Header } from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Check header logo on page render", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  // header holds the virtual dom (js object of the component)
  console.log(header)
});
