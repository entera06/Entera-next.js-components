export default function SkillsList() {
  const skills = ["Time Management Skills", "Communication Skills", "Teamwork",];

  return (
    <section style={{ padding: "1rem" }}>
      <h3>My Skills</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
