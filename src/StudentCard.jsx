function StudentCard({ name, enrollmentId, course, semester, email }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="student-card">
      <div className="student-card__topline">
        <div className="student-card__avatar" aria-hidden="true">
          {initials}
        </div>
        <span className="student-card__status">Enrolled</span>
      </div>

      <div className="student-card__identity">
        <h2>{name}</h2>
        <p>{enrollmentId}</p>
      </div>

      <dl className="student-card__details">
        <div>
          <dt>Course</dt>
          <dd>{course}</dd>
        </div>
        <div>
          <dt>Semester</dt>
          <dd>{semester}</dd>
        </div>
      </dl>

      <a className="student-card__email" href={`mailto:${email}`}>
        {email}
      </a>
    </article>
  );
}

export default StudentCard;
