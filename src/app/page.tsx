"use client";


import ChooseUs from "@/components/main/chooseUs";
import TherapyServices from "@/components/main/therapyServices";
import OnlinePsychology from "@/components/main/onlinePsychology";
import About from "@/components/About";

export default function Home() {
  
  return (
    <div className="min-h-screen">
       <About/>
      <TherapyServices />
      <ChooseUs />
      <OnlinePsychology />
    </div>
  );
}
