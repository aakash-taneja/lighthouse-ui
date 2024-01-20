import React, { useContext } from "react";
import Styles from "./PartnerCarousel.module.scss";
import { ImageBox, TitleSeprator } from "../../components";
import { LandingPageData } from "../../utils/Data/SiteContent";
import ThemeContext from "../../utils/services/Themecontext";

function PartnerCarousel({ data, title }) {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={Styles.PartnerCarousel}>
      <TitleSeprator title={title} />

      <div className={Styles.PartnerCarousel__brandLogoContainer}>
        {data?.map((item, index) => (
          <span
            key={index}
            data-aos="fade-up"
            data-aos-delay={100 * index}
            style={
              theme === "dark"
                ? { filter: "brightness(100%)" }
                : { filter: "brightness(10%)" }
            }
          >
            <ImageBox
              src={item?.icon}
              width={"200px"}
              height={"100px"}
              aspectRatio={true}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export default PartnerCarousel;
