import styled from "styled-components";

import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights({ lightState }) {
  return (
    <StyledLights>
      {lightState.map((light) => {
        <Light
          key={light.id}
          id={light.id}
          name={light.name}
          isOn={light.isOn}
          onToggleLight={onToggleLight}
        />;
      })}
    </StyledLights>
  );
}
