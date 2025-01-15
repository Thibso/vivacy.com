"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const useScrollY = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Fonction optimisée
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Ajout de l'écouteur au scroll
    window.addEventListener("scroll", handleScroll);

    // Nettoyage de l'écouteur lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollY;
};

export default function ToTopButton() {
  const scrollY = useScrollY();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`${
          scrollY > 1000 ? "opacity-100" : "opacity-0"
        } bg-blue p-2 fixed rounded-sm right-4 bottom-16 z-[99] shadow shadow-black/25 transition-all`}
      >
        <ChevronUp color="white" />
      </button>
    </>
  );
}
