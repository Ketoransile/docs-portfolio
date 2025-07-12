"use client";

import * as React from "react";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        whileHover={{ y: 0 }}
        className="w-full mx-auto"
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="shadow-xl border border-muted transition-shadow duration-300">
          <CardHeader className="h-[150px]">
            <CardTitle className="pb-2 text-center">{project.title}</CardTitle>
            <CardDescription className="pb-2 text-center">
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center gap-2 max-lg:mt-4">
              {project.iconLists.map((icon, index) => (
                <Image
                  src={icon}
                  width={100}
                  height={100}
                  alt="icon-image"
                  key={index}
                  className="w-6 h-6 rounded-full"
                />
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="mt-6 rounded-lg overflow-hidden"
            >
              <Link href={project.liveLink}>
                <Image
                  src={project.img}
                  width={1000}
                  height={1000}
                  alt="project-image"
                  className="rounded-lg"
                />
              </Link>
            </motion.div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href={project.liveLink} target="_blank">
              <Button
                variant="outline"
                className="flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <FaLink size={16} />
                Live Preview
              </Button>
            </Link>
            <Link href={project.githubLink} target="_blank">
              <Button className="flex items-center gap-2 hover:scale-105 transition-transform">
                <FaGithub size={16} />
                Github Link
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
}
