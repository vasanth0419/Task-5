## _DAY 5 TASK SUMMITION_

### **_Create your own resume data in JSON format_**

#### create a js file name `myresume.js`.

#### codes

```
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

//To print my file
console.log(myresume);

```

### **_For the given JSON iterate over all for loops (for, for in, for of, forEach)_**

#### FOR LOOP:

#### 1. Create a js file name `for-loop.js`.

#### 2. Using the `myresume.js` data to iterate here....

#### Codes

```
let count = Object.keys(myresume).length;
let keys = Object.keys(myresume);

for (let i = 0; i < count; i++) {
  let key = keys[i];
  let obj = myresume[key];
  console.log(key, ":", obj);
}

```

#### FOR IN LOOP:

#### 1. Create a js file name `for-in.js`.

#### 2. Using the `myresume.js` data to iterate here....

#### Codes

```
for (let i in myresume) {
  console.log(i, ":", myresume[i]);
}
```

#### FOR OF LOOP:

#### 1. Create a js file name `for-of.js`.

#### 2. Using the `myresume.js` data to iterate here....

#### Codes

```
for (let [key, value] of Object.entries(myresume)) {
  console.log(key, ":", value);
}
```

#### FOREACH LOOP:

#### 1. Create a js file name `foreach.js`.

#### 2. Using the `myresume.js` data to iterate here....

#### Codes

```
Object.entries(myresume).forEach(([key, value]) => {
  console.log(key, ":", value);
});
```
