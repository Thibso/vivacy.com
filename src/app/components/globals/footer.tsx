import facebook from "@/app/img/social-medias/facebook.png";
import instagram from "@/app/img/social-medias/instagram.png";
import linkedin from "@/app/img/social-medias/linkedin.png";
import twitter from "@/app/img/social-medias/twitter.png";
import youtube from "@/app/img/social-medias/youtube.png";
import logo from "@/app/img/vivacy-logo-official.png";
import map from "@/app/img/world-map.png";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="sticky bottom-0 z-[1] pt-8 lg:pt-20">
      <div className="px-5 lg:px-20 lg:grid lg:grid-cols-3">
        <div className="grid grid-cols-2 lg:gap-x-8 sm:w-[60%] lg:w-full sm:mx-auto sm:text-center lg:text-left">
          <div className="space-y-4">
            <h4 className="text-blue uppercase">{t("vivacy.title")}</h4>
            <ul className="space-y-2">
              <li className="cursor-pointer">
                <a className="block" href={t("vivacy.links.vivacyAcademy")}>
                  {t("vivacy.content.vivacyAcademy")}
                </a>
              </li>
              <li>
                <a href={t("vivacy.links.vivacyBeauty")}>
                  {t("vivacy.content.vivacyBeauty")}
                </a>
              </li>
              <li>
                <a href={t("vivacy.links.desirial")}>
                  {t("vivacy.content.desirial")}
                </a>
              </li>
              <li>
                <a href={t("vivacy.links.desirialPlus")}>
                  {t("vivacy.content.desirialPlus")}
                </a>
              </li>
              <li>
                <a href={t("vivacy.links.stylage")}>
                  {t("vivacy.content.stylage")}
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-blue uppercase">{t("contact.title")}</h4>
            <ul className="space-y-2">
              <li>
                <a href={t("contact.links.blog")}>
                  {t("contact.content.blog")}
                </a>
              </li>
              <li>
                <a href={t("contact.links.faq")}>{t("contact.content.faq")}</a>
              </li>
              <li>
                <a href={t("contact.links.contact")}>
                  {t("contact.content.contact")}
                </a>
              </li>
              <li>
                <a href={t("contact.links.newsletter")}>
                  {t("contact.content.newsletter")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <Image
            src={logo}
            alt=""
            className="max-lg:hidden w-auto h-[100px] mx-auto"
          />
        </div>

        <div>
          <Image
            src={map}
            alt=""
            className="max-sm:w-[100%] max-lg:w-[70%] max-lg:mx-auto"
          />
        </div>
      </div>

      <div className="flex gap-x-6 justify-center pb-8 lg:pb-24">
        <a href={t("socials.instagram")}>
          <Image src={instagram} alt="" className="size-8 object-contain" />
        </a>
        <a href={t("socials.facebook")}>
          <Image src={facebook} alt="" className="size-8 object-contain" />
        </a>
        <a href={t("socials.linkedin")}>
          <Image src={linkedin} alt="" className="size-8 object-contain" />
        </a>
        <a href={t("socials.twitter")}>
          <Image src={twitter} alt="" className="size-8 object-contain" />
        </a>
        <a href={t("socials.youtube")}>
          <Image src={youtube} alt="" className="size-8 object-contain" />
        </a>
      </div>

      <div className="bg-blue px-8 py-3 text-white flex max-lg:flex-wrap justify-center gap-2 lg:gap-x-8">
        <span>{t("legals.copyright")}</span>
        <a href={t("legals.notice_link")}>{t("legals.notice")}</a>
        <a href={t("legals.confidentiality_link")}>
          {t("legals.confidentiality")}
        </a>
      </div>
    </footer>
  );
}
