/* ============================================================================
   data.js  —  SIRF YAHI FILE EDIT KARNI HAI  (index.html ko kabhi mat chhedna)
   ============================================================================

   Kaise edit karein (GitHub pe):
     1. Repository me "data.js" pe click karo  →  upar right me pencil (✏️) icon
     2. Neeche diye rules ke hisaab se text badlo / naya block add karo
     3. Green "Commit changes" dabao  →  1-2 minute me site update ho jaayegi

   ZAROORI RULES (bas 4 baatein):
     • Har text "double quotes" ke andar hota hai:      title: "Meri Project"
     • Har line ke end me comma (,) hota hai
     • Naya project / certificate = ek poora { ... }, block copy karke uske neeche paste karo
       (block ke end me }, ka comma mat bhoolna)
     • Agar kuch khaali chhodna ho to "" likho (jaise live: "")  — wo button dikhega hi nahi

   Agar site blank ho jaaye to iska matlab koi comma / quote galat hai — page pe
   khud error message dikhega ki kaunsi cheez check karni hai.
   ============================================================================ */

const PORTFOLIO = {

  /* ------------------------------ BASIC INFO ------------------------------ */
  name: "Puneet Kumar",
  brand: "Puneet",                       // navbar me dikhne wala naam
  title: "Software Developer Aspirant",
  tagline: "MCA Fresher | Python | Java | C | C++ | AI & Machine Learning",
  status: "Open to internships & entry-level roles",
  heroIntro:
    "MCA student (2025–2027) with a strong interest in software development, programming and problem-solving. I enjoy building practical projects and learning new technology.",

  photo: "asset:photo",                  // photo site ke andar hi packed hai
  resume: "asset:resume",                // resume bhi andar packed hai

  email: "harshitshukla67287@gmail.com",
  phone: "8858153335",
  location: "Greater Noida, UP – 201310",
  linkedin: "https://www.linkedin.com/in/puneet-kumar-1b8a11388",
  github: "https://github.com/puneetkumar27",

  /* -------------------------------- ABOUT --------------------------------- */
  about: {
    heading: "Turning ideas into AI-powered applications.",
    paragraphs: [
      "Hello! I'm Puneet Kumar, an MCA student at Galgotias University passionate about software development, programming, AI & Machine Learning. I enjoy building practical projects and learning new technology.",
      "My goal is to become a software engineer and build AI-powered applications that solve real-world problems. I'm skilled in Python, Java, DBMS, DSA and modern web technologies, with a keen focus on applying technical knowledge to grow in the IT industry."
    ],
    facts: [
      { label: "Education", value: "MCA · Galgotias University (2025–2027)" },
      { label: "Location", value: "Greater Noida, Uttar Pradesh" },
      { label: "Languages", value: "English (Intermediate) · Hindi (Proficient)" },
      { label: "Focus", value: "Software Development · AI & Machine Learning" }
    ]
  },

  /* Stats cards. auto:"..." khud count kar leta hai (certifications / internships / skills / projects) */
  stats: [
    { auto: "certifications", label: "Certifications" },
    { auto: "internships",    label: "Internships" },
    { auto: "skills",         label: "Technologies" },
    { value: "304",          label: "AMCAT Score" }
  ],

  /* -------------------------------- SKILLS -------------------------------- */
  /* icon = devicon ka naam (python, java, react ...) ya "custom:ml" / "custom:genai" / "custom:db" / "custom:code" / "custom:book" / "custom:grid"
     Optional: level: "Advanced" (aur percent: 85) daaloge to progress bar bhi dikhega. Abhi off hai. */
  skills: [
    { group: "Programming Languages", items: [
      { name: "Python", icon: "python" },
      { name: "Java",   icon: "java" },
      { name: "C",      icon: "c" },
      { name: "C++",    icon: "cplusplus" },
      { name: "C#",     icon: "csharp" },
      { name: "SQL",    icon: "custom:db" }
    ]},
    { group: "AI & Machine Learning", items: [
      { name: "Machine Learning", icon: "custom:ml" },
      { name: "Generative AI",    icon: "custom:genai" },
      { name: "NumPy",            icon: "numpy" },
      { name: "Pandas",           icon: "pandas" },
      { name: "Matplotlib",       icon: "matplotlib" }
    ]},
    { group: "Frontend", items: [
      { name: "HTML",         icon: "html5" },
      { name: "CSS",          icon: "css3" },
      { name: "React",        icon: "react" },
      { name: "Tailwind CSS", icon: "tailwindcss" }
    ]},
    { group: "Backend & Database", items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Flask",   icon: "flask" },
      { name: "MySQL",   icon: "mysql" }
    ]},
    { group: "Tools", items: [
      { name: "Git",      icon: "git" },
      { name: "GitHub",   icon: "github" },
      { name: "Postman",  icon: "postman" },
      { name: "VS Code",  icon: "vscode" },
      { name: "MS Excel", icon: "custom:grid" }
    ]},
    { group: "Core Subjects", items: [
      { name: "DSA",                icon: "custom:code" },
      { name: "OOP",                icon: "custom:code" },
      { name: "DBMS",               icon: "custom:db" },
      { name: "Operating Systems",  icon: "custom:book" },
      { name: "Computer Networks",  icon: "custom:book" }
    ]}
  ],

  /* ------------------------------- PROJECTS -------------------------------- */
  /* Naya project add karne ke liye neeche wala TEMPLATE copy karke list me paste karo.

     live:   apni deployed site ka link (Streamlit / Vercel / Netlify / GitHub Pages ...)
             → "Live Demo" + "Preview" button aayenge, aur screenshot khud ban jaayega
     github: repository ka link  → "GitHub" button aayega
     image:  optional. Khaali chhodo — live link ka auto-screenshot dikhega.

     ---------- TEMPLATE (copy karo) ----------
     {
       title: "Project Name",
       year: "2026",
       category: "Web App",
       featured: false,
       description: "1-2 line me project kya karta hai.",
       details: [
         "Pehla point ...",
         "Doosra point ..."
       ],
       tech: ["Python", "Flask"],
       live: "https://your-project.vercel.app",
       github: "https://github.com/puneetkumar27/your-repo",
       image: ""
     },
     ------------------------------------------ */
  projects: [
    {
      title: "Book Recommendation System",
      year: "2026",
      category: "Machine Learning",
      featured: true,
      description:
        "A book recommendation system in Python that combines collaborative and content-based filtering, with a Streamlit/Flask interface for real-time book search and discovery.",
      details: [
        "Developed a Book Recommendation System in Python, implementing collaborative and content-based filtering techniques.",
        "Performed data cleaning, preprocessing and analysis using Pandas and NumPy.",
        "Designed a user-friendly interface with Streamlit/Flask for real-time book searching and discovery.",
        "Tools: Git, GitHub, VS Code."
      ],
      tech: ["Python", "Streamlit", "Pandas", "NumPy", "Plotly", "Seaborn", "Matplotlib"],
      live: "",      // <-- deployed link yahan daalo
      github: "",    // <-- repository link yahan daalo
      image: ""
    }
  ],

  /* ------------------------------ EXPERIENCE ------------------------------- */
  /* proof: "asset:..." (site ke andar packed image) ya koi bhi image/PDF ka link */
  experience: [
    {
      role: "Web Development Intern",
      org: "Zidio Development",
      place: "Bengaluru, Karnataka (Remote)",
      period: "3 Months",
      description:
        "Accepted the Web Development Intern position at Zidio Development. Remote internship, reporting to the Tech Lead.",
      tags: ["Web Development", "Remote"],
      proof: "asset:zidio",
      proofLabel: "View offer letter"
    },
    {
      role: "Java Full Stack Development With Project — Virtual Internship",
      org: "AICTE × EduSkills Academy",
      place: "Virtual",
      period: "Jun – Aug 2026",
      description:
        "Completed the 8-week virtual internship supported by EduSkills Academy (AICTE, Ministry of Education) with project work, and earned Grade O (Outstanding, 90–100).",
      tags: ["Java", "Full Stack Development", "Grade: Outstanding"],
      proof: "asset:eduskills",
      proofLabel: "View certificate"
    },
    {
      role: "Student Placement Coordinator",
      org: "Galgotias University",
      place: "Greater Noida, Uttar Pradesh",
      period: "AY 2025 – 26",
      description:
        "Coordinated placement activities, supported fellow students and contributed to the successful conduct of campus recruitment drives. Recognised with a Certificate of Appreciation.",
      tags: ["Leadership", "Coordination", "Campus Recruitment"],
      proof: "asset:galgotias",
      proofLabel: "View appreciation certificate"
    }
  ],

  /* ------------------------------- EDUCATION ------------------------------- */
  education: [
    {
      degree: "Master of Computer Applications (MCA) — Computer Science",
      school: "Galgotias University",
      place: "Gautam Buddh Nagar, Uttar Pradesh",
      period: "2025 – Present",
      description: "Pursuing MCA with a focus on software development, programming and AI & Machine Learning."
    },
    {
      degree: "Bachelor of Computer Applications (BCA) — Computer Science",
      school: "MJP Rohilkhand University",
      place: "Bareilly, Uttar Pradesh",
      period: "2021 – 2024",
      description: "Coursework in Software Engineering, Data Structures & Algorithms."
    },
    {
      degree: "Intermediate (Class 12)",
      school: "Gyan Jyoti P.I.C, Tehari Dhukri",
      place: "Powayan, Shahjahanpur, Uttar Pradesh",
      period: "2021",
      description: ""
    },
    {
      degree: "High School (Class 10)",
      school: "Saraswati Vidya Mandir I.C",
      place: "Powayan, Shahjahanpur, Uttar Pradesh",
      period: "2017 – 2018",
      description: ""
    }
  ],

  /* ----------------------------- CERTIFICATIONS ---------------------------- */
  /* category: "Course" / "Job Simulation" / "Quiz"  (filter buttons inhi se ban jaate hain)
     img:  "asset:..." ya koi image ka link — khaali chhodo to sirf tick icon dikhega
     link: verify / credential ka URL (optional)

     ---------- TEMPLATE (copy karo) ----------
     {
       title: "Certificate Name",
       issuer: "Coursera / NPTEL / Udemy ...",
       issued: "Month 2026",
       id: "",
       category: "Course",
       desc: "1 line me kya seekha.",
       img: "",
       link: ""
     },
     ------------------------------------------ */
  certifications: [
    {
      title: "Cybersecurity Job Simulation",
      issuer: "Mastercard × Forage",
      issued: "June 2026",
      id: "",
      category: "Job Simulation",
      desc: "Completed practical tasks: designed a phishing email simulation and interpreted phishing simulation results.",
      img: "asset:cyber",
      link: ""
    },
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "Online course",
      issued: "June 2026",
      id: "10338524",
      category: "Course",
      desc: "Completed the Introduction to Artificial Intelligence course.",
      img: "asset:ai",
      link: ""
    },
    {
      title: "Introduction to MS Excel",
      issuer: "Online course",
      issued: "June 2026",
      id: "10337234",
      category: "Course",
      desc: "Completed the Introduction to MS Excel course.",
      img: "",
      link: ""
    },
    {
      title: "AWS Academy Graduate — Machine Learning Foundations",
      issuer: "AWS Academy",
      issued: "May 2026",
      id: "",
      category: "Course",
      desc: "Completed the 20-hour AWS Academy Machine Learning Foundations course and earned the training badge.",
      img: "",
      link: "https://www.credly.com/go/BPG9qCFw"
    },
    {
      title: "Advance Excel",
      issuer: "GreyLearn",
      issued: "June 2026",
      id: "",
      category: "Course",
      desc: "Completed the Advance Excel course. Identity and participation verified by GreyLearn.",
      img: "",
      link: "https://www.greylearn.com/verify/AG2791KUKO"
    },
    {
      title: "Low-Code No-Code",
      issuer: "Infosys Springboard",
      issued: "May 2026",
      id: "",
      category: "Course",
      desc: "Completed the Low-Code No-Code course on Infosys Springboard.",
      img: "asset:lowcode",
      link: "https://verify.onwingspan.com",
      linkLabel: "Verify"
    },
    {
      title: "Database Programming with SQL",
      issuer: "Oracle Academy × Galgotias University",
      issued: "June 2026",
      id: "",
      category: "Course",
      desc: "Satisfactory completion of all coursework for Database Programming with SQL.",
      img: "asset:oracle",
      link: ""
    },
    {
      title: "Operating System Track",
      issuer: "Code360 by Coding Ninjas",
      issued: "July 2026",
      id: "",
      category: "Course",
      desc: "Completed the Operating System track guided path — Introduction to OS, Process, Threads and more.",
      img: "asset:code360",
      link: ""
    },
    {
      title: "Quiz on Women in India's Freedom Movement",
      issuer: "MYBharat · Ministry of Youth Affairs & Sports",
      issued: "June 2026",
      id: "",
      category: "Quiz",
      desc: "Certificate of Participation — online quiz conducted on MYBharat.",
      img: "asset:myb_women",
      link: ""
    },
    {
      title: "Quiz on India's Success on Nuclear Technology",
      issuer: "MYBharat · Ministry of Youth Affairs & Sports",
      issued: "June 2026",
      id: "",
      category: "Quiz",
      desc: "Certificate of Participation — online quiz conducted on MYBharat.",
      img: "asset:myb_nuclear",
      link: ""
    },
    {
      title: "Public Grievance Redressal & CPGRAMS Awareness Quiz",
      issuer: "MYBharat · Ministry of Youth Affairs & Sports",
      issued: "June 2026",
      id: "",
      category: "Quiz",
      desc: "Certificate of Participation — online quiz conducted on MYBharat.",
      img: "asset:myb_cpgrams",
      link: ""
    },
    {
      title: "Ocean Science for Viksit Bharat Quiz",
      issuer: "MYBharat · Ministry of Youth Affairs & Sports",
      issued: "June 2026",
      id: "",
      category: "Quiz",
      desc: "Certificate of Participation — online quiz conducted on MYBharat.",
      img: "asset:myb_ocean",
      link: ""
    },
    {
      title: "NPTEL Online Certification",
      issuer: "NPTEL · SWAYAM",
      issued: "",
      id: "",
      category: "Course",
      desc: "",
      img: "",
      link: ""
    },
    {
      title: "NISM Certification",
      issuer: "NISM",
      issued: "",
      id: "",
      category: "Course",
      desc: "",
      img: "",
      link: ""
    },
    {
      title: "Technical Writing",
      issuer: "Reliance Foundation",
      issued: "",
      id: "",
      category: "Course",
      desc: "",
      img: "",
      link: ""
    }
  ],

  /* ------------------------------ ACHIEVEMENTS ----------------------------- */
  achievements: [
    {
      badge: "304",
      title: "AMCAT (SHL Assessment) — Score 304",
      desc: "Scored 304 in AMCAT, demonstrating proficiency in logical reasoning and computer science fundamentals.",
      img: ""
    },
    {
      badge: "O",
      title: "Outstanding Grade — AICTE × EduSkills Virtual Internship",
      desc: "Awarded Grade O (Outstanding) for the 8-week Java Full Stack Development With Project virtual internship.",
      img: ""
    },
    {
      badge: "★",
      title: "Certificate of Appreciation — Student Placement Coordinator",
      desc: "Recognised by Galgotias University for dedication, leadership and commitment while coordinating placement activities in AY 2025–26.",
      img: "asset:galgotias"
    }
  ],

  /* -------------------------------- CONTACT -------------------------------- */
  contact: {
    heading: "Let's build something together.",
    text: "Have an internship, job opportunity or project in mind? Reach out below — I'll get back to you promptly.",
    availableFor: "Internships & Entry-Level Software / AI-ML Roles",
    references: "References available upon request."
  }
};
