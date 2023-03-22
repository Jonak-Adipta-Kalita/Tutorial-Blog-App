import { NavbarProps } from "sanity";
import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const StudioNavbar = (props: NavbarProps) => {
  return (
    <div>
      <div className="flex items-center justify-center p-5">
        <Link href="/" className="text-[#F7AB0A] flex items-center">
          <ArrowUturnLeftIcon className="h-6 text-[#F7AB0A] mr-2 w-6" />
          Go to the Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
