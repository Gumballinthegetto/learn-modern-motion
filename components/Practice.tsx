import { PinIcon2 } from "@/public/assets/assets";
import { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { SectionPagination } from "./pagination/SectionPagination";
import { navigationConfig } from "@/config/navigation";

type NavigationKey = keyof typeof navigationConfig;

interface PracticeProps {
  title: string;
  objective: string;
  instructions: (string | ReactNode)[];
  extraContentBelow?: ReactNode;
  navLinkType: NavigationKey;
  className?: string;
}

export default function Practice({ title, objective, instructions, extraContentBelow, navLinkType, className }: PracticeProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col items-start justify-center w-full pt-2',
        "md:flex md:flex-row md:gap-10 md:min-h-[62vh]",
        className,
    )}>
      <div className='flex flex-col items-start justify-center w-full pb-2'>
        <h1 className='text-[1.3rem] md:text-[1.6rem] font-medium pb-3'>{title}</h1>
        <div className='flex items-center justify-between w-full gap-4 rounded-lg border px-4 py-4'>
          <h2 className="text-[1rem]">{objective}</h2>
          <PinIcon2 className="min-w-[30px] min-h-[30px] transform rotate-45 origin-center" strokeWidth={2} width={30} height={30} />
        </div>
        <ul className='flex flex-col items-start justify-center list-decimal list-inside py-3 gap-3 md:gap-4'>
          {instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
        <div className="absolute bottom-0 w-[48%]">
          <SectionPagination
            className="hidden md:flex"
            variant={navLinkType}
          />
        </div>
      </div>
      {extraContentBelow}
    </div>
  );
}