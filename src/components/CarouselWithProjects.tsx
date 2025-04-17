import Carousel, { DotProps, ButtonGroupProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const responsive = {
  desktop: {
    breakpoint: { max: 4096, min: 1780 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1780, min: 1050 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 1050, min: 0 },
    items: 1,
  },
};

import { projects } from "../projects";
import { ProjectCard } from "./ProjectCard";

const CarouselWithProjects = () => {
  return (
    <div className="relative">
      <Carousel
        responsive={responsive}
        showDots
        dotListClass="-bottom-10"
        renderDotsOutside
        itemClass="flex items-center justify-center"
        customDot={<CustomDot />}
        removeArrowOnDeviceType={["mobile"]}
        customButtonGroup={<CustomArrows />}
        renderButtonGroupOutside
        arrows={false}
      >
        {projects.map((project) => {
          return (
            <div className="h-full p-3">
              <ProjectCard {...project} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselWithProjects;

const CustomDot = (props: DotProps) => {
  const { onClick, active } = props;
  return (
    <button
      className={`h-3 w-3 mx-0.5 rounded-full duration-75 ${active ? "bg-violet-500" : "bg-slate-300 hover:bg-violet-300"}`}
      onClick={onClick}
    ></button>
  );
};

const CustomArrows = (props: ButtonGroupProps) => {
  return (
    <>
      <div
        onClick={props.previous}
        className="absolute left-7 xl:-left-12 bg-black/50 xl:bg-black/10 text-white xl:text-black p-1 top-1/3 xl:top-1/2 -translate-y-1/2 rounded-full cursor-pointer hover:bg-black/30 duration-75 active:scale-90"
      >
        <ChevronLeft size={36} />
      </div>
      <div
        onClick={props.next}
        className="absolute right-7 xl:-right-12 bg-black/50 xl:bg-black/10 text-white xl:text-black p-1 top-1/3 xl:top-1/2 -translate-y-1/2 rounded-full cursor-pointer hover:bg-black/30 duration-75 active:scale-90"
      >
        <ChevronRight size={36} />
      </div>
    </>
  );
};
