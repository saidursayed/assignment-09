import React, { useEffect } from "react";
import SkillCard from "./SkillCard";
import AOS from "aos";
import "aos/dist/aos.css";


const PopularSkills = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div>
      <h2 className="text-center text-2xl md:text-3xl font-bold my-5 md:my-10">
       Explore Our Popular Courses
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((skill) => (
          <SkillCard skill={skill} key={skill.skillId}></SkillCard>
        ))}
      </div>
    </div>
  );
};

export default PopularSkills;
