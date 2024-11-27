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
        className="bg-transparent text-white"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en">EN</option>
        <option value="fr">FR</option>
      </select>
    </label>
  );
}
