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
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
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
                okt 2020 -<br />
                dec 2023
              </td>
              <td className={css.specialization}>Project Manager</td>
            </tr>
            <tr>
              <td></td>
              <td className={css.info}>
                I excelled in overseeing project execution, ensuring the
                completion of all tasks necessary for successful delivery. I
                meticulously developed project plans, allocated tasks based on
                urgency, priority, and complexity, and diligently monitored
                deadlines. I fostered clear communication among project team
                members, stakeholders, and clients, ensuring projects were
                delivered within budget and on schedule.
              </td>
            </tr>
            <tr>
              <td className={css.years}>
                feb 2019 -<br />
                may 2020
              </td>
              <td className={css.specialization}>Operation Manager</td>
            </tr>
            <tr>
              <td></td>
              <td className={css.info}>
                I led the development and implementation of a KPI system for 4
                departments, each with tailored performance metrics. I conducted
                initial interviews for 200+ candidates and successfully
                onboarded 30 employees. Additionally, I organized training
                programs, monitored productivity, and fostered effective
                communication among team members.
              </td>
            </tr>
            <tr>
              <td className={css.years}>
                june 2018 -<br />
                dec 2018
              </td>
              <td className={css.specialization}>Manager</td>
            </tr>
            <tr>
              <td></td>
              <td className={css.info}>
                I managed a team of 20+ employees, overseeing scheduling,
                motivation, and workflow supervision. I facilitated initial
                staff adaptation, conducted daily inventory checks, and verified
                purchasing data. Handling cash flow, cashier records, and shift
                reports was also part of my responsibilities. I effectively
                communicated with clients and resolved conflicts as they arose.
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
