import { type ReactElement } from "react";

interface CardProps extends React.AllHTMLAttributes<HTMLElement> {
   cardTitle?: string | ReactElement;
   cardContent?: string | ReactElement;
}

export default function Card(
   props: CardProps,
): ReactElement {
   const { cardTitle, cardContent, ...rest } =
      props;
   return (
      <div
         {...rest}
         className={`flex flex-col gap-4 p-4 border border-black rounded-xl ${props.className ?? ""}`}
      >
         {cardTitle && (
            <h1 className='text-2xl'>
               {cardTitle}
            </h1>
         )}
         {cardContent && (
            <p className='h-max'>{cardContent}</p>
         )}
      </div>
   );
}
