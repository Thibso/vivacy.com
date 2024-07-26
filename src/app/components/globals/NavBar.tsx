import Image from "next/image";
import React from "react";
import logo from "../../img/logo-vivacy-white.png";
import LocalSwitcher from "./LocalSwitcher";

export default function NavBar() {
  return (
    <nav className="bg-black p-4">
      <Image
        src={logo}
        alt="Vivacy logo"
        // width={500} automatically provided
        // height={500} automatically provided
      />
      <LocalSwitcher />
    </nav>
  );
}
