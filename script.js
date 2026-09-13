const portfolioData = {
  profile: {
    name: "Vaibhav Malviya",
    title: "Software Engineer",
    tagline: "AI/ML • Backend • Python • Automation",
    summary:
      "Motivated and passionate Software Engineer with professional experience at L&T Technology Services (LTTS), supporting engineering workflows for an Intel client engagement. I build reliable software, automate engineering workflows, debug complex issues, and apply AI/ML concepts to real engineering problems.",
    location: "Bengaluru, India",
    email: "vaibhavmalviya2902@gmail.com",
    phone: "+91 62659 58565",
    github: "https://github.com/CodeMaster00001",
    githubSecond: "https://github.com/MalviyaSir?tab=repositories",
    linkedin: "https://www.linkedin.com/in/vaibhav-malviya-586813226/",
    hackerrank: "https://www.hackerrank.com/profile/001codemaster",
    codechef: "https://www.codechef.com/users/codemaster40",
    resume: "public/resume.pdf",
    strengths: ["Problem Solving", "Leadership", "Communication"],
    hobbies: ["Swimming", "Trekking", "Driving", "Watching historic movies"]
  },
  experience: [
    {
      company: "L&T Technology Services (LTTS)",
      role: "Associate Engineer",
      location: "Bengaluru",
      period: "Present",
      details: [
        "Develop Python scripts and automation supporting engineering, product validation, and issue-investigation workflows for an Intel client engagement.",
        "Work across validation, debugging, legacy/IPU workflows, and structured problem solving; investigate issues and support reliable engineering outcomes.",
        "Contribute to LTTS Agentic IQ by developing an AI agent for error-resolution workflows using LLM and RAG concepts.",
        "Apply software development, testing, functional validation, debugging, issue triage, and root-cause analysis across engineering workflows."
      ],
      current: true
    },
    {
      company: "Arishi Innovation India Pvt. Ltd.",
      role: "Software Development Intern",
      location: "Indore",
      period: "Jan 2025 – Jun 2025",
      details: [
        "Worked with Magnolia CMS architecture and application content workflows for the IOA website project.",
        "Managed events, news, and job modules while supporting functional and content validation.",
        "Performed QA and validation on the Zoopla live platform to support issue identification."
      ],
      current: false
    },
    {
      company: "Mindpath Tech Private Limited",
      role: "Intern",
      location: "Indore",
      period: "Aug 2024 – Oct 2024",
      details: [
        "Completed an internship focused on frontend and web development.",
        "Worked with HTML, CSS, JavaScript, Bootstrap, React, and database fundamentals."
      ],
      current: false
    },
    {
      company: "FeedBox",
      role: "Web Developer Intern",
      location: "Indore",
      period: "Jul 2023 – Dec 2023",
      details: [
        "Developed web features using HTML, CSS, and JavaScript.",
        "Strengthened programming fundamentals in C, C++, and Java."
      ],
      current: false
    }
  ],
  projects: [
    {
      id: "stayji",
      title: "StayJi — Full-Stack PG & Stay Finder Platform",
      category: "FULL STACK",
      description:
        "Built a full-stack platform using React, Tailwind CSS, Node.js, Express.js, MongoDB/Mongoose, REST APIs, authentication, and role-based access control across user, property-owner, and administrative workflows.",
      tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "Authentication", "RBAC"],
      demo: "https://stayji-demo.vercel.app/",
      live: "https://www.stayji.com/",
      achievement: "Full-stack user, property-owner, and admin workflows",
      highlight: "Featured"
    },
    {
      id: "smart-energy",
      title: "Smart Energy Optimization Agent",
      category: "AI/ML",
      description:
        "Built an AI-enabled solution analyzing building sensor and energy-consumption data to generate optimization recommendations; developed observation, reasoning, decision-making, and savings/ROI workflows using Python/FastAPI, React, TypeScript, and Node.js/Express.",
      tech: ["Python", "FastAPI", "React", "TypeScript", "Node.js", "Express", "AI/ML"],
      github: "https://github.com/MalviyaSir/EnergyDecisionAgent",
      demo: "",
      achievement: "Special Spot Recognition — LTTS 24-Hour Hackathon",
      highlight: "Flagship"
    },
    {
      id: "zoom-finance",
      title: "Zoom Finance",
      category: "FULL STACK",
      description: "A JavaScript web application represented as project work, with a public source repository and Vercel deployment.",
      tech: ["JavaScript", "Vite", "Web UI"],
      github: "https://github.com/CodeMaster00001/ZoomFinance",
      demo: "https://zoom-finance-chi.vercel.app",
      achievement: "Project work; not current employment",
      highlight: "Product"
    },
    {
      id: "antim-seva",
      title: "Antim Seva",
      category: "SOCIAL IMPACT",
      description: "A social-impact/product concept presented accurately as inactive and archival; it is not an active operating service and does not claim live service metrics.",
      tech: ["Web Development", "Product Design"],
      github: "https://github.com/MalviyaSir/AntimSeva",
      demo: "https://antim-seva-gilt.vercel.app/",
      achievement: "Social Impact / Product Project",
      highlight: "Social Impact"
    },
    {
      id: "etwdc",
      title: "Electric Two-Wheeler Design Competition (ETWDC)",
      category: "ENGINEERING",
      description:
        "Contributed to web development, vehicle electrification, wiring harness, electronics implementation, and Arduino-based functionality; achieved AIR-7 and 2nd Prize in the Special Award category.",
      tech: ["Web Development", "Electrification", "Wiring Harness", "Arduino", "Electronics"],
      github: "https://github.com/CodeMaster00001/Spark-Ignited",
      demo: "https://codemaster00001.github.io/Spark-Ignited/",
      achievement: "AIR-7 and 2nd Prize, Special Award",
      highlight: "Competition"
    },
    {
      id: "shopping-cart",
      title: "Online Shopping Website",
      category: "BACKEND",
      description:
        "Developed a database-driven e-commerce application using Java Servlets, JSP, MySQL, JDBC, HTML, CSS, and JavaScript.",
      tech: ["Java Servlets", "JSP", "MySQL", "JDBC", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/CodeMaster00001/VaibhavShoppingCart",
      demo: "",
      achievement: "Database-driven e-commerce workflow",
      highlight: "Secondary"
    },
    {
      id: "pack-bag",
      title: "Pack Your Bag App",
      category: "MOBILE",
      description:
        "Developed an Android application in Java for travel-item reminders and gained hands-on experience with Android Studio through team-based development.",
      tech: ["Java", "Android Studio"],
      github: "https://github.com/CodeMaster00001/pack-your-bag-app",
      demo: "",
      achievement: "Android travel reminder app",
      highlight: "Secondary"
    }
  ],
  skills: [
    {
      category: "Languages",
      items: ["Python", "C", "C++", "Java", "JavaScript", "TypeScript"]
    },
    {
      category: "Core CS",
      items: ["Data Structures", "Algorithms", "Complexity Analysis", "OOP", "DBMS", "SQL", "Problem Solving", "Software Engineering"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "Java Servlets", "JSP", "JDBC"]
    },
    {
      category: "Databases",
      items: ["MongoDB", "Mongoose", "MySQL", "Relational Database Concepts"]
    },
    {
      category: "Frontend",
      items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Responsive UI Development"]
    },
    {
      category: "AI/ML",
      items: ["Generative AI", "LLMs", "Transformers", "RAG", "Agentic AI", "Machine Learning", "LLM Fine-tuning", "Evaluation"]
    },
    {
      category: "Engineering",
      items: ["Python Automation", "Software Testing", "Functional Validation", "Debugging", "Issue Triage", "Root-Cause Analysis", "Technical Documentation", "Code Review Fundamentals"]
    },
    {
      category: "Tools & Accessibility",
      items: ["Git", "GitHub", "Google Colab", "Android Studio", "Semantic HTML", "Keyboard-Friendly UI Concepts", "Accessibility Fundamentals"]
    }
  ],
  achievements: [
    { name: "5-Star Python", org: "HackerRank", detail: "Strong Python problem-solving and code quality.", link: "https://www.hackerrank.com/profile/001codemaster" },
    { name: "Top Performer", org: "LTTS Python Technical Training", detail: "Recognized as a top performer in intensive Python training." },
    { name: "Special Spot Recognition", org: "LTTS 24-Hour Hackathon", detail: "Recognized for the Smart Energy Optimization Agent." },
    { name: "AIR-7", org: "ETWDC", detail: "Achieved AIR-7 in the Electric Two-Wheeler Design Competition." },
    { name: "2nd Prize, Special Award", org: "ETWDC", detail: "Secured the 2nd Prize in the Special Award category." }
  ],
  education: [
    {
      title: "Bachelor of Engineering in Computer Engineering",
      institute: "Institute of Engineering and Technology, Devi Ahilya Vishwavidyalaya, Indore",
      period: "2021 – 2025",
      score: "79%"
    },
    {
      title: "Higher Secondary School (Class XII)",
      institute: "Advanced Academy",
      period: "2021",
      score: "85.4%"
    },
    {
      title: "Secondary School (Class X)",
      institute: "Advanced Academy",
      period: "2019",
      score: "84.6%"
    }
  ],
  leadership: [
    "Member — FeedBox Club (since 2021)",
    "Sponsorship Head — FeedBox",
    "Public Relations and Marketing Head — Engineers Without Borders (EWB)",
    "Member — NSS Club",
    "Member — Bureau of Indian Standards (BIS) Club"
  ],
  socials: {
    github: "https://github.com/CodeMaster00001",
    linkedin: "https://www.linkedin.com/in/vaibhav-malviya-586813226/",
    hackerrank: "https://www.hackerrank.com/profile/001codemaster",
    codechef: "https://www.codechef.com/users/codemaster40"
  }
};

