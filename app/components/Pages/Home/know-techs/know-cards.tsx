import { getRelativeTimeString } from "@/app/utils/getRelativeTimeString"
import { ReactNode } from "react"

type KnowTechProps={
    tech:{
        icon: ReactNode
        name: string
        startDate: string
    }
}


export default function KnowTech({tech}:KnowTechProps) {
    const relativeTime = getRelativeTimeString(new Date(tech.startDate),"pt-BR").replace('há', '')
    return(
        <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col hover:text-emerald-500 hover:bg-gray-600/30 transition-all gap-2">
            <div>
                <p>{tech.name}</p>
                {tech.icon}
            </div>
            <span>{relativeTime} de experiência</span>
        </div>
    )

}