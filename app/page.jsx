import React from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";
import connectDB from "@/config/database";
const HomePage = () => {
  
  return (
    <div>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
      <h1 className="text-3xl">Welcome</h1>
      <Link href="/properties">Show Properties</Link>
    </div>
  );
};

export default HomePage;
