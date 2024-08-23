'use client';

import React from 'react';
import Loader from '@/components/Loader/Loader';
import projectsData, { ProjectsDataType } from '@/lib/projects';
import css from './Projects.module.css';
import Project from '@/components/Project/Project';

export interface ProjectsProps {}

export default function Projects({}: ProjectsProps) {
  return (
    <div>
      <h3 className={css.title}>Projects</h3>
      {<Loader /> && (
        <ul className={css.container}>
          {projectsData.map((project: ProjectsDataType) => (
            <Project key={project.id} project={project} />
          ))}
        </ul>
      )}
    </div>
  );
}
