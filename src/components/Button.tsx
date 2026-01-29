import { type ReactElement } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   kind?: "primary" | "secondary";
}

export default function Button(
   props: ButtonProps,
): ReactElement {
   const { kind, ...rest } = props;
   return (
      <button
         {...rest}
         className={`p-4 rounded-xl ${kind === "secondary" ? "bg-yellow-200" : "bg-purple-300"} ${rest.className ?? ""}`}
      />
   );
}