const certificates = [
  { title: "Data Structures and Algorithms", image: "public/certificates/dsa.jpeg", type: "image" },
  { title: "C and C++", image: "public/certificates/c-cpp.jpeg", type: "image" },
  { title: "Core Java", image: "public/certificates/core-java.jpeg", type: "image" },
  { title: "Advanced Java", image: "public/certificates/advanced-java.jpg", type: "image" },
  { title: "Cyber Security", image: "public/certificates/cyber-security.jpeg", type: "image" },
  { title: "Full-Stack Web Development", image: "public/certificates/blent-vidya.jpeg", type: "image" },
  { title: "ETWDC Project Certificate", image: "public/certificates/etwdc.pdf", type: "pdf" },
  { title: "FeedBox Certificate", image: "public/certificates/feedbox.pdf", type: "pdf" }
];

const app = {
  themePreference: "system",
  currentTheme: "light",
  activeProjectFilter: "ALL",
  projectFilters: ["ALL", "AI/ML", "FULL STACK", "BACKEND", "WEB", "MOBILE", "ENGINEERING", "SOCIAL IMPACT"],
  history: [],
  historyIndex: -1
};

const getSystemTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const setTheme = (preference, persist = true) => {
  const root = document.documentElement;
  const themeButton = document.querySelector(".theme-toggle");
  const theme = preference === "system" ? getSystemTheme() : preference;
  const isDark = theme === "dark";
  app.themePreference = preference;
  app.currentTheme = theme;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  document.body.classList.toggle("theme-light", !isDark);
  if (themeButton) {
    const preferenceLabel = preference.charAt(0).toUpperCase() + preference.slice(1);
    themeButton.textContent = `Theme: ${preferenceLabel}`;
    themeButton.setAttribute("aria-label", `Theme preference: ${preferenceLabel}. Activate to change theme`);
    themeButton.title = "Cycle between light, dark, and system themes";
  }
  if (persist) localStorage.setItem("vaibhavPortfolioTheme", preference);
};

