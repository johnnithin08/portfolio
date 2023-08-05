import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

export const TechComponent = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-20">
            {technologies.map((technology) => {
                return (
                    <div className="w-28 h-28" key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                        <p className="mt-3 text-white text-[14px] justify-center text-center">{technology.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

{/* @ts-ignore */ }
export const Tech = SectionWrapper(TechComponent, "")