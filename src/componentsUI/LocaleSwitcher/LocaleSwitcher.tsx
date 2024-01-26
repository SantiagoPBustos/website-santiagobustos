"use client";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "../../i18n-navigation";
import styles from "./styles.module.css";

import Image from "next/image";
export default function LocaleSwitcher() {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const handleClick = () => {
    router.replace(pathname, { locale: locale === "en" ? "es" : "en" });
  };

  return (
    <button
      aria-label="Toggle Locale"
      className={`${styles.button} `}
      onClick={handleClick}
    >
      {locale === "en" ? (
        <Image src="/icons/es.png" alt="ES" width={28} height={28} />
      ) : (
        <Image src="/icons/en.png" alt="EN" width={28} height={28} />
      )}
    </button>
  );
}
