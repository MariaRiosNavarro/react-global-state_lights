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

export default function Lights({ curryLights, onToggleLight }) {
  return (
    <StyledLights>
      {curryLights.map((light) => (
        //dont forget the key in the li
        <li key={light.id}>
          <Light
            id={light.id}
            name={light.name}
            //i have to change isOn={light.isOn} to isOn={light.on} and works the name change.. why?
            isOn={light.on}
            onToggleLight={onToggleLight}
          />
        </li>
      ))}
    </StyledLights>
  );
}
