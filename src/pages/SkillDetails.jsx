import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import SkillDetailsCard from "../components/SkillDetailsCard";

const SkillDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [skill, setSkill] = useState({});

  useEffect(() => {
    const skillDetails = data.find((singleSkill) => singleSkill.skillId == id);
    setSkill(skillDetails);
  }, [data, id]);

  return <SkillDetailsCard skill={skill}></SkillDetailsCard>;
};

export default SkillDetails;
