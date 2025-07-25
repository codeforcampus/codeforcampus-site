// All CSE course titles and descriptions
const courses = [
  { name: "Java Programming", desc: "Object-Oriented core concepts in Java" },
  { name: "Python Programming", desc: "Beginner to advanced Python coding" },
  { name: "HTML & CSS", desc: "Build responsive websites" },
  { name: "JavaScript", desc: "Interactive web features" },
  { name: "Data Structures & Algorithms", desc: "Crack interviews with DSA skills" },
  { name: "React.js", desc: "Frontend framework for dynamic UIs" },
  { name: "Node.js", desc: "Build scalable backend with JavaScript" },
  { name: "MongoDB", desc: "NoSQL database for modern web" },
  { name: "SQL", desc: "Database query language" },
  { name: "Operating Systems", desc: "Learn process, memory, file systems" },
  { name: "Computer Networks", desc: "Understand networking layers" },
  { name: "Software Engineering", desc: "SDLC, testing, agile models" },
  { name: "C Programming", desc: "Basics of programming and memory" },
  { name: "Git & GitHub", desc: "Version control and collaboration" },
  { name: "Cybersecurity", desc: "Protect systems and networks" },
  { name: "Cloud Computing", desc: "AWS, Azure, virtualization basics" },
  { name: "Aptitude & Placement Prep", desc: "Quant, logical, verbal tests" }
];

// Render courses
function renderCourses(filter = "") {
  const container = document.getElementById("courseList");
  container.innerHTML = "";
  const filtered = courses.filter(course => course.name.toLowerCase().includes(filter.toLowerCase()));
  filtered.forEach(course => {
    const div = document.createElement("div");
    div.className = "course-card";
    div.innerHTML = `
      <h3>${course.name}</h3>
      <p>${course.desc}</p>
      <a href="course-details.html">Start Course</a>
    `;
    container.appendChild(div);
  });
}
renderCourses();

// Search filter
document.getElementById("searchInput").addEventListener("input", (e) => {
  renderCourses(e.target.value);
});

// Dark Mode Toggle
const toggleBtn = document.getElementById("darkToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
