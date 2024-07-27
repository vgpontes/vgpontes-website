import content from "../../public/content.json"
import Image from "next/image";
import { Dates } from "./Dates";

export function Experience() {
    const experience = content.experience;
    return (
        <div className="flex flex-wrap justify-center gap-4 text-white whitespace-pre-line">
            {experience.map((job) => 
                <div key={job.employer} className="p-8 rounded-xl bg-md-gray grow basis-1/3">
                    <h2 className="text-2xl font-sans-400">{`${job.position}\nat ${job.employer}`}</h2>
                    <div className="flex flex-col gap-2 my-4">
                        <Dates startDate={job.startDate} endDate={job.endDate}/>
                        <div className="flex flex-row gap-2">
                            <Image src="/images/location_vector.svg" width={13} height={16} alt="Location"/>
                            <p className="text-sm font-sans-200 italic">{job.location}</p>
                        </div>
                    </div>
                    <ul className="list-disc list-inside space-y-4 font-sans-300 text-lg">
                        {job.bulletPoints.map((bullet, i) => <li key={`${job.employer}-${i}`}>{bullet}</li>)}
                    </ul>
                </div>
            )}
        </div>
    );
}