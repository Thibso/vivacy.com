import vivacyLogo from "@/app/img/vivacy-laboratories-hyaluronic-acid-france.png";
import { Metadata } from "next";
import Image from "next/image";
import NavBar from "./components/globals/NavBar";
import Footer from "./components/globals/footer";

// META DATAS
export const metadata: Metadata = {
  title: "Error 404 | Vivacy",
  description: "",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="border-blue border-b-[1px]">
      <NavBar localeActive={"en"} />

      <section className="relative bg-[#fafbfc] z-[2] myContainer min-h-[50vh] md:min-h-[100vh] flex flex-col items-center justify-center space-y-6">
        <Image
          src={vivacyLogo}
          alt="Vivacy"
          quality={75}
          style={{
            objectFit: "contain",
            zIndex: "-1",
            bottom: "0",
            left: 0,
            position: "absolute",
            opacity: 0.02,
          }}
          className="w-full lg:w-[50%] h-auto"
          priority
        />

        <h1 className="h3-perso">Damn internet!</h1>
        <p className="lg:text-lg text-center">
          It seems that the page you want to visit no longer exists.
          <br /> But don't worry! We'll take you home.
        </p>
        <a href="/en" className="lg:text-lg hover:text-blue underline">
          Return to the home page
        </a>
      </section>

      <Footer />
    </main>
  );
}
