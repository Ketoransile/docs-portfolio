"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa6";
import Link from "next/link";
import { Project } from "@/app/projects/page";

export function ProjectsCard({ project }: { project: Project }) {
  return (
    <div className="w-full mx-auto">
      <Card className="shadow-xl border border-muted transition-shadow duration-300">
        <CardHeader className="h-[150px]">
          <CardTitle className="pb-2 text-center">{project.title}</CardTitle>
          <CardDescription className="pb-2 text-center">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center gap-2 max-lg:mt-4">
            {project.tech.map((icon, index) => (
              <Image
                src={icon}
                width={100}
                height={100}
                alt="tech-icon"
                key={index}
                className="w-6 h-6 rounded-full"
              />
            ))}
          </div>

          <div className="mt-6 rounded-lg overflow-hidden">
            {project.live && (
              <Link href={project.live}>
                <Image
                  src={project.img}
                  width={1000}
                  height={1000}
                  alt="project-image"
                  className="rounded-lg"
                />
              </Link>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          {project.live && (
            <Link href={project.live} target="_blank">
              <Button
                variant="outline"
                className="flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <FaLink size={16} />
                Live Preview
              </Button>
            </Link>
          )}
          {project.github && (
            <Link href={project.github} target="_blank">
              <Button className="flex items-center gap-2 hover:scale-105 transition-transform">
                <FaGithub size={16} />
                Github Link
              </Button>
            </Link>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
