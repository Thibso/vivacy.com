"use client";

import bgVivacy from "@/app/img/vivacy-laboratories-hyaluronic-acid-france.png";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../img/logo-vivacy-white.png";
import MobileNavItem from "./MobileNavItem";
import NavItem from "./NavItem";

type Item = {
  id: string;
  title: string;
  path: string;
};

type Props = {
  about: {
    title: string;
    content: string;
    items: Item[];
    images: string[];
  };
  innovations: {
    title: string;
    content: string;
    items: Item[];
    images: string[];
  };
  products: {
    title: string;
    content: string;
    items: Item[];
    images: string[];
  };
  // professionals: {
  //   title: string;
  //   content: string;
  //   items: Item[];
  //   images: string[];
  // };
  contact: {
    title: string;
    content: string;
    items: Item[];
    images: string[];
  };
  carreers: {
    title: string;
  };
};

export default function NavList(props: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <ul className="max-lg:hidden text-white flex gap-12 justify-around w-full max-w-[1200px] ">
        <NavItem
          title={props.about.title}
          path="#"
          content={props.about.content}
          items={[
            [
              props.about.items[0].id,
              props.about.items[0].title,
              props.about.items[0].path,
            ],
            [
              props.about.items[1].id,
              props.about.items[1].title,
              props.about.items[1].path,
            ],
            [
              props.about.items[2].id,
              props.about.items[2].title,
              props.about.items[2].path,
            ],
            [
              props.about.items[3].id,
              props.about.items[3].title,
              props.about.items[3].path,
            ],
          ]}
          images={[
            props.about.images[0],
            props.about.images[1],
            props.about.images[2],
            props.about.images[3],
          ]}
        />

        <NavItem
          title={props.innovations.title}
          path="#"
          content={props.innovations.content}
          items={[
            [
              props.innovations.items[0].id,
              props.innovations.items[0].title,
              props.innovations.items[0].path,
            ],
            [
              props.innovations.items[1].id,
              props.innovations.items[1].title,
              props.innovations.items[1].path,
            ],
            [
              props.innovations.items[2].id,
              props.innovations.items[2].title,
              props.innovations.items[2].path,
            ],
            [
              props.innovations.items[3].id,
              props.innovations.items[3].title,
              props.innovations.items[3].path,
            ],
          ]}
          images={[
            props.innovations.images[0],
            props.innovations.images[1],
            props.innovations.images[2],
            props.innovations.images[3],
          ]}
        />

        <NavItem
          title={props.products.title}
          path="#"
          content={props.products.content}
          items={[
            [
              props.products.items[0].id,
              props.products.items[0].title,
              props.products.items[0].path,
            ],
            [
              props.products.items[1].id,
              props.products.items[1].title,
              props.products.items[1].path,
            ],
            [
              props.products.items[2].id,
              props.products.items[2].title,
              props.products.items[2].path,
            ],
          ]}
          images={[
            props.products.images[0],
            props.products.images[1],
            props.products.images[2],
          ]}
        />

        {/* <NavItem
          title={props.professionals.title}
          path="#"
          content={props.professionals.content}
          items={[
            [
              props.professionals.items[0].id,
              props.professionals.items[0].title,
              props.professionals.items[0].path,
            ],
            [
              props.professionals.items[1].id,
              props.professionals.items[1].title,
              props.professionals.items[1].path,
            ],
          ]}
          images={[
            props.professionals.images[0],
            props.professionals.images[1],
          ]}
        /> */}

        <li>
          <a
            className="hover:underline uppercase font-light text-base cursor-pointer"
            href={props.products.items[3].path}
          >
            {props.products.items[3].title}
          </a>
        </li>

        <NavItem
          title={props.contact.title}
          path="#"
          content={props.contact.content}
          items={[
            [
              props.contact.items[0].id,
              props.contact.items[0].title,
              props.contact.items[0].path,
            ],
            [
              props.contact.items[1].id,
              props.contact.items[1].title,
              props.contact.items[1].path,
            ],
          ]}
          images={[props.contact.images[0], props.contact.images[1]]}
        />

        <li>
          <a
            className="hover:underline uppercase font-light text-base"
            href="https://careers.werecruit.io/fr/vivacy"
            target="_blank"
          >
            {props.carreers.title}
          </a>
        </li>
      </ul>

      <div className="block lg:hidden">
        <Menu
          color="white"
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer"
        />

        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0, bottom: "500px" }}
              animate={{ opacity: 1, bottom: "64px" }}
              exit={{ opacity: 0, bottom: "500px" }}
              className={`fixed flex flex-col top-2 left-[1.25%] right-[1.25%] bg-blue rounded-[44px] px-8 py-5`}
            >
              <Image
                src={bgVivacy}
                alt="Vivacy"
                fill
                className="absolute size-full object-cover -z-[1] invert opacity-5"
              />
              <div className="flex justify-between">
                <Link href={"/"}>
                  <Image
                    src={logo}
                    alt="Vivacy logo"
                    height={25}
                    className="object-contain w-fit block -mt-[4px]"
                  />
                </Link>

                <X
                  color="white"
                  onClick={() => setIsOpen(!isOpen)}
                  className="cursor-pointer"
                />
              </div>

              <ul className="text-white my-8 flex flex-col gap-y-4 max-h-[70vh] overflow-scroll">
                <MobileNavItem
                  title={props.about.title}
                  items={[
                    [
                      props.about.items[0].id,
                      props.about.items[0].title,
                      props.about.items[0].path,
                    ],
                    [
                      props.about.items[1].id,
                      props.about.items[1].title,
                      props.about.items[1].path,
                    ],
                    [
                      props.about.items[2].id,
                      props.about.items[2].title,
                      props.about.items[2].path,
                    ],
                    [
                      props.about.items[3].id,
                      props.about.items[3].title,
                      props.about.items[3].path,
                    ],
                  ]}
                />

                <MobileNavItem
                  title={props.innovations.title}
                  items={[
                    [
                      props.innovations.items[0].id,
                      props.innovations.items[0].title,
                      props.innovations.items[0].path,
                    ],
                    [
                      props.innovations.items[1].id,
                      props.innovations.items[1].title,
                      props.innovations.items[1].path,
                    ],
                    [
                      props.innovations.items[2].id,
                      props.innovations.items[2].title,
                      props.innovations.items[2].path,
                    ],
                    [
                      props.innovations.items[3].id,
                      props.innovations.items[3].title,
                      props.innovations.items[3].path,
                    ],
                  ]}
                />

                <MobileNavItem
                  title={props.products.title}
                  items={[
                    [
                      props.products.items[0].id,
                      props.products.items[0].title,
                      props.products.items[0].path,
                    ],
                    [
                      props.products.items[1].id,
                      props.products.items[1].title,
                      props.products.items[1].path,
                    ],
                    [
                      props.products.items[2].id,
                      props.products.items[2].title,
                      props.products.items[2].path,
                    ],
                  ]}
                />

                {/* <MobileNavItem
                  title={props.professionals.title}
                  items={[
                    [
                      props.professionals.items[0].id,
                      props.professionals.items[0].title,
                      props.professionals.items[0].path,
                    ],
                    [
                      props.professionals.items[1].id,
                      props.professionals.items[1].title,
                      props.professionals.items[1].path,
                    ],
                  ]}
                /> */}

                <li>
                  <a
                    className="uppercase text-lg cursor-pointer"
                    href={props.products.items[3].path}
                  >
                    {props.products.items[3].title}
                  </a>
                </li>

                <MobileNavItem
                  title={props.contact.title}
                  items={[
                    [
                      props.contact.items[0].id,
                      props.contact.items[0].title,
                      props.contact.items[0].path,
                    ],
                    [
                      props.contact.items[1].id,
                      props.contact.items[1].title,
                      props.contact.items[1].path,
                    ],
                  ]}
                />

                <li>
                  <a
                    className="uppercase text-lg cursor-pointer"
                    href="https://careers.werecruit.io/fr/vivacy"
                    target="_blank"
                  >
                    {props.carreers.title}
                  </a>
                </li>
              </ul>

              {/* <div className="text-white mx-auto mt-auto mb-0">
                <Link href={"/en"} className=" underline text-base">
                  English
                </Link>
                <span> | </span>
                <Link href={"/fr"} className=" underline text-base">
                  Français
                </Link>
              </div> */}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
