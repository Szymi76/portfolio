import clsx from "clsx";
import { Project } from "@/types";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Github, ExternalLink } from "lucide-react";

type ProjectCardProps = Project;
export const ProjectCard = (props: ProjectCardProps) => {
  const { title, description, chips, repoURL, demoURL, imageURL } = props;

  return (
    <div className="flex flex-col gap-5 h-full bg-violet-100 border border-slate-300 w-fit rounded p-3 md:p-5">
      {/* main image container */}
      <div>
        <img
          src={`/${imageURL}`}
          alt="main website preview image"
          className="max-h-[400px] rounded"
        />
      </div>

      {/* under image data */}
      <div className="flex flex-col md:flex-row gap-5 justify-between flex-1">
        {/* title, description and chips */}
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-semibold">{title}</h3>
          <p className="text-slate-600 text-sm max-w-md">{description}</p>
          <div className="flex items-end flex-1">
            <div className="flex flex-wrap gap-1">
              {chips.map((chip) => {
                return (
                  <Chip className={clsx(chip.className)}>{chip.label}</Chip>
                );
              })}
            </div>
          </div>
        </div>

        {/* live and repo buttons */}
        <div className="flex flex-col justify-end gap-1 border-t border-slate-300 pt-5 md:border-t-0 md:pt-0">
          {demoURL && (
            <Button
              as={Link}
              href={demoURL}
              target="_blank"
              endContent={<ExternalLink size={18} />}
              className="bg-blue-500 text-white"
            >
              Live demo
            </Button>
          )}
          <Button
            as={Link}
            href={repoURL}
            target="_blank"
            endContent={<Github size={18} />}
            className="bg-black text-white"
          >
            Repozytorium
          </Button>
        </div>
      </div>
    </div>
  );
};
