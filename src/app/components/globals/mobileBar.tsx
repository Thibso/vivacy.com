import { ArrowDownToLine, Newspaper, NotebookTabs } from "lucide-react";

export default function MobileBar() {
  return (
    <div className="md:hidden bg-blue flex gap-x-8 sticky bottom-0 left-0 right-0 h-[50px] z-[999] justify-center items-center">
      <div className="text-white text-[12px] leading-none">
        <a href="" className="flex flex-col items-center gap-y-1">
          <Newspaper color="white" />
          <span>Newsletter</span>
        </a>
      </div>

      <div className="text-white text-[12px] leading-none">
        <a href="" className="flex flex-col items-center gap-y-1">
          <NotebookTabs color="white" />
          <span>Contact</span>
        </a>
      </div>

      <div className="text-white text-[12px] leading-none">
        <a href="" className="flex flex-col items-center gap-y-1">
          <ArrowDownToLine color="white" />
          <span>Viacy App</span>
        </a>
      </div>
    </div>
  );
}
