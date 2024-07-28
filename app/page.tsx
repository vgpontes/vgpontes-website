import Image from "next/image"
import content from "../public/content.json"
import { Experience } from "./components/Experience"
import { ProjectTable } from "./components/ProjectTable"
import { Badge } from "./components/Badge"
import Link from "next/link"

//const Badge = dynamic(() => import('../components/C'), { ssr: false })

export default function Home() {
  // <footer className="sticky top-0 bg-white">navbar</footer>\
  // mb-14
  return (
    <>
      <main className="min-h-screen">
        <article className="divide-y divide-solid divide-light-gray mx-28">
          <section id="intro" className="flex h-screen items-center justify-center">
            <div className="flex flex-col justify-center text-wrap text-center text-white items-center space-y-10">
              <Image className="w-auto h-auto" src="/images/logo-main.svg" height={56} width={70} alt="Victor Pontes Logo"/>
              <h1 className="text-4xl max-w-xl m-auto font-mono">Hi, I'm Victor and I am a Software Engineer.</h1>
              <p className="text-2xl max-w-3xl font-sans-400">{content.headerText}</p>
            </div>
          </section>
          <section id="aboutme" className="flex justify-center items-center">
            <div className="flex flex-row justify-center items-center text-white p-20 space-x-20">
              <div className="relative rounded-full w-80 h-80 overflow-hidden">
                <Image className="object-cover" fill src="/images/victor-face.jpg" alt="Victor Pontes"/>
              </div>
              <div className="text-wrap text-left">
                <h1 className="text-3xl max-w-xl font-mono-700 mb-11">/about_me</h1>
                <p className="text-lg max-w-3xl font-sans-300 whitespace-pre-line">{content.aboutMe}</p>
              </div>
            </div>
          </section>
          <section id="experience" className="flex flex-col justify-center items-center p-20">
            <h1 className="text-3xl max-w-xl font-mono-700 mb-11 text-white">/experience</h1>
            <Experience/>
          </section>
          <section id="projects" className="flex flex-col justify-center items-center h-screen p-20">
            <ProjectTable/>
          </section>
          <section id="certifications" className="flex flex-col justify-center items-center p-20">
            <h1 className="text-3xl max-w-xl font-mono-700 mb-11 text-white">/certifications</h1>
            <Badge/>
          </section>
        </article>
        <footer id="contact" className="flex h-52 bg-dark-blue justify-center">
          <div className="flex flex-col justify-center items-center space-y-4">
            <h2 className="text-white text-2xl font-mono-700">CONTACT ME</h2>
            <div className="flex flex-row space-x-5">
              <Link href="https://www.linkedin.com/in/vgpontes/" target="_blank">
                <Image src="/images/linkedin_vector.svg" width={37} height={37} alt="linkedin"/>
              </Link>
              <Link href="mailto:victorgpontes02@gmail.com">
                <Image src="/images/email_vector.svg" width={37} height={33} alt="email"/>
              </Link>
            </div>
            <p className="text-light-gray text-lg font-mono-700">Made with love in Seattle, WA</p>
          </div>
        </footer>
    </main>
    </>
  )
}
