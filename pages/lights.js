import Link from "../components/Link";
import Lights from "../components/Lights";

export default function Rooms({ curryLights, onToggleLight }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>All Lights</h1>
      <Lights curryLights={curryLights} onToggleLight={onToggleLight} />
    </>
  );
}
