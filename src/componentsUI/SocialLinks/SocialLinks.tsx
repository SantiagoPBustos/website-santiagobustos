"use client";

import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/subComponentsUI/Icons/Icons";
import styles from "./styles.module.css";

export default function SocialLinks() {
  return (
    <div className={`${styles.preferences}`}>
      <InstagramIcon />
      <TwitterIcon />
      <GithubIcon />
      <LinkedInIcon />
    </div>
  );
}
