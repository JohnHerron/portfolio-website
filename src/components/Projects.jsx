import style from "./projects.module.css";
import ProjectCard from "./ProjectCard";


export default function Projects() {
    return (
        <div name="projects" className={style.projectsContainer}>
            <h3>Personal Projects</h3>
            <div className={style.projectCarousel}>
                <ProjectCard 
                    title="SpeedReeds" 
                    img="https://lh3.googleusercontent.com/5EvcuFw9f3vOY0Jg7aAXi0K5s6TqFJ5US7Xe_7vilUGmOD0IaQyYlA-K2Q1YjfYXCwEJH4oGJej1aeZkOtq-pciMbYU=s1280-w1280-h800" 
                    link="https://chromewebstore.google.com/detail/speedreeds/kndkkmabomnkgiaaonjdoojkdmdjgche"
                />
                <ProjectCard 
                    title="Checkers AI" 
                    img="https://www.wargamer.com/wp-content/sites/wargamer/2022/06/how-to-play-checkers-red-and-black.jpg"
                    link="https://github.com/JohnHerron/checkers-bot"
                />
            </div>
        </div>
    );
}