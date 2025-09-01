'use client';

import Link from 'next/link';
import css from './About.module.css';
import { MdOutlineFileDownload } from 'react-icons/md';
import { toast } from 'react-hot-toast';
import Image from 'next/image';

export default function About() {
  const handleDownloadClick = () => {
    toast.success(
      'File is downloading now.\nThank you for staying in touch 🙂'
    );
  };

  return (
    <div className={css.container}>
      <div className={css.info}>
        <h1 className={css.title}>Mariia Batiuta</h1>
        <h3 className={css.profession}>Full-Stack Developer | AI & Automation Specialist</h3>
        <p className={css.about}>
        I am a Full-Stack Developer with hands-on experience in AI integration, automation, and no-code/low-code development. I build end-to-end solutions, from full-stack web applications to intelligent workflows that streamline processes and deliver real-world impact. Combining technical expertise with problem-solving and innovation, I create projects that are both functional and business-ready.
        </p>
        <div className={css.buttonContainer}>
          <a
            // CV link
            href={process.env.NEXT_PUBLIC_CV_URL}
            download
            onClick={handleDownloadClick}
          >
            <button>
              CV <MdOutlineFileDownload />
            </button>
          </a>
          <Link href="/contact">
            <button>Contact Me</button>
          </Link>
        </div>
      </div>
      <div className={css.imageContainer}>
        <Image
          src="https://res.cloudinary.com/taskmanagerphoto/image/upload/v1756726358/snapedit_1756726296091_vdabcv.png"
          alt="personal_photo"
          width={400}
          height={400}
          className={css.image}
          priority
        />
      </div>
    </div>
  );
}
