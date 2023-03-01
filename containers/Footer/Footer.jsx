import React from "react";
import Styles from "./Footer.module.scss";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BsTelegram, BsDiscord, BsTwitter, BsLinkedin } from "react-icons/bs";
import { ImageBox } from "../../components";
import { footerData, socialLinks } from "../../utils/Data/SiteContent";
import { useRouter } from "next/router";

function Footer() {
  const _navigate = useRouter();

  return (
    <div className={Styles.Footer}>
      <div className={Styles.Footer__upperFooter + " container"}>
        <div className={Styles.brandBox}>
          <div className={Styles.logo}>
            <ImageBox src={"/logo.svg"} width="60%" />
          </div>
          <div className={Styles.socialBox}>
            <p>Find us on social</p>
            <div className={Styles.icons}>
              <span
                className={Styles.icon}
                onClick={() => {
                  window.open(socialLinks?.telegram, "_blank");
                }}
              >
                <BsTelegram />
              </span>
              <span
                className={Styles.icon}
                onClick={() => {
                  window.open(socialLinks?.discord, "_blank");
                }}
              >
                <BsDiscord />
              </span>
              <span
                className={Styles.icon}
                onClick={() => {
                  window.open(socialLinks?.twitter, "_blank");
                }}
              >
                <BsTwitter />
              </span>
              <span
                className={Styles.icon}
                onClick={() => {
                  window.open(socialLinks?.linkedin, "_blank");
                }}
              >
                <BsLinkedin />
              </span>
            </div>
          </div>
        </div>
        <div className={Styles.siteMap}>
          <p className={Styles.siteMap__title}>Sitemap</p>

          {footerData?.sitemap.map((item, index) => (
            <p
              className={Styles.siteMap__link + " ptr"}
              key={index}
              onClick={() => {
                item?.path
                  ? _navigate.push(item?.path)
                  : window.open(item?.link, "_blank");
              }}
            >
              {item?.text}
            </p>
          ))}
        </div>
        <div className={Styles.siteMap}>
          <p className={Styles.siteMap__title}>Help</p>
          {footerData?.otherLinks.map((item, index) => (
            <p
              className={Styles.siteMap__link + " ptr"}
              key={index}
              onClick={() => {
                item?.path
                  ? _navigate.push(item?.path)
                  : window.open(item?.link, "_blank");
              }}
            >
              {item?.text}
            </p>
          ))}
        </div>

        <div className={Styles.newsLetterBox}>
          <p className={Styles.newsLetterBox__title}>Newsletter</p>
          <input type="text" placeholder="user@mail.com" />
          <button
            className="fillBtn__purple"
            style={{
              width: "100%",
              background: "#2563EB",
              border: "1px solid #2563EB",
              marginTop: "1rem",
            }}
          >
            Subscribe Now
          </button>
        </div>
      </div>
      <div className={Styles.Footer__lowerFooter}>
        <p>© Copyright 2023, All Rights Reserved by Lighhouse Storage</p>
      </div>
    </div>
  );
}

export default Footer;