const initializeTheme = () => {
  const savedPreference = localStorage.getItem("vaibhavPortfolioTheme");
  const validPreference = ["light", "dark", "system"].includes(savedPreference) ? savedPreference : "system";
  setTheme(validPreference, false);

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener?.("change", () => {
    if (app.themePreference === "system") setTheme("system", false);
  });
};

const renderEntries = () => {
  renderExperience();
  renderProjectFilters();
  renderProjects();
  renderSkills();
  renderAchievements();
  renderLeadership();
  renderEducation();
  renderProfileExtras();
};

const renderProfileExtras = () => {
  const strengths = document.getElementById("strengthsList");
  const hobbies = document.getElementById("hobbiesList");
  if (strengths) strengths.innerHTML = portfolioData.profile.strengths.map((item) => `<span>${item}</span>`).join("");
  if (hobbies) hobbies.innerHTML = portfolioData.profile.hobbies.map((item) => `<span>${item}</span>`).join("");
};

const renderExperience = () => {
  const container = document.getElementById("experienceList");
  if (!container) return;
  container.innerHTML = portfolioData.experience
    .map(
      (item, index) => `
        <article class="timeline-item ${item.current ? "current" : ""} reveal">
          <div class="timeline-node" aria-hidden="true"></div>
          <button class="timeline-card ${item.current ? "accent-card" : ""}" type="button" data-exp-index="${index}" aria-expanded="${item.current ? "true" : "false"}">
            <div class="timeline-topline">
              <h3>${item.company}</h3>
              <span>${item.location}</span>
            </div>
            <p class="role">${item.role}</p>
            <p class="period">${item.period}</p>
            <div class="timeline-body">
              <ul>
                ${item.details.map((detail) => `<li>${detail}</li>`).join("")}
              </ul>
            </div>
          </button>
        </article>
      `
    )
    .join("");

  container.querySelectorAll(".timeline-card").forEach((button) => {
    button.addEventListener("click", () => {
      const isOpen = button.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
};

const renderProjectFilters = () => {
  const container = document.getElementById("projectFilters");
  if (!container) return;
  container.innerHTML = app.projectFilters
    .map(
      (filter) => `
        <button type="button" class="filter-chip ${app.activeProjectFilter === filter ? "active" : ""}" data-filter="${filter}">${filter}</button>
      `
    )
    .join("");

  container.querySelectorAll(".filter-chip").forEach((button) => {
    button.addEventListener("click", () => {
      app.activeProjectFilter = button.dataset.filter;
      renderProjectFilters();
      renderProjects();
    });
  });
};

const renderProjects = () => {
  const container = document.getElementById("projectGrid");
  if (!container) return;
  const search = document.getElementById("projectSearch");
  const query = search ? search.value.trim().toLowerCase() : "";

  const projects = portfolioData.projects.filter((project) => {
    const matchesFilter = app.activeProjectFilter === "ALL"
      || (app.activeProjectFilter === "WEB" && (["FULL STACK", "BACKEND", "ENGINEERING"].includes(project.category) || project.tech.includes("React") || project.tech.includes("HTML")))
      || project.category === app.activeProjectFilter;
    const searchable = `${project.title} ${project.description} ${project.category} ${project.tech.join(" ")}`.toLowerCase();
    return matchesFilter && searchable.includes(query);
  });

  container.innerHTML = projects.length ? projects
    .map(
      (project) => `
        <article class="project-card reveal" data-project-id="${project.id}">
          <div class="project-header">
            <span class="project-tag">${project.highlight}</span>
            <div class="project-links">
              ${project.github ? `<a href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>` : ""}
              ${project.demo ? `<a class="project-live-link" href="${project.demo}" target="_blank" rel="noreferrer">${project.id === "stayji" ? "Owner Demo" : "🌐 View Live Project ↗"}</a>` : ""}
              ${project.live ? `<a class="project-live-link" href="${project.live}" target="_blank" rel="noreferrer">🌐 View Live Project ↗</a>` : ""}
            </div>
          </div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="tech-list">
            ${project.tech.map((tech) => `<span>${tech}</span>`).join("")}
          </div>
          <div class="project-meta">
            <strong>Achievement:</strong>
            <span>${project.achievement}</span>
          </div>
        </article>
      `
    )
    .join("") : `<div class="empty-state">No projects match that search or filter.</div>`;

  container.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => {
      const projectId = card.dataset.projectId;
      const project = portfolioData.projects.find((item) => item.id === projectId);
      if (project) {
        openProjectModal(project);
      }
    });
  });

  container.querySelectorAll(".project-card a").forEach((link) => {
    link.addEventListener("click", (event) => event.stopPropagation());
  });
};

const renderCertificates = () => {
  const container = document.getElementById("certificateGrid");
  if (!container) return;
  container.innerHTML = certificates.map((certificate) => `
    <button class="certificate-card" type="button" data-certificate-image="${certificate.image}" data-certificate-type="${certificate.type}" data-certificate-title="${certificate.title}">
      <span class="certificate-preview">${certificate.type === "pdf" ? "PDF" : `<img src="${certificate.image}" alt="" loading="lazy" />`}</span>
      <strong>${certificate.title}</strong>
      <small>Open preview</small>
    </button>
  `).join("");
};

const initializeCertificateModal = () => {
  const modal = document.getElementById("certificateModal");
  const preview = document.getElementById("certificate-preview");
  const actions = document.getElementById("certificate-actions");
  const title = document.getElementById("certificate-title");
  if (!modal || !preview || !actions || !title) return;
  const close = () => {
    modal.classList.remove("is-visible");
    modal.setAttribute("aria-hidden", "true");
    preview.innerHTML = "";
    actions.innerHTML = "";
  };
  modal.querySelector(".certificate-modal-close").addEventListener("click", close);
  modal.addEventListener("click", (event) => { if (event.target === modal) close(); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && modal.classList.contains("is-visible")) close(); });
  document.getElementById("certificateGrid")?.addEventListener("click", (event) => {
    const card = event.target.closest("[data-certificate-image]");
    if (!card) return;
    title.textContent = card.dataset.certificateTitle;
    const asset = card.dataset.certificateImage;
    actions.innerHTML = `<a class="button secondary" href="${asset}" target="_blank" rel="noreferrer">Open full-size viewer</a><span class="certificate-view-note">View online only</span>`;
    preview.innerHTML = card.dataset.certificateType === "pdf"
      ? `<iframe title="${card.dataset.certificateTitle}" src="${asset}#view=FitH" loading="lazy"></iframe>`
      : `<img src="${asset}" alt="${card.dataset.certificateTitle} certificate preview" />`;
    modal.classList.add("is-visible");
    modal.setAttribute("aria-hidden", "false");
  });
};

