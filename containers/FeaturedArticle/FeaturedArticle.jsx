import React, { useEffect, useState } from "react";
import { FeatureBlogCard, ImageBox } from "../../components";
import blogs from "../../pages/blogs";
import { mediaUrl } from "../../utils/Data/config";
import useWindowSize from "../../utils/windowSize";
import Style from "./FeaturedArticle.module.scss";

function FeaturedArticle({ blogsData }) {
  const [latestBlog, setLatestBlog] = useState(null);
  useEffect(() => {
    let sorted = blogsData.sort(function (a, b) {
      return (
        new Date(b?.attributes?.publishedAt) -
        new Date(a?.attributes?.publishedAt)
      );
    });
    setLatestBlog(sorted[0]);
  }, []);

  return (
    <div className={Style.FeaturedArticle}>
      <p className={Style.title}>Read our latest blog</p>
      <div className={Style.blogContainer}>
        <div className={Style.blogContainer__contentBox}>
          {/* <div className={Style.apostrophy}>
            <ImageBox src={"/apostrophy.png"} />
          </div> */}

          <p className={Style.title}>{latestBlog?.attributes?.title}</p>
          <p
            className={Style.subTitle}
            dangerouslySetInnerHTML={{
              __html:
                latestBlog?.attributes?.Seo?.metaDiscription?.slice(0, 100) ||
                "" + "...",
            }}
          ></p>

          <button
            className={Style.btn + " ptr"}
            onClick={() => {
              window.open(
                `/blog/${
                  latestBlog?.id
                }/${latestBlog?.attributes?.title?.replaceAll(" ", "-")}`,
                "_blank"
              );
            }}
          >
            Read Full Story
          </button>
        </div>
        <div className={Style.blogContainer__imageBox}>
          {latestBlog && (
            <ImageBox
              src={
                mediaUrl +
                latestBlog?.attributes?.coverImage?.data?.attributes?.url
              }
              style={{ borderRadius: "10px" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default FeaturedArticle;
