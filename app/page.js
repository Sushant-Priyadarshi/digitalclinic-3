import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>DigitalClinic</h1>

      <p>
        A smart doctor appointment and queue management platform.
      </p>

      <div style={{ marginTop: "20px" }}>
        <Link href="/doctors">
          <button style={{ padding: "10px 20px", cursor: "pointer" }}>
            Find Doctors
          </button>
        </Link>
      </div>
    </div>
  );
}