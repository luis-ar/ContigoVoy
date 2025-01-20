"use client";


import ChooseUs from "@/components/main/chooseUs";
import TherapyServices from "@/components/main/therapyServices";
import OnlinePsychology from "@/components/main/onlinePsychology";
import AnimatedText from "@/components/AnimatedText";
import About from "@/components/About";
import SmallAnimatedText from "@/components/SmallAnimatedText";
import Probar from "@/components/NewSlider";

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
