'use client'

import { useState } from 'react';
import content from '../../public/content.json'
import { Dates } from './Dates';

export function ProjectTable() {
    const projects = content.projects;

    const [selectedProject, setSelectedProject] = useState(projects[0]);

    return (
        <div id="project-table" className="flex flex-col justify-top text-white h-full w-full px-20">
            <div id="title-section" className="flex justify-center text-white border border-light-gray rounded-t-lg w-full">
                <h1 className="text-3xl max-w-xl font-mono-700 my-3">/projects</h1>
            </div>
            <div id="bottom-section" className="flex flex-row border-x border-b border-light-gray h-full rounded-b-lg w-full">
                <div id="project-list" className="border-r border-light-gray w-1/3">
                    <ul className="space-y-10">
                        {projects.map((project) => 
                            <li key={`${project.projectTitle}`} className='mt-16 ml-16'>
                                <button disabled={selectedProject == project} onClick={() => setSelectedProject(project)} className={`${selectedProject == project ? 'text-white' : 'text-light-gray hover:text-light-blue'} 
                                    font-mono-700 uppercase text-small text-light-gray transition hover:duration-500`}>
                                {project.projectTitle}
                                </button>
                            </li>)}
                    </ul>
                </div>
                <div id="project-details" className="flex flex-col w-full p-6 items-end">
                    <Dates startDate={selectedProject.startDate} endDate={selectedProject.endDate}/>
                    <div className="transition duration-500 flex flex-col space-y-4 w-full grow h-96 px-16 pt-4">
                        <h1 className='font-sans-700 text-2xl uppercase w-full'>
                            {selectedProject.projectTitle}
                        </h1>
                        <h2 className='font-sans-700 text-lg w-full'>
                            {selectedProject.skillsUsed}
                        </h2>
                        <ul className="list-disc list-inside space-y-4 font-sans-300 text-lg">
                            {selectedProject.bulletPoints.map((bullet, i) => <li key={`${selectedProject.projectTitle}-${i}`}>{bullet}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}