import './App.css'

const featuredCourses = [
  {
    title: 'AI Design for Product Teams',
    instructor: 'Maya Chen',
    rating: '4.8',
    students: '18,422',
    duration: '12h 30m',
    image:
      'https://images.unsplash.com/photo-1677442135968-6f5f09377ec4?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Prompt Engineering Masterclass',
    instructor: 'Jordan Patel',
    rating: '4.9',
    students: '24,016',
    duration: '9h 10m',
    image:
      'https://images.unsplash.com/photo-1675557009875-436f0c1157e8?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Build Modern Web Apps with React',
    instructor: 'Sofia Rivera',
    rating: '4.7',
    students: '31,208',
    duration: '14h 40m',
    image:
      'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Data Storytelling with Generative AI',
    instructor: 'Noah Kim',
    rating: '4.8',
    students: '11,902',
    duration: '8h 20m',
    image:
      'https://images.unsplash.com/photo-1675271591211-8d9f6f523fb3?auto=format&fit=crop&w=900&q=80',
  },
]

const topics = [
  'Development',
  'Business',
  'IT & Software',
  'Personal Development',
  'Design',
  'Marketing',
]

function App() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Udemy Clone</p>
        <h1>Learn in-demand skills with beautiful AI-powered courses</h1>
        <p className="hero-copy">
          Explore a redesigned learning experience with cinematic AI images,
          expert-led classes, and career-ready paths.
        </p>
        <div className="hero-actions">
          <button className="primary-btn">Start Learning</button>
          <button className="secondary-btn">Browse Categories</button>
        </div>
      </section>

      <section className="topics">
        {topics.map((topic) => (
          <span key={topic} className="topic-pill">
            {topic}
          </span>
        ))}
      </section>

      <section className="cards-section">
        <div className="section-header">
          <h2>Featured learning paths</h2>
          <p>Stylish cards + AI-inspired visuals for every course.</p>
        </div>

        <div className="cards-grid">
          {featuredCourses.map((course) => (
            <article key={course.title} className="course-card">
              <img src={course.image} alt={`${course.title} AI themed artwork`} />
              <div className="course-content">
                <span className="badge">AI IMAGE</span>
                <h3>{course.title}</h3>
                <p>{course.instructor}</p>
                <div className="meta">
                  <span>⭐ {course.rating}</span>
                  <span>{course.students} learners</span>
                  <span>{course.duration}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
