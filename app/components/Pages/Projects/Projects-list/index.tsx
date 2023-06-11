import Link from "next/link";
import ProjectCard from "./Project-card";

export default function ProjectsList() {
    return(
        <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6 ">
            <Link href="/projects/projeto">
                <ProjectCard/>
            </Link>
            <Link href="/projects/projeto">
                <ProjectCard/>
            </Link>
            <Link href="/projects/projeto">
                <ProjectCard/>
            </Link>
        </section>
    )
}