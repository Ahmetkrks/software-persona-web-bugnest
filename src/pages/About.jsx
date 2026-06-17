function About({ t }) {
  return (
    <main className="about-page">
      <section className="about-panel">
        <p className="eyebrow">{t.about.eyebrow}</p>
        <h1>{t.about.title}</h1>
        <p>{t.about.description}</p>

        <div className="about-grid">
          <div>
            <h2>{t.about.purposeTitle}</h2>
            <p>{t.about.purpose}</p>
          </div>
          <div>
            <h2>{t.about.technologiesTitle}</h2>
            <ul>
              {t.about.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
