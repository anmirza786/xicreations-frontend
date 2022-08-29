/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { loadbloglist } from "../../reduxIntegration/actions";

const BlogGrid = ({ blogs }) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadbloglist());
  }, []);
  const blogList = useSelector((state) => state.blogs);
  return (
    <section className="blog-pg blog section-padding pt-0">
      <div className="container">
        <div className="posts">
          <div className="row">
            {blogList &&
              blogList.map((blogItem) => (
                <div className="col-lg-4" key={blogItem.id}>
                  <div className="item mb-80 wow fadeInUp" data-wow-delay=".3s">
                    <div className="img">
                      <img src={blogItem.blog_picture[0].picture} alt="" />
                    </div>
                    <div className="cont">
                      <div>
                        <div className="info">
                          <Link href="/blog/blog-dark">
                            <a className="date">
                              <span>{blogItem.created_on}</span>
                            </a>
                          </Link>
                        </div>
                        <h5>
                          <Link href={`/blog-details/blog-details-dark/?blogid=${blogItem.id}`}>
                            {blogItem.title}
                          </Link>
                        </h5>
                        <p>
                          <Link href={`/blog-details/blog-details-dark/?blogid=${blogItem.id}`}>
                            {blogItem.smalldescription}
                          </Link>
                        </p>
                        <div className="btn-more">
                          <Link href={`/blog-details/blog-details-dark/?blogid=${blogItem.id}`}>
                            <a className="simple-btn">Read More</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
