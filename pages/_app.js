import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const lightsArray = [
  { id: "1", name: "Living Room", isOn: false },
  { id: "2", name: "Kitchen", isOn: false },
  { id: "3", name: "Bedroom", isOn: false },
  { id: "4", name: "Bathroom", isOn: false },
  { id: "5", name: "Garage", isOn: false },
  { id: "6", name: "Porch", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lightState, setLightState] = useState(lightsArray);

  function handleToggleLight(id) {
    // Update the lights array using the functional form of setState
    setLightState((lightState) =>
      // Map over each light object in the lights array
      lightState.map((light) => {
        // Check if the current light's id matches the provided id
        if (light.id === id) {
          // If it matches, create a new light object with the on property negated
          return { ...light, on: !light.on };
        }
        // If it doesn't match, return the original light object
        return light;
      })
    );
  }

  function handleAllLightssOn() {
    // Update the lightState by mapping over each light object
    setLightState(
      lightState.map((light) => {
        // Set the isOn property of each light object to true

        //I MUST TO CHANGE light.isON for light.on and now works!!
        //I MUST TO CHANGE light.isON for light.on and now works!!
        light.on = true;
        return light; // Return the updated light object
      })
    );
  }

  function handleAllLightsOff() {
    // Update the lightState using the functional form of setState
    setLightState((lightState) => {
      // Map over each light object in the lightState array
      return lightState.map((light) => {
        // Create a new light object with the isOn property set to false

        //I MUST TO CHANGE light.isON for light.on and now works!!
        //I MUST TO CHANGE light.isON for light.on and now works!!
        return { ...light, on: false };
      });
    });
  }

  const turnedOnLights = lightState.filter((light) => light.on);

  return (
    <Layout isDimmed={turnedOnLights.length === 0}>
      <GlobalStyle />
      <Component
        {...pageProps}
        curryLights={lightState}
        onToggleLight={handleToggleLight}
        onAllLightsOff={handleAllLightsOff}
        onAllLightsOn={handleAllLightssOn}
        lightsOn={turnedOnLights.length}
      />
    </Layout>
  );
}
