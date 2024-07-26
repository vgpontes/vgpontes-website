import Image from "next/image"
import content from "../public/content.json"

export default function Home() {
  // <footer className="sticky top-0 bg-white">navbar</footer>\
  // mb-14
  return (
    <>
      <main className="min-h-screen">
        <div className="divide-y divide-solid divide-light-gray mx-80">
          <div className="flex h-screen items-center justify-center">
            <div className="flex flex-col justify-center text-wrap text-center text-white items-center space-y-10">
              <Image src="/logo-main.svg" height={56} width={70} alt="Victor Pontes Logo"/>
              <h1 className="text-4xl max-w-xl m-auto font-mono">Hi, I'm Victor and I am a Software Engineer.</h1>
              <p className="text-2xl max-w-3xl font-sans-400">{content.headerText}</p>
            </div>
          </div>
          <div className="flex items-center justify-center items-center">
            <div className="flex flex-row justify-center items-center text-white my-20 space-x-20">
              <div className="relative rounded-full w-80 h-80 overflow-hidden">
                <Image src="/victor-face.jpg" layout="fill" objectFit="cover" alt="Victor Pontes"/>
              </div>
              <div className="text-wrap text-left">
                <h1 className="text-3xl max-w-xl font-bold font-mono mb-11">/about_me</h1>
                <p className="text-lg max-w-3xl font-sans-300 whitespace-pre-line">{content.aboutMe}</p>
              </div>
            </div>
          </div>
        </div>
    </main>
    </>
  )
}
