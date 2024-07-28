import React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import PosterComponent from '../components/poster';
import Slider from '../components/slider';
import ProfileCard from '../components/profilecard';
import FooterComponent from '../components/footer';
import FeesTable from '../components/feestable';

const Admission = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <PosterComponent />
      <Slider />
      <ProfileCard />
      <FooterComponent />
      <FeesTable />
    </div>
  );
}

export default Admission;