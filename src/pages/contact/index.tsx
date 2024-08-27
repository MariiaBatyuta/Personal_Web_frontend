'use client';

import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';
import { HiOutlineClipboardDocument } from 'react-icons/hi2';
import { useRef, useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-hot-toast';
import css from './ContactMe.module.css';
import { SendMail } from '@/api/SendMail';

export interface FormData {
  email: string;
  subject: string;
  text: string;
}

export default function ContactMe() {
  // Copy info
  const emailRef = useRef<HTMLSpanElement>(null);
  const whatsappRef = useRef<HTMLSpanElement>(null);

  const handleCopySymbolClick = (ref: React.RefObject<HTMLSpanElement>) => {
    try {
      const textToCopy = ref.current?.innerText;
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy);
        toast.success('Text successfully saved to the clipboard');
      } else {
        throw new Error('No text to copy');
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong. Try again.');
    }
  };

  // Send mail
  const { mutateAsync: sendMessage, isPending } = SendMail();

  const [formData, setFormData] = useState<FormData>({
    email: '',
    subject: '',
    text: '',
  });

  useEffect(() => {
    const savedData = sessionStorage.getItem('contactFormData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const newData = { ...prevData, [name]: value };
      sessionStorage.setItem('contactFormData', JSON.stringify(newData));
      return newData;
    });
  };

  const validateForm = (): boolean => {
    const { email, subject, text } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    if (!email.trim()) {
      toast.error('Email is required.');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      toast.error('Invalid email format');
      isValid = false;
    }

    if (!subject.trim()) {
      toast.error('Subject is required');
      isValid = false;
    }

    if (!text.trim()) {
      toast.error('Message is required');
      isValid = false;
    }

    return isValid;
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await sendMessage(formData);
      setFormData({ email: '', subject: '', text: '' });
      toast.success(
        'The message was sent successfully! Thank you. Keeping in touch🙂'
      );
      sessionStorage.removeItem('contactFormData');
    } catch (error) {
      toast.error('Failed to send message.\nPlease, try again.');
      console.error(error);
    }
  };

  return (
    <div className={css.container}>
      <div className={css.socialMedia}>
        <h3 className={css.title}>
          For inquiries or collaboration
          <br />
          opportunities, please feel free
          <br />
          to contact me.
        </h3>
        <ul className={css.contacts}>
          <li className={css.contactItem}>
            <a
              href="https://github.com/MariiaBatyuta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub style={{ fontSize: '40px' }} />
            </a>
            <span className={css.contactData}>Mariia Batiuta</span>
          </li>
          <li className={css.contactItem}>
            <a
              href="https://www.linkedin.com/in/mariia-batiuta-08b17b236/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin style={{ fontSize: '40px' }} />
            </a>
            <span className={css.contactData}>Mariia Batiuta</span>
          </li>
          <li className={css.contactItem}>
            <a
              href="mailto:mashabatyuta.work@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgMail style={{ fontSize: '40px' }} />
            </a>
            <HiOutlineClipboardDocument
              style={{ fontSize: '20px', cursor: 'pointer' }}
              onClick={() => handleCopySymbolClick(emailRef)}
            />
            <span ref={emailRef} className={css.contactData}>
              mashabatyuta.work@gmail.com
            </span>
          </li>
          <li className={css.contactItem}>
            <a
              href="https://wa.me/380950176180"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp style={{ fontSize: '40px' }} />
            </a>
            <HiOutlineClipboardDocument
              style={{ fontSize: '20px', cursor: 'pointer' }}
              onClick={() => handleCopySymbolClick(whatsappRef)}
            />
            <span ref={whatsappRef} className={css.contactData}>
              +4368181801045
            </span>
          </li>
        </ul>
      </div>
      <div className={css.contactMe}>
        <h3 className={css.title}>Contact Right Now</h3>
        <form className={css.contactForm} onSubmit={handleFormSubmit}>
          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />

          <label>Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
          />

          <label>Message</label>
          <textarea
            id="text"
            name="text"
            rows={2}
            value={formData.text}
            onChange={handleInputChange}
          />

          {!isPending && (
            <button type="submit" className={css.button}>
              Send Message
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
