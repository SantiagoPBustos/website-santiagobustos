"use client";

import { TwitterIcon } from "@/subComponentsUI/Icons/Icons";
import styles from "./styles.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EmailLink() {
  return (
    <div className={`${styles.container}`}>
      <Link
        className={`${styles.link}`}
        href="mailto:dasapibu@gmail.com"
        target="_blank"
      >
        dasapibu@gmail.com
      </Link>
      <motion.span
        className={styles.span}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </div>
  );
}
