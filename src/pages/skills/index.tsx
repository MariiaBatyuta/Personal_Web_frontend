import { TiHtml5 } from 'react-icons/ti';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiPostman,
  SiMongodb,
  SiVite,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiFlutter,
  SiZapier,
  SiOpenai,
  SiTelegram,
  SiN8N,
  SiSendgrid
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { TbBrandFlutter } from "react-icons/tb";
import css from './Skills.module.css';

export default function SkillsPage() {
  return (
    <div className={css.container}>
      <div className={css.experience}>
        <h3 className={css.title}>Work Experience</h3>
        <table className={css.table}>
          <tbody>
          <tr>
              <td className={css.years}>
                Jan 2024 -<br />
                present
              </td>
              <td className={css.specialization}>AI & Automation Solutions Dev | Full-Stack Innovator</td>
            </tr>
            <tr>
              <td></td>
              <td className={css.info}>
              I design and build full-stack applications, create automation pipelines and intelligent workflows, integrating APIs, messaging platforms, and cloud services, and apply LLMs and AI-driven solutions to streamline processes and generate actionable insights, leveraging no-code and low-code platforms to rapidly prototype and validate innovative solutions. 
              </td>
            </tr>
            <tr>
              <td className={css.years}>
                Mar 2025 -<br />
                Apr 2025
              </td>
              <td className={css.specialization}>AI & Automation Solutions Developer</td>
            </tr>
            <tr>
              <td></td>
              <td className={css.info}>
              I developed AI agent workflows to automate client processes and extend platform capabilities. I built internal prototypes with external API integrations, debugged and optimized multi-agent systems, and delivered solutions that improved operational efficiency, stability, and business impact.
              </td>
            </tr>
            <tr>
              <td className={css.years}>
                Okt 2020 -<br />
                Dec 2023
              </td>
              <td className={css.specialization}>Project Manager</td>
            </tr>
            <tr>
              <td></td>
              <td className={css.info}>
              I oversaw project execution, developed detailed plans, prioritized tasks, and ensured milestones were completed on time and within budget. I coordinated cross-functional teams, facilitated communication with stakeholders and clients, and optimized workflows to achieve project goals efficiently.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={css.skills}>
  <h3 className={css.title}>Skillset</h3>
  <table className={css.table}>
    <tbody>
      <tr>
        <td className={css.part}>Frontend & Backend</td>
      </tr>
      <tr>
        <td className={css.skillsPart}>
          <TiHtml5 className={css.skillsIcon} />
          <IoLogoCss3 className={css.skillsIcon} />
          <IoLogoJavascript className={css.skillsIcon} />
          <FaReact className={css.skillsIcon} />
          <SiRedux className={css.skillsIcon} />
          <SiTypescript className={css.skillsIcon} />
          <FaNodeJs className={css.skillsIcon} />
          <SiExpress className={css.skillsIcon} />
          <SiNextdotjs className={css.skillsIcon} />
          <SiTailwindcss className={css.skillsIcon} />
        </td>
      </tr>
      <tr>
        <td className={css.part}>AI & Solution Development</td>
      </tr>
      <tr>
        <td className={css.skillsPart}>
          <SiOpenai className={css.skillsIcon} /> 
          <SiSendgrid className={css.skillsIcon} />
          <SiTelegram className={css.skillsIcon} /> 
          <SiN8N className={css.skillsIcon} /> 
        </td>
      </tr>
      <tr>
        <td className={css.part}>Low-Code / No-Code</td>
      </tr>
      <tr>
        <td className={css.skillsPart}>
          <SiFlutter className={css.skillsIcon} /> 
          <TbBrandFlutter className={css.skillsIcon} /> 
          <SiZapier className={css.skillsIcon} /> 
        </td>
      </tr>
      <tr>
        <td className={css.part}>Others</td>
      </tr>
      <tr>
        <td className={css.skillsPart}>
          <FaGithub className={css.skillsIcon} />
          <SiPostman className={css.skillsIcon} />
          <SiMongodb className={css.skillsIcon} />
          <SiVite className={css.skillsIcon} />
          <VscVscode className={css.skillsIcon} />
        </td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  );
}
