import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ onLightsOff, onLightsOn, lightState }) {
  // Check if all lights are turned on
  // const allLightsOn = lightState.every((light) => light.isOn);

  return (
    <StyledQuickActions>
      {/* Button to turn all lights off */}
      <Button
        type="button"
        onClick={onLightsOff}
        // disabled={!lightState.length || !allLightsOn}
        // Disable the button if there are no lights or if all lights are already turned on
      >
        Turn all lights off
      </Button>

      {/* Button to turn all lights on */}
      <Button
        type="button"
        onClick={onLightsOn}
        // disabled={!lightState.length || allLightsOn}
        // Disable the button if there are no lights or if not all lights are turned on
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
