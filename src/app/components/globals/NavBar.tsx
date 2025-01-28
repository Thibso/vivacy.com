"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import logo from "../../img/logo-vivacy-white.png";
import LocalSwitcher from "../nav/LocalSwitcher";
import NavList from "../nav/NavList";

type Props = {
  localeActive: string;
};

export default function NavBar(props: Props) {
  const t = useTranslations("Navigation");

  const AboutProps = {
    title: t("about.title"),
    content: t("about.content"),
    items: [
      {
        id: t("about.items.item1.id"),
        title: t("about.items.item1.title"),
        path: t("about.items.item1.path"),
      },
      {
        id: t("about.items.item2.id"),
        title: t("about.items.item2.title"),
        path: t("about.items.item2.path"),
      },
      {
        id: t("about.items.item3.id"),
        title: t("about.items.item3.title"),
        path: t("about.items.item3.path"),
      },
      {
        id: t("about.items.item4.id"),
        title: t("about.items.item4.title"),
        path: t("about.items.item4.path"),
      },
    ],
    images: [
      t("about.images.1"),
      t("about.images.2"),
      t("about.images.3"),
      t("about.images.4"),
    ],
  };

  const InnovationsProps = {
    title: t("innovations.title"),
    content: t("innovations.content"),
    items: [
      {
        id: t("innovations.items.item1.id"),
        title: t("innovations.items.item1.title"),
        path: t("innovations.items.item1.path"),
      },
      {
        id: t("innovations.items.item2.id"),
        title: t("innovations.items.item2.title"),
        path: t("innovations.items.item2.path"),
      },
      {
        id: t("innovations.items.item3.id"),
        title: t("innovations.items.item3.title"),
        path: t("innovations.items.item3.path"),
      },
      {
        id: t("innovations.items.item4.id"),
        title: t("innovations.items.item4.title"),
        path: t("innovations.items.item4.path"),
      },
    ],
    images: [
      t("innovations.images.1"),
      t("innovations.images.2"),
      t("innovations.images.3"),
      t("innovations.images.4"),
    ],
  };

  const ProductsProps = {
    title: t("products.title"),
    content: t("products.content"),
    items: [
      {
        id: t("products.items.item1.id"),
        title: t("products.items.item1.title"),
        path: t("products.items.item1.path"),
      },
      {
        id: t("products.items.item2.id"),
        title: t("products.items.item2.title"),
        path: t("products.items.item2.path"),
      },
      {
        id: t("products.items.item3.id"),
        title: t("products.items.item3.title"),
        path: t("products.items.item3.path"),
      },
      {
        id: t("products.items.item4.id"),
        title: t("products.items.item4.title"),
        path: t("products.items.item4.path"),
      },
      {
        id: t("products.items.item5.id"),
        title: t("products.items.item5.title"),
        path: t("products.items.item5.path"),
      },
    ],
    images: [
      t("products.images.1"),
      t("products.images.2"),
      t("products.images.3"),
      t("products.images.4"),
      t("products.images.5"),
    ],
  };

  const ContactProps = {
    title: t("contact.title"),
    content: t("contact.content"),
    items: [
      {
        id: t("contact.items.item1.id"),
        title: t("contact.items.item1.title"),
        path: t("contact.items.item1.path"),
      },
      {
        id: t("contact.items.item2.id"),
        title: t("contact.items.item2.title"),
        path: t("contact.items.item2.path"),
      },
    ],
    images: [t("contact.images.1"), t("contact.images.2")],
  };

  // const ProfessionalsProps = {
  //   title: t("professionals.title"),
  //   content: t("professionals.content"),
  //   items: [
  //     {
  //       id: t("professionals.items.item1.id"),
  //       title: t("professionals.items.item1.title"),
  //       path: t("professionals.items.item1.path"),
  //     },
  //     {
  //       id: t("professionals.items.item2.id"),
  //       title: t("professionals.items.item2.title"),
  //       path: t("professionals.items.item2.path"),
  //     },
  //   ],
  //   images: [t("professionals.images.1"), t("professionals.images.2")],
  // };

  const Carreersprops = {
    title: t("carreers.title"),
    path: t("carreers.path"),
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-blue py-3 px-8 rounded-[44px] w-[97.5%] max-w-[1920px] sticky top-2 lg:top-8 mt-2 lg:mt-8 mx-auto h-16 flex z-50 -mb-[72px] lg:-mb-[96px]"
    >
      <div className="relative flex justify-between items-center w-full">
        <Link href={"/" + props.localeActive}>
          <Image
            src={logo}
            alt="Vivacy logo"
            height={25}
            className="object-contain w-fit block"
          />
        </Link>

        <NavList
          about={AboutProps}
          innovations={InnovationsProps}
          products={ProductsProps}
          // professionals={ProfessionalsProps}
          contact={ContactProps}
          carreers={Carreersprops}
        />

        <LocalSwitcher />
      </div>
    </motion.nav>
  );
}
