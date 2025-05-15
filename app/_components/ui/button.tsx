import { poppins } from "@/app/shared/fonts/fonts";
import Link from "next/link";
import React from "react";
interface Props {
  href: string;
  isDark: boolean;
  value: string;
}
const Button = ({ href, isDark, value }: Props) => {
  return (
    <Link
      href={href}
      title={`go to ${value} section`}
      className={`border rounded-xl ${
        poppins.className
      } font-medium transition-colors duration-500 px-3 py-2 cursor-pointer text-sm lg:text-base ${
        isDark
          ? "text-white bg-black hover:text-black hover:bg-white "
          : "text-black bg-white hover:text-white hover:bg-black"
      }`}
    >
      {value}
    </Link>
  );
};

export default React.memo(Button);
