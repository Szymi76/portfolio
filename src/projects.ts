import { Project } from "./types";

const chips = {
  react: { label: "React", className: "bg-blue-500 text-white" },
  redux: { label: "Redux", className: "bg-purple-500 text-white" },
  styledComponents: {
    label: "Styled components",
    className: "bg-yellow-500 text-black",
  },
  firebase: { label: "Firebase", className: "bg-orange-400 text-black" },
  mui: { label: "MUI", className: "bg-blue-400 text-white" },
  zustand: { label: "Zustand", className: "bg-black text-white" },
  heroUI: { label: "HeroUI", className: "bg-black text-white" },
  next: { label: "Next", className: "bg-black text-white" },
  prisma: { label: "Prisma", className: "bg-blue-400, text-white" },
  typescript: { label: "Typescript", className: "bg-blue-700 text-white" },
  tailwindCss: { label: "TailwindCSS", className: "bg-blue-600 text-white" },
  mongodb: { label: "MongoDB", className: "bg-green-500 text-white" },
  node: { label: "Node", className: "bg-black text-white" },
  sass: { label: "SASS", className: "bg-pink-600 text-white" },
  socket: { label: "Socket.IO", className: "bg-black text-white" },
};

export const projects: Project[] = [
  {
    title: "Portal społecznościowy",
    description:
      "Aplikacja do publikowania postów zbudowana za pomocą T3 Stack i styled components.",
    chips: [chips.react, chips.typescript, chips.next, chips.styledComponents],
    repoURL: "https://github.com/Szymi76/Postify_Social-Media-App",
    demoURL: "https://postify-three-coral.vercel.app/",
    imageURL: "websites/website_postify.png",
  },
  {
    title: "Chat online",
    description: "Prosta aplikacja do komunikowania się za pomocą czatu.",
    chips: [
      chips.react,
      chips.typescript,
      chips.firebase,
      chips.mui,
      chips.zustand,
      chips.socket,
    ],
    repoURL: "https://github.com/Szymi76/sendit",
    demoURL: "https://sendit-9i5p.onrender.com/#/chat",
    imageURL: "websites/website_sendit.png",
  },
  {
    title: "Forum internetowe",
    description:
      "Forum dla programistów gdzie można zadawać i odpowiadać na pytania. Wzorowane na stackoverflow.",
    chips: [
      chips.react,
      chips.typescript,
      chips.redux,
      chips.styledComponents,
      chips.node,
    ],
    repoURL: "https://github.com/Szymi76/stackcode",
    imageURL: "websites/website_stackcode.png",
  },
  {
    title: "Gry przeglądarkowe",
    description: "Strona z kilkoma grami w które można grać samemu",
    chips: [chips.react, chips.typescript, chips.heroUI, chips.zustand],
    repoURL: "https://github.com/Szymi76/offline-games-react-app",
    demoURL: "https://offline-games-react-app.vercel.app/",
    imageURL: "websites/website_offline-games.png",
  },
  {
    title: "Ankiety online",
    description:
      "Strona do tworzenia prostych ankiet, posiada dashboard do sprawdzania statystyk.",
    chips: [
      chips.react,
      chips.typescript,
      chips.tailwindCss,
      chips.firebase,
      chips.mongodb,
      chips.node,
    ],
    repoURL: "https://github.com/Szymi76/survey-app",
    demoURL: "https://ankieta-na-teraz.onrender.com/",
    imageURL: "websites/website_survey-app.png",
  },
  {
    title: "Frontendmentor Challenges",
    description:
      "Wyzwania polegające na odwzorowywaniu stron na podstawie ich designów.",
    chips: [chips.react, chips.tailwindCss, chips.sass],
    repoURL: "https://github.com/Szymi76/frontendmentor",
    imageURL: "websites/website_frontendmentor.png",
  },
];
