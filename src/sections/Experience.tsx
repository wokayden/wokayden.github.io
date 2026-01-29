import { type ReactElement } from "react";
import { FaDownload } from "react-icons/fa";
import { Button, Card } from "../components";

export default function Experience(): ReactElement {
   return (
      <section className='pt-24 pb-24 pl-40 pr-40 bg-lime-200'>
         <div className='felx flex-col'>
            <div className='pt-12 pb-12'>
               <h1 className='w-max text-5xl'>
                  experience
               </h1>
            </div>
            <div className='flex pt-12 pb-12 justify-evenly items-center'>
               <Button>
                  <span className='flex justify-center gap-3'>
                     <FaDownload />
                     <span>resume</span>
                  </span>
               </Button>
               <div className='flex flex-col gap-4'>
                  <Card
                     cardTitle={`DirectDefense`}
                     cardContent={`providing over 4 years of
                        experience transforming
                        legacy systems`}
                  />
                  <Card />
               </div>
            </div>
         </div>
      </section>
   );
}
