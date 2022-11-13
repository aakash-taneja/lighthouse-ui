import React from "react";
import { ImageBox } from "../../components";
import Styles from "./FeatureCompare.module.scss";

function FeatureCompare() {
  return (
    <div className={Styles.FeatureCompare}>
      <div className={Styles.imageContainer}>
        <p className={Styles.title}>
          We are <span className="gradient__Text">Different</span>
        </p>
        <p className={Styles.subTitle}>
          Lighthouse allows users to store their files on the decentralized
          network for lifetime at a fixed price
        </p>

        <ImageBox
          src={"/cube.png"}
          width={"80%"}
          height={"80%"}
          layout="fill"
          data-aos="fade-up"
        />
      </div>
      <div className={Styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>
                Other Storage <br /> System
              </th>
              <th>
                Lighthouse Storage <br /> System
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-aos="fade-up" data-aos-delay="100">
                sss
              </td>
              <td data-aos="fade-up" data-aos-delay="300">
                ss
              </td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FeatureCompare;
