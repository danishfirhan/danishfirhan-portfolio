import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "MusicRecords2U",
    description:
      "An E-Commerce website made with NextJS, TypeScript, PostgreSQL and styled with TailwindCSS, built to facilitate MusicRecords2U's online sales and showcase products to their customers online.",
    image: "/musicrecords2u.png",
    github: "https://github.com/danishfirhan/sd-project-group-04",
    link: "https://musicrecords2u.streamlit.app/",
  },
  {
    name: "Sports Booking Facility",
    description: "A web-based application that provides an online booking platform for Sports Complex Facilities made with HTML, CSS, JavaScript, PHP and MySQL. Built with a simple and pleasant user interface, featuring user-friendly functionalities and features.",
    image: "/facility-booking-system.png",
    github: "https://github.com/danishfirhan/sports-booking-facility",
    link: "https://sports-booking-facility.streamlit.app/",
  },
  {
    name: "Dune Quiz Website",
    description:
      "A simple web page that shows a quiz from the Dune Science Fiction world. This project is made using HTML, CSS and JavaScript.",
    image: "/dune.png",
    github: "https://github.com/danishfirhan/Dune-Quiz-Website",
    link: "https://dune-quiz.streamlit.app/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
