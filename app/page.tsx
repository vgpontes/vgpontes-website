'use client'

import Image from "next/image"
import content from "../public/content.json"
import { Experience } from "./components/Experience"
import { ProjectTable } from "./components/ProjectTable"

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
        </article>
    </main>
    </>
  )
}
