import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import AccordionItem from "./accordionItem";

type Props = {
  europe: ReactNode;
  asia: ReactNode;
  africa: ReactNode;
  northAmerica: ReactNode;
  southAmerica: ReactNode;
  oceania: ReactNode;
};

export default function Accordion(props: Props) {
  const t = useTranslations("Map");

  return (
    <div className="lg:w-[80%] mx-auto">
      <AccordionItem
        title={t(`distribution.titles.europe`)}
        content={props.europe}
      />
      <AccordionItem
        title={t(`distribution.titles.asia`)}
        content={props.asia}
      />
      <AccordionItem
        title={t(`distribution.titles.africa`)}
        content={props.africa}
      />
      <AccordionItem
        title={t(`distribution.titles.northAmerica`)}
        content={props.northAmerica}
      />
      <AccordionItem
        title={t(`distribution.titles.southAmerica`)}
        content={props.southAmerica}
      />
      <AccordionItem
        title={t(`distribution.titles.oceania`)}
        content={props.oceania}
      />
    </div>
  );
}
