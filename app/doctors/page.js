import DoctorCard from "../../components/patient/DoctorCard";
import { doctors } from "../../data/mock";

export default function Doctors() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Find Doctors</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}