import { RiComputerLine } from "react-icons/ri";
import { FaDatabase, FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> React Js</b>,<b> Next Js</b>  and <b>Vue Js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Laravel</b>, <b>Node </b> & <b>Express </b>",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about: "I can develop  REST API using <b>Laravel</b>  & <b>Node API</b> ",
  },
  {
    Icon: FaDatabase,
    title: "Databases",
    about:
      "working on different databases like <b>MySql</b>, <b>Firebase</b>  and <b>Mongo DB</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "CSS Frameworks",
    about:
      "building beautifull websites using <b>Tailwind CSS</b>  and  <b>Bootstrap</b> ",
  },
  // {
  //   Icon: RiComputerLine,
  //   title: "Whatever",
  //   about:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  // },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Laravel",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Next",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Vue",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwind CSS",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Canva",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Office",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Power Point",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Excel",
    level: "80",
  },
];

export const projects: IProject[] = [
  {
    name: "Scholarly Help",
    image_path: "/images/scholarlyhelp.png",
    deployed_url: "https://scholarlyhelp.com/",
    github_url: "https://github.com/usmanlatif306",
    category: ["laravel", "vue"],
    description:
      "Leading Academic Writing Services, Light on your Pocket. We deliver the most trustworthy academic writing assistance for your online class!",
    key_techs: ["Laravel", "MySql", "Vue", "Stripe"],
  },
  {
    name: "Easy Pupils",
    description: "Easy pupils is a school management system.",
    image_path: "/images/school.png",
    deployed_url: "http://school.javaplums.com",
    github_url: "https://github.com/usmanlatif306",
    category: ["laravel"],
    key_techs: ["Laravel", "Jquery", "MySql"],
  },
  {
    name: "Synicare",
    description: "Medication History Easily Accessible",
    image_path: "/images/synicare.png",
    deployed_url: "https://synicare.com",
    github_url: "https://github.com/usmanlatif306",
    category: ["laravel"],
    key_techs: ["Laravel", "Jquery", "LiveWire", "MySql", "Stripe"],
  },
  {
    name: "Eduintello",
    description: "Eduintello is essay writing service",
    image_path: "/images/edu.png",
    deployed_url: "http://eduintello.com",
    github_url: "https://github.com/usmanlatif306",
    category: ["laravel"],
    key_techs: ["Laravel", "Jquery", "MySql", "Stripe"],
  },
  {
    name: "Competent Writer",
    image_path: "/images/competent.png",
    deployed_url: "https://competentwriter.com/",
    github_url: "https://github.com/usmanlatif306",
    category: ["laravel", "vue"],
    description:
      "Competent Writer is essay and articles writing platform where student can hire any writer to write their essay",
    key_techs: ["Laravel", "MySql", "Vue", "Stripe"],
  },

  {
    name: "Phone Locally",
    image_path: "/images/phone.png",
    deployed_url: "https://phonelocally.com/",
    github_url: "https://github.com/usmanlatif306",
    category: ["laravel"],
    description:
      "UK based calling agency where user can purchase a local number and can call to any number in the world on cheap rates",
    key_techs: ["Laravel", "MySql", "Jquery", "Bootstrap", "Stripe"],
  },

  {
    name: "VPS2Days",
    image_path: "/images/vps.png",
    deployed_url: "https://vps2days.com/",
    github_url: "https://github.com/usmanlatif306",
    category: ["laravel"],
    description: "VPS2Days is vps providing services on cheap rates",
    key_techs: ["Laravel", "MySql", "Jquery", "Bootstrap", "Stripe"],
  },

  {
    name: "Instagram Clone",
    image_path: "/images/inst.png",
    deployed_url: "https://instagram-clone-git-main-usmanlatif306.vercel.app",
    github_url: "https://github.com/usmanlatif306/instagram-clone",
    category: ["react", "node"],
    description:
      "Instagram clone is social media app based on instagram with google authentication where user can create, view and comment on any post",
    key_techs: [
      "React",
      "Next Js",
      "Tailwind",
      "Firebase",
      "Google Auth",
      "Node",
    ],
  },

  {
    name: "Air Bnb",
    image_path: "/images/air.png",
    deployed_url: "https://airbnb-clone-usmanlatif306.vercel.app",
    github_url: "https://github.com/usmanlatif306/airbnb-clone",
    category: ["react"],
    description:
      "Hulu clone is hotel booking app  with google authentication where user can book any hotel for their trip in any where in the world",
    key_techs: ["React", "Next Js", "Tailwind", "Next Auth"],
  },
  {
    name: "Hulu Clone",
    image_path: "/images/hulu.png",
    deployed_url: "https://hulu-clone-usmanlatif306.vercel.app",
    github_url: "https://github.com/usmanlatif306/hulu-clone",
    category: ["react"],
    description:
      "Hulu clone is tv series searching app with google authentication where user can search any type of tv series and movies",
    key_techs: ["React", "Next Js", "Tailwind"],
  },
  {
    name: "Amazone Clone",
    image_path: "/images/emazon.png",
    deployed_url: "https://amazone-2-0-usmanlatif306.vercel.app/",
    github_url: "https://github.com/usmanlatif306/amazone-2.0",
    category: ["react", "node"],
    description:
      "Amazone clone is ecommerece app where user can purchase anything online and can pay thier charges through stripe payment gateway",
    key_techs: ["React", "Next Js", "Tailwind", "Firebase", "Node"],
  },
  {
    name: "Green Escape Journey",
    image_path: "/images/green.png",
    deployed_url: "!#",
    github_url: "https://github.com/usmanlatif306/green-escape-journey",
    category: ["react", "node"],
    description:
      "Amazone clone is a tourist base company which offer different tour plan for people, People can choose any plan according to the number of people",
    key_techs: ["React", "Bootstrap", "Firebase", "Node"],
  },
];
