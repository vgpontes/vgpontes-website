import Image from "next/image"

export interface DatesProps {
    startDate: string,
    endDate: string
}

export function Dates(props : DatesProps) {
    return (
        <div className="flex flex-row gap-2">
            <Image style={{width: 13, height: 16}} src="/images/clock_vector.svg" width={13} height={16} alt="Dates"/>
            <p className="text-sm font-sans-200 italic">{`${props.startDate} - ${props.endDate}`}</p>
        </div>
    )
}