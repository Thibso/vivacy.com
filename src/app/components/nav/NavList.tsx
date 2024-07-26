import { useTranslations } from "next-intl";
import NavItem from "./NavItem";

export default function NavList() {
  const t = useTranslations("Navigation");
  return (
    <ul className="text-white flex gap-8 justify-around w-full max-w-[80%] ">
      <NavItem
        title={t("about.title")}
        path="#"
        content={t("about.content")}
        items={[
          t("about.items.item1"),
          t("about.items.item2"),
          t("about.items.item3"),
          t("about.items.item4"),
          t("about.items.item5"),
        ]}
      />
    </ul>
  );
}