const renderSkills = () => {
  const container = document.getElementById("skillsGrid");
  if (!container) return;

  container.innerHTML = portfolioData.skills
    .map(
      (skillGroup) => `
        <article class="skill-card reveal">
          <h3>${skillGroup.category}</h3>
          <div class="chip-list">
            ${skillGroup.items.map((item) => `<span>${item}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
};

const renderAchievements = () => {
  const container = document.getElementById("achievementGrid");
  if (!container) return;

  container.innerHTML = portfolioData.achievements
    .map(
      (item) => `
        <article class="achievement-card reveal">
          <span class="achievement-badge">${item.org}</span>
          <h3>${item.link ? `<a class="achievement-link" href="${item.link}" target="_blank" rel="noreferrer">${item.name}</a>` : item.name}</h3>
          <p>${item.detail}</p>
        </article>
      `
    )
    .join("");
};

const renderEducation = () => {
  const container = document.getElementById("educationList");
  if (!container) return;

  container.innerHTML = portfolioData.education
    .map(
      (item) => `
        <article class="education-item reveal">
          <div>
            <p class="edu-title">${item.title}</p>
            <p class="edu-meta">${item.institute}</p>
          </div>
          <div class="edu-right">
            <p>${item.period}</p>
            <p>${item.score}</p>
          </div>
        </article>
      `
    )
    .join("");
};

const renderLeadership = () => {
  const container = document.getElementById("leadershipList");
  if (!container) return;

  container.innerHTML = portfolioData.leadership.map((item) => `<span class="reveal">${item}</span>`).join("");
};

const openProjectModal = (project) => {
  const modal = document.getElementById("projectModal");
  if (!modal) return;

  modal.querySelector(".project-modal-title").textContent = project.title;
  modal.querySelector(".project-modal-category").textContent = project.category;
  modal.querySelector(".project-modal-overview").textContent = project.description;
  modal.querySelector(".project-modal-stack").innerHTML = project.tech.map((tech) => `<span>${tech}</span>`).join("");
  modal.querySelector(".project-modal-achievement").textContent = project.achievement;
  modal.querySelector(".project-modal-links").innerHTML = `
    ${project.github ? `<a href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>` : ""}
    ${project.demo ? `<a class="project-live-link" href="${project.demo}" target="_blank" rel="noreferrer">${project.id === "stayji" ? "Owner Demo" : "🌐 View Live Project ↗"}</a>` : ""}
    ${project.live ? `<a class="project-live-link" href="${project.live}" target="_blank" rel="noreferrer">🌐 View Live Project ↗</a>` : ""}
  `;
  modal.classList.add("is-visible");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

const closeProjectModal = () => {
  const modal = document.getElementById("projectModal");
  if (!modal) return;
  modal.classList.remove("is-visible");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
};

const initializeTerminal = () => {
  const terminalForm = document.getElementById("terminal-form");
  const terminalInput = document.getElementById("terminal-input");
  const terminalOutput = document.getElementById("terminal-output");
  const terminalStatus = document.getElementById("terminal-status");
  if (!terminalForm || !terminalInput || !terminalOutput) return;

  const commandHandlers = {
    hi: ["Hi Vaibhav's visitor. Type help to explore the portfolio."],
    hello: ["Hello. Welcome to Vaibhav Malviya's engineering portfolio."],
    help: [
      "Available commands: hi, help, about, skills, skill, experience, projects, achievements, education, github, linkedin, resume, contact, clear",
      "Use the navigation to move between sections."
    ],
    about: [
      "Vaibhav Malviya | Software Engineer | AI/ML | Backend | Automation",
      "Associate Engineer — LTTS",
      "Intel client engagement; not an Intel employee."
    ],
    skills: [
      "Python, C, C++, Java, JavaScript, TypeScript",
      "React, Node.js, FastAPI, MongoDB, SQL, LLMs, RAG, Agentic AI"
    ],
    experience: [
      "LTTS — Associate Engineer, Bengaluru, Present",
      "Arishi Innovation — Software Development Intern, Jan 2025 – Jun 2025",
      "Mindpath Tech — Intern, Aug 2024 – Oct 2024",
      "FeedBox — Web Developer Intern, Jul 2023 – Dec 2023"
    ],
    projects: [
      "StayJi / PG Finder — Full-Stack PG & Stay Finder Platform",
      "Smart Energy Optimization Agent — LTTS 24-Hour Hackathon",
      "Zoom Finance — JavaScript web application",
      "Antim Seva — Social Impact / Product Project",
      "Online Shopping Website",
      "Pack Your Bag App",
      "ETWDC — Electric Two-Wheeler Design Competition"
    ],
    achievements: [
      "5-Star Python — HackerRank",
      "Top Performer — LTTS Python Technical Training",
      "Special Spot Recognition — LTTS Hackathon",
      "AIR-7 — ETWDC",
      "2nd Prize — ETWDC Special Award"
    ],
    github: [
      "https://github.com/CodeMaster00001",
      "https://github.com/MalviyaSir?tab=repositories",
      "Two GitHub identities, curated project links, no API dependency."
    ],
    contact: [
      "Email: vaibhavmalviya2902@gmail.com",
      "Phone: +91 62659 58565",
      "LinkedIn: https://www.linkedin.com/in/vaibhav-malviya-586813226/"
    ],
    education: [
      "B.E. Computer Engineering — IET DAVV, Indore | 2021–2025 | 79%",
      "Class XII — Advanced Academy | 85.4%",
      "Class X — Advanced Academy | 84.6%"
    ],
    linkedin: ["https://www.linkedin.com/in/vaibhav-malviya-586813226/"],
    resume: ["Download: public/resume.pdf"],
    clear: ["Terminal cleared."]
  };

  commandHandlers.skill = commandHandlers.skills;
  commandHandlers.work = commandHandlers.projects;
  commandHandlers.social = [portfolioData.profile.github, portfolioData.profile.githubSecond, portfolioData.profile.linkedin];

  const renderLine = (text) => {
    const line = document.createElement("div");
    line.className = "line";
    line.textContent = text;
    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  };

  terminalForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const command = terminalInput.value.trim().toLowerCase().replace(/^\$\s*/, "").replace(/\s+/g, " ");
    if (!command) return;
    renderLine(`> ${command}`);
    app.history.push(command);
    app.historyIndex = -1;
    terminalInput.value = "";

    if (command === "clear") {
      terminalOutput.innerHTML = "";
      renderLine("Terminal cleared.");
      if (terminalStatus) terminalStatus.textContent = "Cleared. Ready for a new command.";
      return;
    }

    const response = commandHandlers[command] || [
      "Command not recognized. Try: hi, help, about, skills, experience, projects, achievements, education, github, linkedin, resume, contact, clear"
    ];
    response.forEach((line) => renderLine(line));
    if (terminalStatus) terminalStatus.textContent = commandHandlers[command] ? `Command completed: ${command}` : "Unknown command. Type help to see available commands.";
  });

  terminalInput.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (app.history.length) {
        app.historyIndex = Math.min(app.historyIndex + 1, app.history.length - 1);
        terminalInput.value = app.history[app.history.length - 1 - app.historyIndex] || "";
      }
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (app.history.length) {
        app.historyIndex = Math.max(app.historyIndex - 1, -1);
        terminalInput.value = app.historyIndex >= 0 ? app.history[app.history.length - 1 - app.historyIndex] : "";
      }
    }
  });
};

