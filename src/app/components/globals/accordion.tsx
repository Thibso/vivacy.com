import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import AccordionItem from "./accordionItem";

type Props = {
  europe: ReactNode;
  na: ReactNode;
  sa: ReactNode;
  asia: ReactNode;
  africa: ReactNode;
  oceania: ReactNode;
};

export default function Accordion(props: Props) {
  const t = useTranslations("Map");

  return (
    <div className="lg:w-[80%] mx-auto">
      <AccordionItem
        title={t(`distribution.titles.europe`)}
        content={props.europe}
        isActive={true}
      />
      <AccordionItem
        title={t(`distribution.titles.europe`)}
        content={props.na}
        isActive={true}
      />
      <AccordionItem
        title={t(`distribution.titles.europe`)}
        content={props.sa}
        isActive={true}
      />
      <AccordionItem
        title={t(`distribution.titles.asia`)}
        content={props.asia}
        isActive={false}
      />
      <AccordionItem
        title={t(`distribution.titles.africa`)}
        content={props.africa}
        isActive={false}
      />
      <AccordionItem
        title={t(`distribution.titles.americas`)}
        content={props.oceania}
        isActive={false}
      />
    </div>
  );
}
