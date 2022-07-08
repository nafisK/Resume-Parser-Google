import React from "react"
import { storage, db } from "../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { addDoc, collection } from "firebase/firestore"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

export default function Upload() {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    file: null,
    resumeString: "",
    created: new Date(),
  })
  const [submissionAlert, setSubmissionAlert] = useState(false)
  const resumeCollectionRef = collection(db, "resumes")

  const handleClick = () => {
    setSubmissionAlert(!submissionAlert)
  }

  const handleForm = e => {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
  }

  const handleFile = event => {
    const newData = { ...data }
    const file = event.target.files[0]

    const arr = [
      "",
      "Nafis",
      "Khan",
      "nafisrizwankgmailcom",
      "linkedincominnafisrk",
      "githubcomnafisK",
      "EDUCATION",
      "The",
      "City",
      "College",
      "of",
      "New",
      "York",
      "B",
      "S",
      "in",
      "Com",
      "p",
      "ut",
      "er",
      "Sc",
      "ien",
      "c",
      "e",
      "Expected",
      "Graduation",
      "Fall",
      "2023",
      "Borough",
      "of",
      "Manhattan",
      "Community",
      "College",
      "A",
      "S",
      "in",
      "Comp",
      "u",
      "t",
      "er",
      "Sc",
      "ien",
      "c",
      "e",
      "w",
      "it",
      "h",
      "H",
      "on",
      "ors",
      "Graduated",
      "Spring",
      "2020",
      "TECHNICAL",
      "SKILLS",
      "Languages",
      "C",
      "·",
      "Java",
      "·",
      "JavaScript",
      "·",
      "Kotlin",
      "·",
      "Python",
      "Skills",
      "Technologies",
      "Android",
      "Mobile",
      "Development",
      "·",
      "ReactJS",
      "·",
      "HTML",
      "·",
      "CSS",
      "·",
      "Bootstrap",
      "·",
      "Git",
      "·",
      "Firebase",
      "·",
      "Back4app",
      "·",
      "MySQL",
      "·",
      "Markdown",
      "·",
      "Postman",
      "·",
      "Figma",
      "WORK",
      "EXPERIENCE",
      "FACEBOOK",
      "June",
      "2021",
      "August",
      "2021",
      "Facebook",
      "University",
      "FBU",
      "Android",
      "Engineering",
      "Intern",
      "Lead",
      "Managed",
      "and",
      "mentored",
      "the",
      "Android",
      "Development",
      "program",
      "within",
      "FBU",
      "Guided",
      "and",
      "instructed",
      "interns",
      "in",
      "Android",
      "Development",
      "through",
      "concepts",
      "and",
      "debugging",
      "projects",
      "Mentored",
      "a",
      "personal",
      "team",
      "of",
      "15",
      "interns",
      "from",
      "zero",
      "to",
      "a",
      "hundred",
      "Designed",
      "and",
      "developed",
      "guides",
      "tailored",
      "to",
      "commonly",
      "encountered",
      "issues",
      "while",
      "developing",
      "Android",
      "applications",
      "MICROSOFT",
      "February",
      "2022",
      "April",
      "2022",
      "Technical",
      "Resilience",
      "Program",
      "Apprentice",
      "Mentored",
      "by",
      "engineers",
      "on",
      "strategically",
      "navigating",
      "both",
      "work",
      "and",
      "personal",
      "challenges",
      "new",
      "engineers",
      "face",
      "in",
      "the",
      "industry",
      "Taught",
      "to",
      "develop",
      "a",
      "growth",
      "mindset",
      "enhance",
      "selfefficacy",
      "and",
      "work",
      "on",
      "activities",
      "focusing",
      "on",
      "Technical",
      "Resilience",
      "Learned",
      "to",
      "communicate",
      "with",
      "others",
      "through",
      "mirroring",
      "and",
      "coaching",
      "HEADSTARTER",
      "June",
      "2022",
      "August",
      "2022",
      "Software",
      "Engineering",
      "Fellow",
      "Building",
      "serverless",
      "APIs",
      "using",
      "AWS",
      "Lambda",
      "with",
      "99",
      "uptime",
      "and",
      "realtime",
      "Dynamo",
      "DB",
      "data",
      "entry",
      "tables",
      "Developed",
      "projects",
      "from",
      "design",
      "to",
      "deployment",
      "leading",
      "4",
      "fellows",
      "using",
      "MVC",
      "design",
      "pattern",
      "Coached",
      "by",
      "Amazon",
      "Bloomberg",
      "Google",
      "and",
      "Capital",
      "One",
      "engineers",
      "on",
      "Agile",
      "CICD",
      "Git",
      "and",
      "Microservice",
      "patterns",
      "CODEPATH",
      "August",
      "2021",
      "January",
      "2022",
      "Android",
      "Development",
      "Teaching",
      "Assistant",
      "Taught",
      "Android",
      "Development",
      "via",
      "implementations",
      "of",
      "apps",
      "such",
      "as",
      "Flix",
      "Twitter",
      "Instagram",
      "and",
      "a",
      "group",
      "project",
      "Monitored",
      "a",
      "timesensitive",
      "live",
      "support",
      "channel",
      "on",
      "Slack",
      "to",
      "provide",
      "students",
      "with",
      "guidance",
      "on",
      "assignments",
      "Resolved",
      "git",
      "issues",
      "and",
      "project",
      "bugs",
      "using",
      "Android",
      "Studios",
      "debugging",
      "tools",
      "via",
      "oneonone",
      "or",
      "group",
      "zoom",
      "sessions",
      "RESEARCH",
      "FOUNDATION",
      "OF",
      "THE",
      "CITY",
      "UNIVERSITY",
      "OF",
      "NEW",
      "YORK",
      "October",
      "2020",
      "June",
      "2022",
      "Computer",
      "Science",
      "Teaching",
      "Assistant",
      "Instructed",
      "students",
      "on",
      "the",
      "basics",
      "of",
      "programming",
      "from",
      "introduction",
      "to",
      "intermediate",
      "courses",
      "using",
      "C",
      "Java",
      "and",
      "python",
      "Provided",
      "live",
      "tutoring",
      "services",
      "to",
      "over",
      "100",
      "students",
      "PROJECTS",
      "Macro",
      "Calculator",
      "Android",
      "App",
      "Spring",
      "2021",
      "A",
      "B",
      "C",
      "GradSchoolZero",
      "Web",
      "App",
      "Fall",
      "2021",
      "A",
      "B",
      "C",
      "Trailers",
      "Max",
      "Android",
      "App",
      "Summer",
      "2021",
      "A",
      "B",
      "C",
      "Instagram",
      "Clone",
      "Android",
      "App",
      "Summer",
      "2021",
      "A",
      "B",
      "C",
      "Project",
      "Rainforest",
      "Web",
      "App",
      "Spring",
      "2020",
      "A",
      "B",
      "AWARDS",
      "ACTIVITIES",
      "PTK",
      "Honors",
      "Society",
      "Spring",
      "2018",
      "NSLS",
      "Honors",
      "Society",
      "Spring",
      "2018",
      "BMCC",
      "Deans",
      "List",
      "Fall",
      "2018",
      "BMCC",
      "BSA",
      "Treasurer",
      "Fall",
      "2020",
      "CodePath",
      "Android",
      "Bootcamp",
      "Spring",
      "2021",
      "Interview",
      "Prep",
      "Volunteer",
      "Fall",
      "2021",
      "",
    ]

    // setting actual file
    newData["file"] = file
    newData["resumeString"] = arr

    setData(newData)
  }

  const handleSubmit = async e => {
    var fileUrl = ""
    e.preventDefault()
    const storageRef = ref(storage, `/resumes/${uuidv4()}`)
    const uploadTask = uploadBytesResumable(storageRef, data.file)
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log("Upload is " + progress + "% done")
      },
      error => {
        console.log(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(url_ => {
          fileUrl = url_
          submitDataToServer(fileUrl)
          handleClick()
        })
      }
    )
  }

  const submitDataToServer = async fileUrl => {
    await addDoc(resumeCollectionRef, {
      name: data.name,
      email: data.email,
      number: data.number,
      fileUrl: fileUrl,
      created: data.created,
      resumeString: data.resumeString,
    })
  }

  return (
    <div className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center'>
          <h2 className='text-5xl font-bold'>
            Send us your resume to be considered
          </h2>
        </div>

        <div className='py-9 md:grid-cols-3 gap-1 px-2 text-center'>
          <div className='border p-10 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>
              Upload Your Resume
            </p>
            <form onSubmit={e => handleSubmit(e)}>
              <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
                <input
                  required
                  type='text'
                  className='block border border-grey-light w-full p-3 rounded mb-4'
                  placeholder='Full Name'
                  id='name'
                  onChange={e => handleForm(e)}
                />
                <input
                  required
                  type='text'
                  className='block border border-grey-light w-full p-3 rounded mb-4'
                  id='email'
                  placeholder='Email'
                  onChange={e => handleForm(e)}
                />
                <input
                  required
                  type='text'
                  className='block border border-grey-light w-full p-3 rounded mb-4'
                  id='number'
                  placeholder='Phone Number'
                  onChange={e => handleForm(e)}
                />
                <input
                  required
                  className='form-control block w-full px-6 py-3 mb-4 text-base font-normal text-gray-700 bg-white bg-clip-padding 
                    border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                    focus:border-blue-600 focus:outline-none'
                  type='file'
                  id='file'
                  onChange={e => handleFile(e)}
                />
                <button
                  type='submit'
                  className='w-full text-indigo-600 text-center py-3 rounded bg-green  hover:bg-green-dark focus:outline-none my-1'
                >
                  Submit
                </button>
                {submissionAlert && (
                  <div
                    className='p-3 my-3 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800'
                    role='alert'
                  >
                    <span className='font-bold'>
                      Resume successfully uploaded!
                    </span>
                    <br />A recruiter will contact you if your resume fits the
                    role.
                  </div>
                )}

                <div className='text-center text-sm text-grey-dark mt-4'>
                  By signing up, you agree to the Terms of Service and Privacy
                  Policy
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
