import { type ReactElement } from "react";
import { Button } from "../components";

export default function Splash(): ReactElement {
   return (
      <main className='p-24 bg-blue-300'>
         <div className='flex w-full justify-evenly items-center'>
            <div className='bg-red-50 p-16 rounded-full min-h-100 flex items-center'>
               <div className='w-max h-max'>
                  an image will go here
               </div>
            </div>
            <div className='w-max flex flex-col'>
               <h1 className='w-max p-4 text-7xl'>
                  some big text
               </h1>
               <p className='w-max p-4'>
                  some smaller text
               </p>
               <Button
                  className='w-max mt-4 ml-2'
                  kind='secondary'
               >
                  a call to action
               </Button>
            </div>
         </div>
      </main>
   );
}
