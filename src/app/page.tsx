
import React from 'react';
import HomePage from '@/components/layounts/HomePage';
import Banner from "@/components/layounts/Banner"
import Group from "@/components/layounts/Group"
import ElectionInfo from '@/components/layounts/ElectionInfo';
import Services from '@/components/layounts/Services';
import Candidate from '@/components/layounts/Candidate';


const Home = () => {
  return (
   <>
   <HomePage/>
   <Banner/>
   <Group/>
   <ElectionInfo/>
   <Services/>
   <Candidate/>
   </>
  );
};

export default Home;
