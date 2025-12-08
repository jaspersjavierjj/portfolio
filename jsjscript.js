// Data
const techStackCategories = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8">
                    <path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H8.531z"/>
                </svg>`,
      },
      {
        name: "CSS",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8">
                    <path fill="#1572B6" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                </svg>`,
      },
      {
        name: "TypeScript",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8">
                    <path fill="#3178C6" d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                </svg>`,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8">
                    <path fill="#339933" d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
                </svg>`,
      },
      {
        name: "Django",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8">
                    <path fill="#092E20" d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.051 1.707.204zm0 9.143a3.894 3.894 0 0 0-1.325-.204c-1.988 0-3.134 1.223-3.134 3.364 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.529 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z"/>
                </svg>`,
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "Firebase",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8">
                    <path fill="#FFCA28" d="M5.016 18.573L8.109 6.85l1.98 3.7 4.915-9.288L16.984 5.355 19.076 18.573 12 22.048z"/>
                    <path fill="#FFA000" d="M5.016 18.573L8.109 6.85 12 10.55z"/>
                    <path fill="#FF6F00" d="M8.109 6.85L10.089 10.55 14.004 1.262 16.984 5.355z"/>
                </svg>`,
      },
      {
        name: "MySQL",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8">
                    <path fill="#4479A1" d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.274.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H.002c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 1.72.384 3.564.423 5.53zM9.97 18.695h-.705l-.27-.855H6.8l-.195.855H5.923l1.454-5.53h.705l1.889 5.53zm-1.663-5.173l-.977 3.825h1.94l-.963-3.825zM11.52 18.695V14.61c0-.387.013-.704.054-.95h-.054l-1.748 5.034h-.414l-1.748-5.03h-.055c.054.18.081.493.081.937v4.094H6.925v-5.53h.705l1.335 4.064h.008l1.347-4.064h1.095c.242 1.72.384 3.564.423 5.53zM14.143 18.695V14.61c0-.387.014-.704.055-.95h-.055l-1.748 5.034h-.414l-1.748-5.03h-.054c.054.18.08.493.08.937v4.094h-.705v-5.53h.705l1.748 4.94h.054l1.748-4.94h.705v5.53h-.571zM17.766 18.695h-.705l-.27-.855h-2.195l-.195.855h-.682l1.454-5.53h.705l1.888 5.53zm-1.663-5.173l-.977 3.825h1.94l-.963-3.825z"/>
                </svg>`,
      },
    ],
  },
  {
    title: "DevOps",
    skills: [
      {
        name: "Git",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8">
                    <path fill="#F05032" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.6-.719.721-1.881.721-2.6 0-0.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
                </svg>`,
      },
      {
        name: "Jira",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8">
                    <path fill="#0052CC" d="M11.571 11.513H0a5.218 5.218 0 0 0 .093 5.362c.018.052.037.103.058.154l5.942-5.516zm5.723-5.756H5.848l5.419 5.756a5.175 5.175 0 0 1 5.322-.009l5.942-5.516c.021-.051.04-.102.058-.154a5.218 5.218 0 0 0 .093-5.362H17.294zm0 0"/>
                    <path fill="#2684FF" d="M17.846 5.757H6.4L11.82 11.513h11.571a5.218 5.218 0 0 0-.093-5.362c-.018-.052-.037-.103-.058-.154l-5.394-.24z"/>
                </svg>`,
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "VS Code",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8">
                    <path fill="#007ACC" d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
                </svg>`,
      },
      {
        name: "Figma",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8">
                    <path fill="#F24E1E" d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.02s-1.354-3.02-3.02-3.02h-3.116v6.04z"/>
                    <path fill="#A259FF" d="M8.941 24c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h2.647v4.49c0 2.476-2.171 4.49-4.647 4.49z"/>
                    <path fill="#FF7262" d="M15.852 17.51h-4.588v-8.98h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49z"/>
                    <path fill="#1ABCFE" d="M11.264 17.51H8.941c-2.476 0-4.49-2.014-4.49-4.49S6.465-.45 8.941-.45h2.323v8.981z"/>
                    <path fill="#0ACF83" d="M11.264 8.531H8.941c-2.476 0-4.49-2.015-4.49-4.49S6.465-.45 8.941-.45h2.323v8.981z"/>
                </svg>`,
      },
      {
        name: "Github",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8">
                    <path fill="#181717" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-6.627 5.373-12 12-12z"/>
                </svg>`,
      },
      {
        name: "Canva",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8">
                    <path fill="#00C4CC" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.373 11.985 11.988 11.985c6.618 0 11.985-5.367 11.985-11.985C24.002 5.367 18.635.001 12.017.001zM8.522 10.837c-.145-.235-.235-.705-.235-1.175c0-.47.09-.94.235-1.175c.145-.235.47-.47.94-.47c.47 0 .705.235.94.47c.145.235.235.705.235 1.175c0 .47-.09.94-.235 1.175c-.235.235-.47.47-.94.47c-.47 0-.795-.235-.94-.47zm6.268 0c-.145-.235-.235-.705-.235-1.175c0-.47.09-.94.235-1.175c.145-.235.47-.47.94-.47c.47 0 .705.235.94.47c.145.235.235.705.235 1.175c0 .47-.09.94-.235 1.175c-.235.235-.47.47-.94.47c-.47 0-.795-.235-.94-.47z"/>
                </svg>`,
      },
      {
        name: "Adobe Photoshop",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8">
                    <path fill="#31A8FF" d="M9.85 8.42c0-.78-.02-1.45-.06-2.03h-.02c-.07.58-.17 1.16-.29 1.74L8.2 12.42H7.12L5.84 8.13c-.12-.58-.22-1.16-.29-1.74h-.02c-.04.58-.06 1.25-.06 2.03v4.15H4.5V6.43h1.97l1.18 3.97c.1.34.18.68.24 1.02h.02c.06-.34.14-.68.24-1.02l1.18-3.97h1.97v6.14h-.95V8.42zm4.8 6.14V6.43h2.95c1.64 0 2.47.78 2.47 2.34 0 1.56-.83 2.34-2.47 2.34h-1.95v2.45h-1zm1-3.45h1.95c.78 0 1.17-.39 1.17-1.17s-.39-1.17-1.17-1.17h-1.95v2.34z"/>
                </svg>`,
      },
      {
        name: "Sony Vegas",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8">
                    <path fill="#FF6B35" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>`,
      },
    ],
  },
]

const softSkills = [
  "Attention to Detail",
  "Problem Solving",
  "Basic Networking",
  "APIs Integration",
  "Troubleshooting",
  "Video Editor (Film, Music Video)",
  "Web Development (HTML, CSS, JavaScript)",
  "Graphic Designer (Canva, Figma, Adobe Photoshop)",
  "Database Management (MySQL, Firebase)",
]

const projects = [
  {
    title: "Real Estate Booking Website",
    description: "Personal website showcasing skills and projects with modern design and smooth animations.",
    image: "projects/rental.png",
    link: "https://javiermarilea.systeme.io/",
    category: "website",
    categoryLabel: "Website",
    tags: ["System.io", "UI/UX", "Responsive Design", "Real Estate"]
  },
  {
    title: "Aptly: Rental Application",
    description: "Rental mobile application for finding properties and booking appointments.",
    image: "projects/aptly1.png",
    link: "#",
    category: "mobile",
    categoryLabel: "Mobile App",
    tags: ["Flutter", "Figma", "Cross-Platform", "UI Design",]
  },
  {
    title: "Events Management System",
    description: "Complete event management system with scheduling, booking, and admin modules.",
    image: "projects/communext3.png",
    link: "#",
    category: "webapps",
    categoryLabel: "Web App",
    tags: ["Full-Stack", "Tracker", "Admin Panel", "Firebase"]
  },
  {
    title: "Thrift Shop: Website Builder",
    description: "Online shop builder system with product management and customizable layouts.",
    image: "projects/vvg.png",
    link: "#",
    category: "webapps",
    categoryLabel: "Web App",
    tags: ["E-commerce", "Wix", "UI/UX", "Responsive"]
  },
  {
    title: "VAWC Complaints Reporting System",
    description: "Digital reporting platform for VAWC incidents with secure data handling.",
    image: "projects/vawc1.png",
    link: "#",
    category: "webapps",
    categoryLabel: "Web App",
    tags: ["System Development", "Security", "Admin Panel", "Firebase"]
  }
];

// State
let currentProjectIndex = 0

// Utility Functions
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

// Dark Mode Functions
function initDarkMode() {
  const darkModeToggle = document.getElementById("darkModeToggle")
  const savedTheme = localStorage.getItem("theme")
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

  // Set initial theme
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme)
  } else if (systemPrefersDark) {
    document.documentElement.setAttribute("data-theme", "dark")
  }

  darkModeToggle.addEventListener("click", toggleDarkMode)
}

function toggleDarkMode() {
  const currentTheme = document.documentElement.getAttribute("data-theme")
  const newTheme = currentTheme === "dark" ? "light" : "dark"

  document.documentElement.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
}

// Tech Stack Functions
function renderTechStack() {
  const techStackGrid = document.getElementById("techStackGrid")

  techStackCategories.forEach((category) => {
    const categoryCard = document.createElement("div")
    categoryCard.className = "card"

    const gridClass = category.skills.length === 2 ? "two-cols" : "three-cols"

    categoryCard.innerHTML = `
            <div class="card-content">
                <div class="tech-category-header">
                    <div class="tech-icon-container">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 2rem; height: 2rem; color: var(--primary);">
                            ${getCategoryIcon(category.title)}
                        </svg>
                    </div>
                    <h3 class="tech-category-title">${category.title}</h3>
                </div>
                <div class="tech-skills-grid ${gridClass}">
                    ${category.skills
                      .map(
                        (skill) => `
                        <div class="tech-skill-item">
                            <div class="tech-skill-icon">${skill.icon}</div>
                            <span class="tech-skill-name">${skill.name}</span>
                        </div>
                    `,
                      )
                      .join("")}
                </div>
            </div>
        `

    techStackGrid.appendChild(categoryCard)
  })
}

function getCategoryIcon(title) {
  const icons = {
    Frontend: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
    Backend:
      '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
    Databases:
      '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
    DevOps:
      '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
    Tools:
      '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
  }
  return icons[title] || ""
}

// Skills Functions
function renderSkills() {
  const skillsGrid = document.getElementById("skillsGrid")

  softSkills.forEach((skill) => {
    const skillCard = document.createElement("div")
    skillCard.className = "skill-card"

    skillCard.innerHTML = `
            <div class="skill-card-content">
                <div class="skill-icon-container">
                    <div class="skill-dot"></div>
                </div>
                <h3 class="skill-name">${skill}</h3>
            </div>
        `

    skillsGrid.appendChild(skillCard)
  })
}

function renderProjects(filter = "all") {
  const projectsGrid = document.getElementById("projectsGrid");
  projectsGrid.innerHTML = "";

  const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);

  filtered.forEach((project) => {
    const tagsHTML = project.tags
      .map(tag => `<span class="project-tag">${tag}</span>`)
      .join("");

    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.innerHTML = `
      <div class="project-image-container">
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-overlay"></div>
      </div>
      <div class="project-content">

        <!-- category label -->
        <span class="project-category">${project.categoryLabel}</span>

        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>

        <!-- tags -->
        <div class="project-tags">${tagsHTML}</div>

        <a href="${project.link}" class="project-btn" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15,3 21,3 21,9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
          View Project
        </a>
      </div>
    `;
    projectsGrid.appendChild(projectCard);
  });
}

const creativeProjects = [
  { 
    title: "Project 1",
    image: "creative_projects/Nature_Tagaytay.png",
    preview: "creative_projects/video3to4/NATURE.mp4",
    alt: "Video Project 1",
    link: "#" 
  },
  { 
    title: "Project 2",
    image: "creative_projects/Music_Video.png",
    preview: "creative_projects/video3to4/MUSICVIDEO.mp4",
    alt: "Video Project 2",
    link: "#" 
  },
  { 
    title: "Project 3",
    image: "creative_projects/SDE.png",
    preview: "creative_projects/video3to4/XLLNCE.mp4",
    alt: "Video Project 3",
    link: "#" 
  },
  { 
    title: "Project 4",
    image: "creative_projects/Short_Film_Me.png",
    preview: "creative_projects/video3to4/SHORTFILM.mp4",
    alt: "Video Project 4",
    link: "#" 
  },
  { 
    title: "Project 5",
    image: "creative_projects/Introduction.png",
    preview: "creative_projects/video3to4/ME.mp4",
    alt: "Video Project 5",
    link: "#" 
  },
  { 
    title: "Project 6",
    image: "creative_projects/Xceed.png",
    preview: "creative_projects/video3to4/XCD.mp4",
    alt: "Video Project 6",
    link: "#" 
  },
  { 
    title: "Project 7",
    image: "creative_projects/Boxing.png",
    preview: "creative_projects/video3to4/BOX.mp4",
    alt: "Video Project 7",
    link: "#" 
  },
  { 
    title: "Project 8",
    image: "creative_projects/HunterXHunter.png",
    preview: "creative_projects/video3to4/HXH.mp4",
    alt: "Video Project 8",
    link: "#" 
  },
  { 
    title: "Project 9",
    image: "creative_projects/Logo.png",
    preview: "creative_projects/video3to4/logo.mp4",
    alt: "Video Project 9",
    link: "#" 
  },
  { 
    title: "Project 10",
    image: "creative_projects/Logo1.png",
    preview: "creative_projects/video3to4/logo2.mp4",
    alt: "Video Project 10",
    link: "#" 
  }
];

// 3 columns × 2 rows = 6 visible per page
let creativePageIndex = 0;
const creativePageSize = 6;

/* RENDER CAROUSEL ITEMS */
function renderCreativeCarousel() {
  const grid = document.getElementById("creativeProjectsCarouselGrid");
  grid.innerHTML = "";

  const start = creativePageIndex * creativePageSize;
  const end = start + creativePageSize;

  const visibleProjects = creativeProjects.slice(start, end);

  visibleProjects.forEach((proj) => {
    const card = document.createElement("a");
    card.className = "creative-project-card";
    card.href = proj.link;
    card.target = "_blank"; // open in new tab

    card.innerHTML = `
      <img src="${proj.image}" alt="${proj.alt}">
      <video muted loop preload="none">
          <source src="${proj.preview}" type="video/mp4">
      </video>
    `;

    // Hover event: play video
    card.addEventListener("mouseenter", () => {
      const img = card.querySelector("img");
      const video = card.querySelector("video");

      img.style.display = "none";
      video.style.display = "block";
      video.currentTime = 0;
      video.play();
    });

    // Leave event: stop video + show image
    card.addEventListener("mouseleave", () => {
      const img = card.querySelector("img");
      const video = card.querySelector("video");

      video.pause();
      video.style.display = "none";
      img.style.display = "block";
    });

    grid.appendChild(card);
  });

  document.getElementById("creativeProjectsPrevBtn").disabled = creativePageIndex === 0;
  document.getElementById("creativeProjectsNextBtn").disabled =
    end >= creativeProjects.length;
}

/* SLIDE ANIMATION HANDLER */
function animateSlide(direction) {
  const grid = document.getElementById("creativeProjectsCarouselGrid");

  // Add slide direction class
  grid.classList.add(direction === "next" ? "slide-left" : "slide-right");

  // After animation, render new content and remove slide class
  setTimeout(() => {
    renderCreativeCarousel();
    grid.classList.remove("slide-left", "slide-right");
  }, 350); // match CSS duration
}

/* BUTTON HANDLERS */
document.getElementById("creativeProjectsPrevBtn").addEventListener("click", () => {
  if (creativePageIndex > 0) {
    creativePageIndex--;
    animateSlide("prev");
  }
});

document.getElementById("creativeProjectsNextBtn").addEventListener("click", () => {
  if ((creativePageIndex + 1) * creativePageSize < creativeProjects.length) {
    creativePageIndex++;
    animateSlide("next");
  }
});

// INIT
renderCreativeCarousel();


// Filter button clicks
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderProjects("all");
});


// Event Listeners
function initEventListeners() {
  // Contact form
  const contactForm = document.querySelector(".contact-form")
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Thank you for your message! I will get back to you soon.")
  })
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initDarkMode()
  renderTechStack()
  renderSkills()
  initEventListeners()

  // Add fade-in animation to intro content
  setTimeout(() => {
    const introContent = document.querySelector(".intro-content")
    if (introContent) {
      introContent.style.opacity = "1"
      introContent.style.transform = "translateY(0)"
    }
  }, 500)
})


const skillsData = {
  frontend: [
    { title: "HTML/CSS", about: "Semantic markup and modern CSS techniques", tag: "Frontend" },
    { title: "JavaScript", about: "Modern ES6+ syntax and DOM interaction", tag: "Frontend" },
    { title: "Bootstrap", about: "Popular CSS framework for responsive design", tag: "Frontend" },
    { title: "Tailwind CSS", about: "Utility-first CSS framework", tag: "Frontend" },
  ],
  backend: [
    { title: "Node.js", about: "Server-side runtime for scalable apps", tag: "Backend" },
    { title: "PHP", about: "Server-side scripting language", tag: "Backend" },
  ],
  database: [
    { title: "Firebase", about: "Real-time database and cloud storage", tag: "Database" },
    { title: "MySQL", about: "Popular relational database system", tag: "Database" },
  ],
  tools: [
    { title: "Git & GitHub", about: "Version control and collaboration tools", tag: "Tools" },
    { title: "Jira", about: "Project tracking and agile management", tag: "Tools" },
    { title: "VS Code", about: "Lightweight and extensible code editor", tag: "Tools" },
    { title: "Figma", about: "UI/UX design and prototyping platform", tag: "Tools" },
    { title: "Canva", about: "Online design and content creation tool", tag: "Tools" },
    { title: "Adobe Photoshop", about: "Professional image editing software", tag: "Tools" },
    { title: "System.io", about: "All-in-one online business platform", tag: "Tools" },
    { title: "Sony Vegas", about: "Professional video editing software", tag: "Tools" },
  ],
  professional: [
    { title: "Attention to Detail", about: "Ensures precision and consistency", tag: "Professional" },
    { title: "Problem Solving", about: "Analytical thinking and debugging skills", tag: "Professional" },
    { title: "Basic Networking", about: "Understands connections and protocols", tag: "Professional" },
    { title: "APIs Integration", about: "Connecting third-party services seamlessly", tag: "Professional" },
    { title: "Troubleshooting", about: "Diagnosing and fixing issues efficiently", tag: "Professional" },
    { title: "Video Editor", about: "Editing and improving visual content", tag: "Professional" },
    { title: "Web Development", about: "Building functional and responsive websites", tag: "Professional" },
    { title: "Graphic Designer", about: "Visual content creation and layout design", tag: "Professional" },
    { title: "Database Management", about: "Organizing and maintaining data integrity", tag: "Professional" },
    { title: "Full-Stack Development", about: "End-to-end web application development", tag: "Professional" },
    { title: "System Development", about: "Developing scalable system architectures", tag: "Professional" },
    { title: "Data Analysis & Reporting", about: "Processing and visualizing data insights", tag: "Professional" },
  ],
    video_editing: [
    { title: "SDE", about: "Same Day Edit video creation for events", tag: "Type" },
    { title: "Short Film", about: "Narrative storytelling through cinematic editing", tag: "Type" },
    { title: "Music Video", about: "Rhythm-based cuts, VFX, and creative transitions", tag: "Type" },
    { title: "Skit", about: "Fast-paced comedic edits and timing-based cuts", tag: "Type" },
    { title: "Logo Animation / 3D", about: "Animated logos and simple 3D intro sequences", tag: "Type" },
    { title: "Graphics", about: "Text motion, overlays, and visual enhancements", tag: "Type" },
  ],
    software_editing: [
    { title: "Photoshop", about: "Graphic design, photo manipulation, visual assets", tag: "Software" },
    { title: "Vegas Pro", about: "Professional non-linear video editing workflow", tag: "Software" },
    { title: "CapCut", about: "Desktop editing with templates and effects", tag: "Software" },
    { title: "After Effects", about: "Motion graphics, animation, and visual effects", tag: "Software" },
  ],
};
skillsData.all = [
  ...skillsData.frontend,
  ...skillsData.backend,
  ...skillsData.database,
  ...skillsData.tools,
  ...skillsData.professional,
  ...skillsData.video_editing,
  ...skillsData.software_editing
];

const marquee = document.getElementById("skillsMarquee");
const filterTitle = document.getElementById("selectedFilterTitle");

function loadMarquee(category = "all") {
  const data = skillsData[category];
  marquee.innerHTML = "";

  // Duplicate for infinite effect
  const repeated = [...data, ...data];
  repeated.forEach(skill => {
    const card = document.createElement("div");
    card.className = "skill-card";
    card.innerHTML = `
      <h4>${skill.title}</h4>
      <p>${skill.about}</p>
      <span class="skill-tag">${skill.tag}</span>
    `;
    marquee.appendChild(card);
  });

  // Adjust speed
  let speed = (category === "all" || category === "professional") ? 20 : 40;
  marquee.style.animation = "none";
  void marquee.offsetHeight;
  marquee.style.animation = `scroll ${speed}s linear infinite`;

  // Only take the text label, ignore icon
  const btnLabel = document.querySelector(`.filter-btn[data-category="${category}"]`);
  const textNodes = Array.from(btnLabel.childNodes).filter(n => n.nodeType === 3);
  filterTitle.textContent = textNodes.map(n => n.textContent.trim()).join(' ');
}


document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");
    loadMarquee(btn.dataset.category);
  });
});

loadMarquee("all");

