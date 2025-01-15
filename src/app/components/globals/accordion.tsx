import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import AccordionItem from "./accordionItem";

type Props = {
  europe: ReactNode;
  asia: ReactNode;
  africa: ReactNode;
  americas: ReactNode;
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
        content={props.americas}
        isActive={false}
      />
    </div>
  );
}
