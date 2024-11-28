"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <label className="max-lg:hidden">
      <select
        defaultValue={localActive}
        className="bg-blue text-white"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option className="bg-blue text-white" value="en">
          English
        </option>
        <option className="bg-blue text-white" value="fr">
          Français
        </option>
      </select>
    </label>
  );
}
