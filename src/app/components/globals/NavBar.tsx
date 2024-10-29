import Image from "next/image";
import Link from "next/link";
import logo from "../../img/logo-vivacy-white.png";
import LocalSwitcher from "../nav/LocalSwitcher";
import NavList from "../nav/NavList";

type Props = {
  localeActive: string;
};

export default function NavBar(props: Props) {
  return (
    <nav className="bg-blue py-3 px-8 rounded-[44px] w-[97.5%] max-w-[1920px] sticky top-8 mt-8 mx-auto h-16 flex z-50 -mb-[96px]">
      <div className="relative flex justify-between items-center w-full">
        <Link href={"/" + props.localeActive}>
          <Image
            src={logo}
            alt="Vivacy logo"
            height={23}
            style={{
              objectFit: "contain",
            }}
          />
        </Link>

        <NavList />

        <LocalSwitcher />
      </div>
    </nav>
  );
}