const initializeScrollEffects = () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".site-nav a");
  const updateActiveSection = () => {
    const scrollPosition = window.scrollY + 120;
    let currentId = "about";
    sections.forEach((section) => {
      if (scrollPosition >= section.offsetTop) {
        currentId = section.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${currentId}`;
      link.classList.toggle("active", isActive);
    });
  };
  window.addEventListener("scroll", updateActiveSection, { passive: true });
  updateActiveSection();
};

const initializeThemeButton = () => {
  const themeButton = document.querySelector(".theme-toggle");
  if (!themeButton) return;
  themeButton.addEventListener("click", () => {
    const preferences = ["light", "dark", "system"];
    const currentIndex = preferences.indexOf(app.themePreference);
    setTheme(preferences[(currentIndex + 1) % preferences.length]);
  });
};

const initializeNavigation = () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.querySelector(".site-nav");

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        siteNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
};

const initializeProjectModal = () => {
  const modal = document.getElementById("projectModal");
  if (!modal) return;

  modal.querySelector(".project-modal-close").addEventListener("click", closeProjectModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeProjectModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-visible")) closeProjectModal();
  });
};

const initializeRotatingHeadline = () => {
  const rotatingText = document.getElementById("hero-rotating-text");
  if (!rotatingText) return;
  const phrases = ["AI/ML • Backend • Python • Automation", "Software Engineer", "AI/ML Engineer", "Backend Developer", "Python Engineer"];
  let index = 0;
  setInterval(() => {
    if (document.hidden) return;
    index = (index + 1) % phrases.length;
    rotatingText.textContent = phrases[index];
  }, 2200);
};

const initializeProjectSearch = () => {
  document.getElementById("projectSearch")?.addEventListener("input", renderProjects);
};

const initializeCopyEmail = () => {
  document.querySelector("[data-copy-email]")?.addEventListener("click", async (event) => {
    const button = event.currentTarget;
    const email = button.dataset.copyEmail;
    try {
      await navigator.clipboard.writeText(email);
      button.textContent = "Email copied";
    } catch {
      button.textContent = email;
    }
    window.setTimeout(() => { button.textContent = "Copy email"; }, 1800);
  });
};

const initialize = () => {
  initializeTheme();
  initializeThemeButton();
  initializeNavigation();
  initializeScrollEffects();
  renderEntries();
  renderCertificates();
  initializeProjectSearch();
  initializeCertificateModal();
  initializeCopyEmail();
  initializeRotatingHeadline();
  initializeTerminal();
  initializeProjectModal();
  const modal = document.getElementById("projectModal");
  if (modal) {
    modal.addEventListener("hidden", () => {
      document.body.style.overflow = "";
    });
  }
};

document.addEventListener("DOMContentLoaded", initialize);

