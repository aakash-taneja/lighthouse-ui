import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Style from "../../styles/Blog.module.scss";
import axios from "axios";
import { baseUrl, mediaUrl } from "../../utils/Data/config";
import {
  BlogView,
  FeaturedArticle,
  Footer,
  Header,
  MostPopularBlogs,
} from "../../containers";
import { Metadata } from "../../components";

export const getStaticPaths = async () => {
  const res = await axios.get(`${baseUrl}/blogs?populate=*`);
  let allBlogs = res["status"] === 200 ? res["data"]?.["data"] : null;

  const paths = allBlogs.map((blog) => {
    return {
      params: {
        params: [
          blog["id"] + "",
          blog?.attributes?.title?.replaceAll(" ", "-"),
        ],
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.params[0];
  let blogData = "null";
  let allBlogs = [];
  try {
    const res = await axios.get(`${baseUrl}/blogs/${id}?populate=*`);
    blogData =
      res["status"] === 200 ? res["data"]?.["data"]?.["attributes"] : null;

    const allBlogsRes = await axios.get(`${baseUrl}/blogs?populate=*`);
    allBlogs =
      allBlogsRes["status"] === 200 ? allBlogsRes["data"]?.["data"] : [];
  } catch (error) {}
  return {
    props: {
      blogData,
      allBlogs,
    },
  };
};

function Blog({ blogData, allBlogs }) {
  const router = useRouter();
  const { params } = router.query;
  const [showBlog, setShowBlog] = useState(blogData);
  const [similarBlogs, setSimilarBlogs] = useState([]);
  console.log(blogData);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${baseUrl}/blogs?populate=*`);
        res["status"] === 200 &&
          getSimilarBlogs(showBlog, res["data"]?.["data"], setSimilarBlogs);
      } catch (error) {}
    })();
  }, [params]);
  return (
    <>
      <Metadata
        title={blogData?.Seo?.metaTitle}
        description={blogData?.Seo?.metaDiscription?.slice(0, 100) + "..."}
        image={mediaUrl + blogData?.coverImage?.data?.attributes?.url}
        url={"https://www.lighthouse.storage/"}
      />
      <div className={"bodyContainer"}>
        <Header style={{ backgroundColor: "#000" }} />
        <div className="sectionContainer">
          <div className="contentContainer">
            <BlogView blogData={blogData} />
          </div>
        </div>
        <div className="">
          <div
            className="contentContainer container"
            style={{ maxHeight: "50vh", marginBottom: "2rem" }}
          >
            <MostPopularBlogs blogsData={allBlogs} />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Blog;
