import { PinIcon } from "@/public/assets/assets";
import { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface PracticeProps {
  title?: string;
  objective: string;
  instructions: (string | ReactNode)[];
  extraContentBelow?: ReactNode;
  className?: string;
}

export default function Practice({ title, objective, instructions, extraContentBelow, className }: PracticeProps) {
  return (
    <div className={cn('flex flex-col items-start justify-center w-full', className)}>
      {title ? (
        <h1 className='text-[1.1rem] font-medium pb-3'>{title}</h1>
      ) : null}
      <div className='flex flex-col items-start justify-center w-full pb-2'>
        <div className='flex items-center justify-start gap-2 w-full'>
          <PinIcon strokeWidth={2} width={20} height={20} />
          <h2>{objective}</h2>
        </div>
        <ul className='flex flex-col items-start justify-center list-decimal list-inside py-3 gap-1'>
          {instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
      {extraContentBelow}
    </div>
  );
}