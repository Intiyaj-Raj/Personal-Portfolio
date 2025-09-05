import type { Project, Certification, Skill } from '../types';

// Project images
import intiyajAnsariLearning from '../assets/mrengineer_project/intiyaj_ansari_learning.png'
import fullstack_developer_rock from '../assets/mrengineer_project/intiyaj_ansari_rock.png'
import intiyajAnsariCalculator from '../assets/mrengineer_project/intiyaj_ansari_calculator.png'
import intiyajAnsariTodo from '../assets/mrengineer_project/intiyaj_ansari_todoApp.png'

// certificate images
import mrEngineerCSS from '../assets/intiyaj_certificate/mrengineer_css.png';
import intiyajJS from '../assets/intiyaj_certificate/intiyaj_js.png'
import fullStackDeveloperImg from '../assets/intiyaj_certificate/full_stack_development.png';
import intiyajAnsariCodTech from '../assets/intiyaj_certificate/intiyaj_ansariCodTech.png';
import intiyajAnsariCodeAlpha from '../assets/intiyaj_certificate/intiyaj_ansariCodeAlpha.png';
import mrEngineerOctanet from '../assets/intiyaj_certificate/mrengineerOctanet.png';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Online Learning Platform',
    description: 'Online Learning Platform by Intiyaj Ansari for smart education.',
    longDescription: 'The Online Learning Platform by Intiyaj Ansari is a modern web-based solution designed to make education more accessible and engaging. It allows students to learn anytime, anywhere with interactive courses, quizzes, and resources. The platform offers a clean, responsive interface that works smoothly across devices, making online education easy for both learners and instructors. Whether it’s for personal growth, skill development, or professional training, this platform provides a simple, user-friendly, and effective way to enhance knowledge.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: intiyajAnsariLearning,
    demoUrl: 'https://mindlearneronlinelearningplatform.netlify.app/',
    githubUrl: 'https://github.com/Intiyaj-Raj/JavaScript-Projects/tree/main/Online%20learning%20platform',
    featured: true,
  },
  {
    id: 2,
    title: 'Rock Paper Scissor Game',
    description: 'Rock Paper Scissor Game by Intiyaj Ansari for fun battles.',
    longDescription: 'The Rock Paper Scissor Game by Intiyaj Ansari is a fun and interactive project designed to provide quick entertainment with simple rules. Rock beats scissors, scissors cut paper, and paper covers rock—making every round exciting and unpredictable. With a clean interface and responsive design, this game offers a smooth experience across devices. Whether you’re playing for fun, learning basics of logic, or challenging friends, this game is a perfect choice for all age groups.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: fullstack_developer_rock,
    demoUrl: 'https://intiyajansarirockgame.netlify.app/',
    githubUrl: 'https://github.com/Intiyaj-Raj/JavaScript-Projects/tree/main/StonePaperScissors',
    featured: true,
  },
  {
    id: 3,
    title: 'Basic Calculator',
    description: 'Basic Calculator by Intiyaj Ansari for quick math operations.',
    longDescription: 'The Basic Calculator by Intiyaj Ansari is a simple yet efficient tool for performing everyday math operations. It supports addition, subtraction, multiplication, and division with a clean, user-friendly interface. Designed for students, professionals, and general users, this calculator ensures fast and accurate results. Its lightweight and responsive structure makes it easy to use across devices. Perfect for learning, practicing, or solving quick calculations, this project is a reliable and practical solution for daily mathematical needs.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: intiyajAnsariCalculator,
    demoUrl: 'https://intiyajcalculator.netlify.app/',
    githubUrl: 'https://github.com/Intiyaj-Raj/CodeAlpha-Intern/tree/main/CodeAlpha_Calculator',
    featured: false,
  },
  {
    id: 4,
    title: 'ToDo App',
    description: 'Todo App by Intiyaj Ansari to manage daily tasks easily',
    longDescription: 'The Todo App by Intiyaj Ansari is a simple yet powerful task management tool that helps you organize your daily tasks effectively. Designed with a clean and responsive interface, this app allows users to add, edit, and delete tasks with ease. Whether you are a student, professional, or freelancer, the Todo App ensures better productivity and time management. Built with modern technologies, it offers a smooth user experience across devices, making it a perfect choice for staying organized every day.',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'React',],
    imageUrl: intiyajAnsariTodo,
    demoUrl: 'https://intiyajansaritodoapp.netlify.app/',
    githubUrl: 'https://github.com/Intiyaj-Raj/ReactJS-Project/tree/main/Todo/todoapp',
    featured: true,
  },
];


