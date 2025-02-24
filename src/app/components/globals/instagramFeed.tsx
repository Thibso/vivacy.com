"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import BlueButton from "../buttons/BlueButton";

type Post = {
  id: string;
  permalink: string;
  media_type: string;
  media_url: string;
  caption: string;
  thumbnail_url: string;
};

export default function InstagramFeed() {
  const t = useTranslations("Global.Instagram");
  const [posts, setPosts] = useState([]);

  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  useEffect(() => {
    fetch("/api/instagram")
      .then((res) => res.json())
      .then((data) => setPosts(data.data || []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section>
      <div className="myContainer max-w-[1440px] space-y-8 lg:space-y-16">
        <motion.h2
          initial={{
            opacity: 0,
            y: isMobile ? -50 : -80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            ease: "circOut",
            duration: 0.8,
          }}
          viewport={{
            amount: "all",
            once: true,
          }}
          className={`h3-perso text-center`}
        >
          {t("h2")}
        </motion.h2>

        <div className="space-y-8">
          <div>
            <a
              href="https://www.instagram.com/laboratoiresvivacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold"
            >
              @laboratoiresvivacy
            </a>
          </div>
          <div className="grid sm:grid-cols-4 gap-4">
            {posts.map((post: Post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-sm:max-w-[300px] max-sm:m-auto aspect-square h-auto relative"
              >
                {post.media_type === "IMAGE" ||
                post.media_type === "CAROUSEL_ALBUM" ? (
                  <img
                    src={post.media_url}
                    alt={post.caption || "Instagram Post"}
                    className="w-full h-full rounded-lg object-cover"
                  />
                ) : post.media_type === "VIDEO" ? (
                  <div className="relative w-full h-full">
                    <img
                      src={post.thumbnail_url}
                      alt={post.caption || "Instagram Post"}
                      className="absolute size-full rounded-lg object-cover z-[1]"
                    />

                    <svg
                      style={{ color: "rgba(255,255,255,1)" }}
                      className="svg-inline--fa fa-play fa-w-14 sbi_playbtn z-[2] absolute size-[48px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      aria-label="Play"
                      aria-hidden="true"
                      data-fa-processed=""
                      data-prefix="fa"
                      data-icon="play"
                      role="presentation"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                      ></path>
                    </svg>
                  </div>
                ) : null}
              </a>
            ))}
          </div>

          <div className="flex justify-center">
            <BlueButton
              path="https://www.instagram.com/laboratoiresvivacy/"
              blank={true}
              content={t("btn")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
