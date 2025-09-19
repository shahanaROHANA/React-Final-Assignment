export default function About(){
    return(
        <div className="full" > 
            <h1 className="title1">Student Management App</h1>
            <section className="section1">
                <p>This application helps teachers and administrators manage student
          records easily and quickly. You can store and track details like name,
          age, course and email in one place.</p>
            </section>
            <section className="courses-section">
        <h3> Available Courses</h3>
        <div className="courses-grid">
          <div className="course-card">Computer Science</div>
          <div className="course-card">Information Technology</div>
          <div className="course-card">Business Management</div>
          <div className="course-card">Data Science</div>
          <div className="course-card">English Communication</div>
        </div>
      </section>
            
            <footer className="footer1">
                <p>Thank you for using the <strong>Student Management App</strong>!! Making Student Management simple and efficient!!!</p>
                <small className="small1">| Developed by Shahana & Team</small>
            </footer>
        </div>
    )
}