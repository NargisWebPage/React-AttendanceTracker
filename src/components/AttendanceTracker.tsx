import { useState } from "react";

interface Student {
  name: string;
  present: boolean;
}

function AttendanceTracker() {
  const [students, setStudents] = useState<Student[]>([
    { name: "Mokhtar", present: false },
    { name: "Zuhal", present: false },
    { name: "Samea", present: false },
    { name: "Ali", present: false },
    { name: "Hussain", present: false },
    { name: "Zahra", present: false },
  ]);

  const handleToggle = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    setStudents(
      students.map((s, i) =>
        i === index ? { ...s, present: !s.present } : s
      )
    );
  };

  const presentCount = students.filter((s) => s.present).length;

  return (
    <div>
      <h2>{presentCount} of 6 present</h2>
      {students.map((student, index) => (
        <div key={student.name}>
          <span>{student.name} - </span>
          <span>{student.present ? "Present" : "Absent"}</span>
          <button onClick={(e) => handleToggle(e, index)}>
            {student.present ? "Mark absent" : "Mark present"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default AttendanceTracker;