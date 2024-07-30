'use client'

import { useState } from 'react';
import content from '../../public/content.json'
import { Dates } from './Dates';
import { MinesweeperGame } from '@vgpontes/minesweeper-react';

export function ProjectTable() {
    const projects = content.projects;

    const [selectedProject, setSelectedProject] = useState(projects[0]);

    return (
        <div id="project-table" className="flex flex-col justify-top text-white h-full w-full xl:px-20">
            <div id="title-section" className="flex justify-center text-white border border-light-gray rounded-t-lg w-full">
                <h1 className="text-3xl font-mono-700 my-3">/projects</h1>
            </div>
            <div id="bottom-section" className="lg:flex lg:flex-row border-x border-b border-light-gray overflow-auto h-screen rounded-b-lg">
                <div id="project-list" className="text-center border-b lg:border-r border-light-gray lg:w-1/3 overflow-auto">
                    <ul className="snap-x snap-mandatory lg:snap-none mt-4 lg:space-x-0 lg:inline-block lg:space-y-10 lg:my-16 overflow-auto whitespace-nowrap lg:whitespace-normal">
                        {projects.map((project) => 
                            <li key={`${project.projectTitle}`} className='inline-block lg:block mb-4 lg:mb-0 w-full'>
                                <button disabled={selectedProject == project} onClick={() => setSelectedProject(project)} className={`${selectedProject == project ? 'text-white' : 'text-light-gray hover:text-light-blue'} 
                                    snap-center lg:snap-align-none lg:block text-nowrap lg:text-wrap text-left font-mono-700 uppercase text-small text-light-gray transition hover:duration-500`}>
                                {project.projectTitle}
                                </button>
                            </li>)}
                    </ul>
                </div>
                <div id="project-details" className="flex flex-col w-full p-6 items-end">
                    <Dates startDate={selectedProject.startDate} endDate={selectedProject.endDate}/>
                    <div className="flex flex-col space-y-4 h-full w-full px-16 pt-4">
                        <h1 className='font-sans-700 text-2xl uppercase w-full'>
                            {selectedProject.projectTitle}
                        </h1>
                        <h2 className='font-sans-700 text-lg w-full'>
                            {selectedProject.skillsUsed}
                        </h2>
                        {selectedProject.projectTitle == "Minesweeper React" ? 
                            <div className='overflow-hidden'>
                                <MinesweeperGame boardHeight={10} boardWidth={10} numMines={10}/>
                            </div> : null}
                        <ul className="list-disc list-inside space-y-4 font-sans-300 text-lg">
                            {selectedProject.bulletPoints.map((bullet, i) => <li key={`${selectedProject.projectTitle}-${i}`}>{bullet}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}