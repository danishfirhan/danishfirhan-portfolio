import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "C++" },
  { skill: "Java" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "MySQL" },
  { skill: "Android Studio" },
  { skill: "Figma" },
  { skill: "Jupyter Notebooks" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Danish Firhan and I am currently a Final Year
              Student pursuing my Diploma in Computer Science at Universiti
              Teknologi Malaysia, Kuala Lumpur.
            </p>
            <br />
            <p>
              I&#39;m a curious individual that&#39;s always trying to acquire new
              skills and knowledge in fields that spark my interest. Currently,
              I&#39;m extremely invested in learning about the latest things in tech
              and computer science, trying my best to land an internship in
              software development or IT!
            </p>
            <br />
            <p>
              I also have lots of hobbies during my free time such as reading,
              playing music, and surfing the web. These hobbies drive me to work
              harder and more efficiently so that I can have more time and
              energy to be spent on them.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-20 md:z-0 mt-8"
              />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
