import React from 'react';
import HeroSlider from '../components/HeroSlider';
import { useLoaderData } from 'react-router';
import PopularSkills from '../components/PopularSkills';
import TopRatedInstructors from '../components/TopRatedInstructors';
import HowItWorks from '../components/HowItWorks';
import LearnSkillswap from '../components/LearnSkillswap';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <HeroSlider data={data}></HeroSlider>
            <PopularSkills data={data}></PopularSkills>
            <TopRatedInstructors data={data}></TopRatedInstructors>
            <HowItWorks></HowItWorks>
            <LearnSkillswap></LearnSkillswap>
        </div>
    );
};

export default Home;