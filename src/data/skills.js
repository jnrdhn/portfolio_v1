// data/skills.js
const skills = {
    technical: [
      {
        category: "Frontend",
        items: [
          { name: "React", level: "Expert", icon: "react-icon" },
          { name: "JavaScript", level: "Expert", icon: "js-icon" },
          // More skills...
        ]
      },
      {
        category: "Backend",
        items: [
          { name: "Node.js", level: "Advanced", icon: "node-icon" },
          { name: "Python", level: "Intermediate", icon: "python-icon" },
          // More skills...
        ]
      },
      // More categories...
    ],
    languages: [
      { name: "English", level: "Native" },
      { name: "Spanish", level: "Fluent" },
      // More languages...
    ],
    certifications: [
      {
        name: "AWS Certified Developer",
        issuer: "Amazon Web Services",
        date: "2023",
        url: "certification-url"
      },
      // More certifications...
    ]
  };
  
  export default skills;