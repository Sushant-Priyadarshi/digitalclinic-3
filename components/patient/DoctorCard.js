export default function DoctorCard({ doctor }) {
  if (!doctor) return null;

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        width: "250px",
        textAlign: "center",
      }}
    >
      <img
        src={doctor.image || "https://via.placeholder.com/80"}
        width="80"
        height="80"
        style={{ borderRadius: "50%" }}
      />

      <h3>{doctor.name}</h3>
      <p>{doctor.specialty}</p>

      <p>⭐ {doctor.rating}</p>
      <p>₹{doctor.fee}</p>

      <button style={{ padding: "8px 15px", cursor: "pointer" }}>
        Book Appointment
      </button>
    </div>
  );
}