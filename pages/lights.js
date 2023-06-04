import Link from "../components/Link";
import Lights from "../components/Lights";

export default function Rooms({ lightState, onToggleLight }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>All Lights</h1>
      <Lights lightState={lightState} onToggleLight={onToggleLight} />
    </>
  );
}
