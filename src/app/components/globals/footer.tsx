import facebook from "@/app/img/social-medias/facebook.png";
import instagram from "@/app/img/social-medias/instagram.png";
import linkedin from "@/app/img/social-medias/linkedin.png";
import youtube from "@/app/img/social-medias/youtube.png";
import logo from "@/app/img/vivacy-logo-official.png";
import map from "@/app/img/world-map.png";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="lg:sticky lg:bottom-0 z-[1] pt-8 lg:pt-20">
      <div className="px-5 lg:px-20 xl:px-24 lg:grid lg:grid-cols-3">
        <div className="grid grid-cols-2 lg:gap-x-8 sm:w-[60%] lg:w-full sm:mx-auto sm:text-center lg:text-left">
          <div className="space-y-4">
            <h4 className="text-blue uppercase">{t("vivacy.title")}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  className="block hover:underline"
                  href={t("vivacy.links.stylage")}
                >
                  {t("vivacy.content.stylage")}
                </a>
              </li>

              <li className="cursor-pointer">
                <a
                  className="block hover:underline"
                  href={t("vivacy.links.vivacyAcademy")}
                >
                  {t("vivacy.content.vivacyAcademy")}
                </a>
              </li>
              <li>
                <a
                  className="block hover:underline"
                  href={t("vivacy.links.desirial")}
                >
                  {t("vivacy.content.desirial")}
                </a>
              </li>
              <li>
                <a
                  className="block hover:underline"
                  href={t("vivacy.links.desirial")}
                >
                  {t("vivacy.content.desirialPlus")}
                </a>
              </li>
              <li>
                <a
                  className="block hover:underline"
                  href={t("vivacy.links.vivacyBeauty")}
                >
                  {t("vivacy.content.vivacyBeauty")}
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-blue uppercase">{t("contact.title")}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  className="block hover:underline"
                  href={t("contact.links.contact")}
                >
                  {t("contact.content.contact")}
                </a>
              </li>
              <li>
                <a
                  className="block hover:underline"
                  href={t("contact.links.clinic")}
                >
                  {t("contact.content.clinic")}
                </a>
              </li>
              <li>
                <a
                  className="block hover:underline"
                  href={t("contact.links.carreers")}
                  target="_blank"
                >
                  {t("contact.content.carreers")}
                </a>
              </li>
              <li>
                <a
                  className="block hover:underline"
                  href={t("legals.notice_link")}
                >
                  {t("legals.notice")}
                </a>
              </li>
              <li>
                <a
                  className="block hover:underline"
                  href={t("legals.confidentiality_link")}
                >
                  {t("legals.confidentiality")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <Image
            src={logo}
            alt={t("vivacy.logoAlt")}
            className="max-lg:hidden w-auto lg:h-[50px] xl:h-[75px] mx-auto"
          />
        </div>

        <div>
          <Image
            src={map}
            alt={t("vivacy.mapAlt")}
            className="max-sm:w-[100%] max-lg:w-[70%] max-lg:mx-auto"
          />
        </div>
      </div>

      <div className="flex gap-x-6 justify-center pb-8 lg:pb-20">
        <a href={t("socials.instagram")} target="_blank">
          <Image
            src={instagram}
            alt="Instagram"
            className="size-8 object-contain"
          />
        </a>
        <a href={t("socials.facebook")} target="_blank">
          <Image
            src={facebook}
            alt="Facebook"
            className="size-8 object-contain"
          />
        </a>
        <a href={t("socials.linkedin")} target="_blank">
          <Image
            src={linkedin}
            alt="Linkedin"
            className="size-8 object-contain"
          />
        </a>
        <a href={t("socials.youtube")} target="_blank">
          <Image
            src={youtube}
            alt="Youtube"
            className="size-8 object-contain"
          />
        </a>
      </div>

      <div className="bg-blue px-5 lg:px-20 xl:px-24 py-2 text-white flex justify-between max-lg:flex-wrap w-full gap-2 lg:gap-x-8 text-[10px]">
        <span>{t("legals.copyright")}</span>
        <a className="hover:underline" href={t("legals.author_link")}>
          {t("legals.author")}
        </a>
      </div>
    </footer>
  );
}
