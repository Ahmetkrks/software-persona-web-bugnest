function About() {
  return (
    <main className="about-page">
      <section className="about-panel">
        <p className="eyebrow">About BugNest</p>
        <h1>A compact internship project for tracking software issues.</h1>
        <p>
          BugNest is a mini issue, bug, and feedback tracking app built to demonstrate practical React state
          management, reusable components, LocalStorage persistence, and a clean dashboard interface without a
          backend.
        </p>

        <div className="about-grid">
          <div>
            <h2>Purpose</h2>
            <p>
              The app helps teams record project feedback, update progress, filter records, and understand the
              current workload through simple statistics.
            </p>
          </div>
          <div>
            <h2>Technologies</h2>
            <ul>
              <li>React + Vite</li>
              <li>JavaScript functional components</li>
              <li>Pure CSS responsive design</li>
              <li>LocalStorage persistence</li>
              <li>Netlify-ready static build</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
