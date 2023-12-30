// 1. For the given JSON iterate using for each loop.

let myresume = {
  personalInformation: [
    {
      firstName: "vasanth",
      lastName: "salomon",
      location: {
        address: "85/97A, Alagapuri nagar, Ramnagar,Devakotai",
        district: "sivagangai",
        pincode: 630302,
        state: "Tamilnadu",
        country: "India",
      },
      email: "vasanthsalomonv1904@gmail.com",
      phone: +919566443153,
    },
  ],
  profiles: [
    {
      linkedin: "www.linkedin.com/in/vasanth-salomon",
      github: "https://github.com/vasanth0419/",
    },
  ],
  education: [
    {
      degree: "Master of Business Administration in Human Resource Management",
      University: "Alagappa University DDE",
      graduationYear: 2022,
    },
    {
      degree: "Bachelor of Science in C & HA",
      University: "Alagappa University",
      graduationYear: 2019,
    },
  ],
  skills: [
    {
      Programminglanguages: "Python",
      Webdevelopment: "HTML, CSS, JavaScript",
      cloudKnowledge: "Microsoft Azure",
      versionControl: "Git & GitHub",
      database: "MySQL",
    },
  ],

  certifications: [
    {
      name: "Microsoft certified: Azure Fundamentals.",
      authority: "Microsoft",
      completionYear: 2023,
    },
  ],
  languages: [
    {
      fristlanguage: "english",
      secondlanguage: "tamil",
    },
  ],
  hobbies: ["Listening to music", "Reading books"],
};

Object.entries(myresume).forEach(([key, value]) => {
  console.log(key, ":", value);
});
