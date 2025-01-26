import React from "react";
import Hero from "./(sections)/Hero";
import ShowcaseSection from "./(sections)/ShowcaseSection";
import NewHeader from "./(sections)/NewHeader";
import SchedulingSection from "./(sections)/SchedulingSection";
import FeatureSection from "./(sections)/FeatureSection";
import ListSection from "./(sections)/ListSection";
import TestimonialSection from "./(sections)/TestimonialSection";
import ConnectionSection from "./(sections)/ConnectionSection";
import BottomSection from "./(sections)/BottomSection";
import Footer from "./(sections)/FooterSection";

const Home = () => {
  return (
    <div className=" bg-background-sec ">
      <NewHeader />
      <Hero />
      <ShowcaseSection />
      <SchedulingSection />
      <FeatureSection />
      <ListSection />
      <TestimonialSection />
      <ConnectionSection />
      <BottomSection />
      <Footer />
    </div>
  );
};

export default Home;
