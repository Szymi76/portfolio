import Navbar from "./components/Navbar";
import DesignerIllustration from "/illustration_designer.svg";
import CarouselWithProjects from "./components/CarouselWithProjects";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Download, Mail, Github } from "lucide-react";
import { Section, SectionTitle, TechRate } from "./components/Utils";

const App = () => {
  return (
    <>
      <Navbar />

      {/* landing section */}
      <section
        id="landing"
        className="bg-lime-50 h-full flex justify-center items-center gap-5 py-20 p-5"
      >
        {/* left section side */}
        <div className="max-w-md xl:max-w-xl flex flex-col gap-5 pt-10 lg:pt-0 animate-slide-in">
          <h1 className="text-5xl font-bold leading-[3.5rem]">
            Cześć, jestem Szymon, poszukuje swojego pierwszego doświadczenia we
            Frontendzie
          </h1>
          <p className="text-lg text-slate-700">
            Od około trzech lat tworzę aplikację internetowe. Zaczynałem od
            html, css i javascript, później zacząłem tworzyć w React i udało mi
            się stworzyć kilka mniejszych i większych projektów. Znam wiele
            bibliotek i koncepcji w React.Szukam pierwszego doświadczenia
            zawodowego i jestem gotowy do nauki i dużego zaangażowania
          </p>
          <Button
            endContent={<Download size={18} />}
            as={Link}
            href="/portfolio/cv.pdf"
            download="CV_szymon_krupa"
            size="lg"
            className="bg-violet-600 text-white lg:max-w-[300px]"
          >
            Pobierz CV
          </Button>
        </div>

        {/* right section side */}
        <div className="hidden lg:block">
          <img src={DesignerIllustration} alt="" />
        </div>
      </section>

      {/* projects section */}
      <Section id="projects">
        <SectionTitle className="ml-3">Moje projekty</SectionTitle>
        <CarouselWithProjects />
      </Section>

      {/* knowledge */}
      <section
        id="knowledge"
        className="flex flex-col lg:flex-row justify-between"
      >
        <div className="bg-lime-50 w-full lg:w-2/3 py-20 px-8 xl:px-32">
          <SectionTitle>Moje wiedza</SectionTitle>
          <div className="flex w-min flex-col gap-x-7 gap-y-2 flex-wrap max-h-[400px] lg:max-h-[300px]">
            <TechRate label="HTML" value={4} />
            <TechRate label="CSS" value={4} />
            <TechRate label="Javascript" value={4} />
            <TechRate label="React" value={4} />
            <TechRate label="Typescript" value={3} />
            <TechRate label="Sass" value={2} />
            <TechRate label="Styled Components" value={2} />
            <TechRate label="Tailwind" value={3} />
            <TechRate label="MUI" value={2} />
            <TechRate label="RWD" value={3} />
            <TechRate label="Git" value={2} />
          </div>
        </div>

        {/* contact and github */}
        <div className="w-full lg:w-1/3 flex flex-col gap-16 py-20 px-8 xl:px-32 bg-lime-100">
          <div id="contact">
            <SectionTitle>Kontakt</SectionTitle>
            <div className="flex gap-3 items-center text-xl text-slate-700">
              <Mail />
              <Link
                href="mailto:szymonkrupa762@gmail.com"
                className="text-lg text-slate-700"
              >
                szymonkrupa762@gmail.com
              </Link>
            </div>
          </div>
          <div>
            <SectionTitle>Mój github</SectionTitle>
            <div className="flex gap-3 items-center text-xl text-slate-700">
              <Github />
              <Link
                href="https://github.com/Szymi76"
                target="_blank"
                className="text-lg text-slate-700"
              >
                https://github.com/Szymi76
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
