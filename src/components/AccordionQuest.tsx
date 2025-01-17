"use client";
import { QuestionInterface } from "@/interface/";
import { Accordion, AccordionItem } from "@nextui-org/react";
const AnchorIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        aria-hidden="true"
        focusable="false"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
       
        strokeWidth={2.5}
        stroke="white"

        
      >
        <path d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
      </svg>
    );
  };
  
const AccordionQuest: React.FC<QuestionInterface> = ({ Question, Answer }) => {
  return (
    <Accordion selectionMode="multiple">
      <AccordionItem
        key="1"
        aria-label="1"
        title={<div className="mx-6 truncate text-white">{Question}</div>}
        className="border-[#634AE2] rounded-2xl bg-[#634AE2] "
        indicator={
          <div className="mx-6 truncate">
            <AnchorIcon />
          </div>
        }
      >
        <div className="bg-white text-[#634AE2] mx-2 rounded-xl p-5">
          {Answer}
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionQuest;
