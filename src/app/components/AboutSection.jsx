"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Particles from "./ParticlesComponent"; // Sesuaikan path impor dengan struktur direktori Anda


const TAB_DATA = [
  {
    title:"Skills",
    id:"skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScrip</li>
        <li>PHP</li>
        <li>Laravel</li>
        <li>React</li>
        <li>Node.js</li>
      </ul>
    )
  },
  {
    title:"Education",
    id:"education",
    content: (
      <ul className="list-disc pl-2">
        <li>SMK NEGERI 1 Gianyar</li>
        <li>INSTIKI Institut Bisnis dan Teknologi Indonesia</li>
      </ul>
    )
  },
  {
    title:"Certification",
    id:"certification",
    content: (
      <ul className="list-disc pl-2">
        <li>SMK NEGERI 1 Gianyar</li>
        <li>INSTIKI Institut Bisnis dan Teknologi Indonesia</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPedin, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/coding4.jpg" width={500} height={500}  alt="as"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About ME</h2>
          <p className="text-base lg:text-lg text-justify">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              {" "}
              Certification{" "}
            </TabButton>
          </div>
            <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
