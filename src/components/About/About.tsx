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
        <h3 className={css.profession}>Fullstack Developer</h3>
        <p className={css.about}>
          I am a Full Stack Developer with a strong background in project
          management and a proven track record of successfully leading multiple
          projects. With over three years of experience in managing complex
          tasks and collaborating with international clients, I bring both
          technical and managerial expertise to every project.
        </p>
        <div className={css.buttonContainer}>
          <a
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
          src="https://res.cloudinary.com/taskmanagerphoto/PersonalWeb/my-photo"
          alt="personal_photo"
          width={400}
          height={400}
          className={css.image}
        />
      </div>
    </div>
  );
}
