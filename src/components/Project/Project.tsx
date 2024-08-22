'use client'

import { FaGithub } from "react-icons/fa";
import css from "./Project.module.css";
import { ProjectsDataType } from "@/lib/projects";
import Image from "next/image";

export interface ProjectPropsType {
    project: ProjectsDataType;
};

export default function Project({ project }: ProjectPropsType) {
    const handlePhotoClick = () => {
        window.open(project.web_url, "_blank", "noopener noreferrer");
    };

    return (
        <div className={css.projectCard}>
            <div className={css.projectInfo}>
                <h5>{project.project_type}</h5>
                <h3>{project.project_name}</h3>
                <p>{project.description}</p>
                <h4 className={css.skillsTitle}>Technology:</h4>
                <p className={css.skills}>{project.skills}</p>

                <div className={css.projectLink}>
                    {project.web_url && <a href={project.web_url} target="_blank" rel="noopener noreferrer" >Web</a>}
                    <a href={project.git_url} target="_blank" rel="noopener noreferrer" ><FaGithub /></a>
                    {project.backend_url && <a href={project.backend_url} target="_blank" rel="noopener noreferrer">Backend</a>}
                    {project.swagger && <a href={project.swagger} target="_blank" rel="noopener noreferrer">Swagger</a>}
                </div>
            </div>
            <div className={css.imgContainer}>
                <Image src={project.preload_img} alt="project preload photo" width="200" height="100" className={css.image} onClick={handlePhotoClick} />
            </div>
        </div>
    );
}