export const certifications: Certification[] = [
  {
    id: 1,
    title: 'Introduction to CSS',
    platform: 'Simplilearn',
    year: '2024',
    issuer: 'Simplilearn SkillUP',
    description: 'Learned to style and design responsive, user-friendly web pages with CSS.',
    imageUrl: mrEngineerCSS, //
  },
  {
    id: 2,
    title: 'Unlocking the Power of JavaScript',
    platform: 'Scaler',
    year: '2025',
    issuer: 'Scaler',
    description: 'Gained skills to create interactive, dynamic, and responsive websites using JavaScript.',
    imageUrl: intiyajJS,
  },
  {
    id: 3,
    title: 'Full Stack Development',
    platform: '30dayscoding',
    year: '2025',
    issuer: '30dayscoding',
    description: 'Completed full stack development program covering React, Node.js, and database management.',
    imageUrl: fullStackDeveloperImg,
  },
  {
    id: 4,
    title: 'Frontend Web Development Internship – Codtech IT Solutions',
    platform: 'Codtech',
    year: '2025',
    issuer: 'Codtech IT Solutions',
    description: 'Advanced React patterns, hooks, context API, performance optimization, and testing strategies.',
    imageUrl: intiyajAnsariCodTech,
  },
  {
    id: 5,
    title: 'Frontend Development Internship – CodeAlpha',
    platform: 'CodeAlpha',
    year: '2025',
    issuer: 'CodeAlpha',
    description: 'Worked on real-time projects, focusing on frontend technologies and responsive web design.',
    imageUrl: intiyajAnsariCodeAlpha,
  },
  {
    id: 6,
    title: 'Web Development Internship – Octanet Services Pvt. Ltd.',
    platform: 'Octanet',
    year: '2025',
    issuer: 'Octanet Services Pvt. Ltd.',
    description: 'Focused on web technologies, project management, and client-oriented solutions.',
    imageUrl: mrEngineerOctanet,
  },
]

export const skills: Skill[] = [
  { name: 'HTML5', level: 95, category: 'Frontend', icon: '🌐' },
  { name: 'CSS3', level: 93, category: 'Frontend', icon: '🎨' },
  { name: 'JavaScript', level: 96, category: 'Frontend', icon: '⚡' },
  { name: 'TypeScript', level: 92, category: 'Frontend', icon: '📘' },
  { name: 'React.js', level: 94, category: 'Frontend', icon: '⚛️' },
  // { name: 'Vue.js', level: 87, category: 'Frontend', icon: '💚' },
  { name: 'Node.js', level: 90, category: 'Backend', icon: '🟢' },
  { name: 'Express.js', level: 89, category: 'Backend', icon: '🚀' },
  // { name: 'Python', level: 85, category: 'Backend', icon: '🐍' },
  { name: 'PostgreSQL', level: 88, category: 'Database', icon: '🐘' },
  { name: 'MongoDB', level: 82, category: 'Database', icon: '🍃' },
  { name: 'Redis', level: 80, category: 'Database', icon: '🔴' },
  { name: 'Git', level: 94, category: 'Tools', icon: '📝' },
  { name: 'Docker', level: 83, category: 'DevOps', icon: '🐳' },
  { name: 'AWS', level: 78, category: 'Cloud', icon: '☁️' },
  // { name: 'Linux', level: 87, category: 'System', icon: '🐧' },
];