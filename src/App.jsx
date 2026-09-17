import StudentCard from './StudentCard.jsx';

function App() {
  return (
    <main className="page-shell">
      <header className="page-heading">
        <p className="eyebrow">Student directory</p>
        <h1>Meet the class.</h1>
        <p className="intro">
          A quick view of the students currently shaping our campus community.
        </p>
      </header>

      <section className="student-grid" aria-label="Student profiles">
        <StudentCard
          name="John Carter"
          enrollmentId="ENR-2024-001"
          course="BCA"
          semester="5th Semester"
          email="john.carter@example.com"
        />
        <StudentCard
          name="Mary Thomas"
          enrollmentId="ENR-2023-014"
          course="MCA"
          semester="3rd Semester"
          email="mary.thomas@example.com"
        />
        <StudentCard
          name="Aisha Patel"
          enrollmentId="ENR-2024-027"
          course="BBA"
          semester="2nd Semester"
          email="aisha.patel@example.com"
        />
      </section>
    </main>
  );
}

export default App;
