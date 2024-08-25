export interface ProjectsDataType {
  id: number;
  project_type: string;
  project_name: string;
  description: string;
  skills: string;
  git_url: string;
  preload_img: string;
  web_url?: string;
  backend_url?: string;
  swagger?: string;
}

const projectsData: ProjectsDataType[] = [
  {
    id: 8,
    project_type: 'Personal Project',
    project_name: 'Fullstack Portfolio',
    description:
      'A personal portfolio website meticulously designed and developed by myself using Next.js and TypeScript. The site features a custom design, created from scratch to reflect my unique style and professionalism. It is fully responsive, offering a seamless user experience across all devices. Additionally, the site includes a backend integration for handling contact form submissions, demonstrating my full-stack capabilities. This portfolio effectively showcases my skills, experience, and projects in a clean, modern, and professional manner.',
    skills:
      'Next.js, React, TypeScript, CSS, Responsive Design, UI/UX, Backend Integration, Node.js, Express',
    web_url:
      'https://mariia-batiuta-fullstack-developer-personal-web.vercel.app/',
    git_url: 'https://github.com/MariiaBatyuta/Personal_Web_frontend',
    preload_img:
      'https://res.cloudinary.com/taskmanagerphoto/PersonalWeb/ProjectPreviews/FullstackPortfolio',
    backend_url: 'https://github.com/MariiaBatyuta/Personal_Web_backend',
    swagger: 'https://personal-web-backend-1wxz.onrender.com/api-doc',
  },
  {
    id: 7,
    project_type: 'Personal Project',
    project_name: 'Backend Project',
    description:
      'Developed a REST API using Node.js and Express.js, featuring CRUD operations integrated with a MongoDB database. This project highlights my backend development skills and understanding of RESTful services.',
    skills: 'Node.js, Express.js, MongoDB, REST API, Git',
    git_url: 'https://github.com/MariiaBatyuta/goit-node-rest-api',
    preload_img:
      'https://res.cloudinary.com/taskmanagerphoto/PersonalWeb/ProjectPreviews/BackEnd',
    web_url: '',
    backend_url: '',
    swagger: 'http::/test.com',
  },
  {
    id: 6,
    project_type: 'Group Project',
    project_name: 'Task Pro',
    description:
      'I developed the entire backend for a task management application, which allows users to create, edit, and delete tasks. The project demonstrates full-stack development skills with a focus on backend integration.',
    skills: 'Node.js, Express.js, MongoDB, REST API, HTML, CSS, JS, Git',
    web_url: 'https://task-manager-jet-psi.vercel.app/',
    git_url: 'https://github.com/MariiaBatyuta/Task_Manager',
    preload_img:
      'https://res.cloudinary.com/taskmanagerphoto/PersonalWeb/ProjectPreviews/TaskPro',
    backend_url: 'https://github.com/MariiaBatyuta/Task_Manager',
    swagger: 'https://task-manager-r8dz.onrender.com/api-docs',
  },
  {
    id: 5,
    project_type: 'Group Project',
    project_name: 'Energy Flow',
    description:
      'Contributed to a web application that tracks energy flow and provides detailed information on various exercises. I developed the modal windows that display exercise details.',
    skills: 'HTML, CSS, JS, Git',
    web_url: 'https://iirofessor-x.github.io/project_js_CodeCrafters/',
    git_url: 'https://github.com/IIROFESSOR-X/project_js_CodeCrafters',
    preload_img:
      'https://res.cloudinary.com/taskmanagerphoto/PersonalWeb/ProjectPreviews/EnergyFlow',
  },
  {
    id: 4,
    project_type: 'Personal Project',
    project_name: 'Phone Book',
    description:
      'Developed a digital phone book application with functionalities to add, delete, and search for contacts. Implemented authentication to secure user data using Firebase.',
    skills: 'React, Redux, JS, HTML, CSS, Firebase, Git',
    web_url: 'https://goit-react-hw-08-delta-dusky.vercel.app/',
    git_url: 'https://github.com/MariiaBatyuta/goit-react-hw-08',
    preload_img:
      'https://res.cloudinary.com/taskmanagerphoto/PersonalWeb/ProjectPreviews/PhoneBook',
  },
  {
    id: 3,
    project_type: 'Personal Project',
    project_name: 'Search Movie Info',
    description:
      'Created a movie information search application that allows users to find and view details about movies using an external movie database API. The application features a clean and user-friendly design.',
    skills: 'React, JS, HTML, CSS, API integration, Git',
    web_url: 'https://goit-react-hw-05-beige.vercel.app/',
    git_url: 'https://github.com/MariiaBatyuta/goit-react-hw-05',
    preload_img:
      'https://res.cloudinary.com/taskmanagerphoto/PersonalWeb/ProjectPreviews/MovieSearch',
  },
  {
    id: 2,
    project_type: 'Personal Project',
    project_name: 'Photo Search',
    description:
      'Built a photo search application using React that allows users to search for photos via an external API. Focused on creating an intuitive and visually appealing user interface.',
    skills: 'React, JS, HTML, CSS, API integration, Git',
    web_url: 'https://goit-react-hw-04-eta-two.vercel.app/',
    git_url: 'https://github.com/MariiaBatyuta/goit-react-hw-04',
    preload_img:
      'https://res.cloudinary.com/taskmanagerphoto/PersonalWeb/ProjectPreviews/PhotoSearch',
  },
  {
    id: 1,
    project_type: 'Group Project',
    project_name: 'Ice Cream Shop',
    description:
      'Developed a vibrant and user-friendly website for an ice cream shop, emphasizing on smooth user experience. I created all the modal windows, enhancing the interactivity of the site.',
    skills: 'HTML, CSS, Git',
    web_url: 'https://alyona-nekhryshchyniuk.github.io/Team23/',
    git_url: 'https://github.com/Alyona-Nekhryshchyniuk/Team23',
    preload_img:
      'https://res.cloudinary.com/taskmanagerphoto/PersonalWeb/ProjectPreviews/IceCream',
  },
];

export default projectsData;
