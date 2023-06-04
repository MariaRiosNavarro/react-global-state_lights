import Link from "../components/Link";

export default function HomePage({ lightState, lightsOn }) {
  return (
    <div>
      <h1>Home</h1>
      <p>
        {lightState} light(s) are {lightsOn}.
      </p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
