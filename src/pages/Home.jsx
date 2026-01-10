import React from 'react';
import HeroSlider from '../components/HeroSlider';
import { useLoaderData } from 'react-router';
import PopularSkills from '../components/PopularSkills';
import TopRatedInstructors from '../components/TopRatedInstructors';

const Home = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div>
            <HeroSlider></HeroSlider>
            <PopularSkills data={data}></PopularSkills>
            <TopRatedInstructors data={data}></TopRatedInstructors>
        </div>
    );
};

export default Home;