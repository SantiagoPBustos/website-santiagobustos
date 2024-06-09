"use client";

import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/subComponentsUI/Icons/Icons";
import styles from "./styles.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SocialLinks() {
  return (
    <div className={`${styles.container}`}>
      <Link href={"https://www.linkedin.com/in/dasapibu/"} target="_blank">
        <LinkedInIcon className={styles.icon} />
      </Link>
      <Link href={"https://github.com/SantiagoPBustos"} target="_blank">
        <GithubIcon className={styles.icon} />
      </Link>
      <Link
        href={"https://www.instagram.com/santiago_pbustos/"}
        target="_blank"
      >
        <InstagramIcon className={styles.icon} />
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
