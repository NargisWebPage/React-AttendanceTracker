
import React from "react";
import UseLocalStorage from "../hook/UseLocalStorage";

interface Student {
  name: string;
  present: boolean;
}

function AttendanceTracker() {
  const [students, setStudents] = UseLocalStorage<Student[]>("attendance", [
    { name: "Ahmad", present: false },
    { name: "Fatema", present: false },
    { name: "Yusuf", present: false },
    { name: "Mariam", present: false },
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

          <span className={student.present ? "present-text" : "absent-text"}>
            {student.present ? "Present" : "Absent"}
          </span>

          <button onClick={(e) => handleToggle(e, index)}>
            {student.present ? "Mark absent" : "Mark present"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default AttendanceTracker;
