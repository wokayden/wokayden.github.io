import { type ReactElement } from "react";
import { FaDownload } from "react-icons/fa";

export default function Experience(): ReactElement {
   return (
      <section className='pt-24 pb-24 pl-40 pr-40 bg-lime-200'>
         <div className='felx flex-col'>
            <div className='pt-12 pb-12'>
               <h1 className='w-max text-5xl'>
                  qualifications
               </h1>
            </div>
            <div className='flex pt-12 pb-12 justify-evenly items-center'>
               <button className='bg-purple-300 p-4 rounded-xl'>
                  <span className='flex justify-center gap-3'>
                     <FaDownload />
                     <span>resume</span>
                  </span>
               </button>
               <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-4 p-4 border border-black rounded-xl'>
                     <h1 className='text-2xl'>
                        directdefense
                     </h1>
                     <p className='h-max'>
                        providing over 4 years of
                        experience transforming
                        legacy systems
                     </p>
                  </div>
                  <div className='flex flex-col gap-4 p-4 border border-black rounded-xl'></div>
               </div>
            </div>
         </div>
      </section>
   );
}
