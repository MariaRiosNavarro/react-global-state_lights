import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [lightState, setLightState] = useState(lightsArray);

  // function handleToggle() {
  //   setIsOn((isOn) => !isOn);
  // }

  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} isOn={isOn} handleToggle={handleToggle} />
    </Layout>
  );
}

lightsArray = [
  { id: "1", name: "Living Room", isOn: false },
  { id: "2", name: "Kitchen", isOn: false },
  { id: "3", name: "Bedroom", isOn: false },
  { id: "1", name: "Bathroom", isOn: false },
  { id: "2", name: "Garage", isOn: false },
  { id: "3", name: "Porch", isOn: false },
];
