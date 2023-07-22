import { render } from "@testing-library/react";
import { Header } from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";


// example of unit testing/ component
test("Check header logo on page render", async () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  // header holds the virtual dom (js object of the component)
  //   console.log(header);

  // we have used findAllByTestId , it will return array with all the elements with the matching id
  let logo = await header.findAllByTestId("logo");

//   console.log(logo[0]);

  expect(logo[0].src).toBe(
    "https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/c3e1073a-2db1-4049-b297-bda8c1a45be1.png"
  );
});
