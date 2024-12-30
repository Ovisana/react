import React, { useEffect, useState } from 'react';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching products from FakeStore API as placeholder for blog data
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setBlogs(data.slice(0, 3)); // Limit to the first 3 items for blogs
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <p className="text-center">Loading blogs...</p>;
  }

  return (
    <section className="ftco-section ftco-degree-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {blogs.map((blog, index) => (
              <div key={index} className="blog-post">
                <h2 className="mb-3">{blog.title}</h2>
                <p>{blog.description || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis...'}</p>
                <p>
                  <img src={blog.image} alt={blog.title} className="img-fluid" />
                </p>
                <p>
                  {`Price: $${blog.price}`} {/* Example of using FakeStore data */}
                </p>
              </div>
            ))}
            <div className="tag-widget post-tag-container mb-5 mt-5">
              <div className="tagcloud">
                <a href="#" className="tag-cloud-link">Life</a>
                <a href="#" className="tag-cloud-link">Sport</a>
                <a href="#" className="tag-cloud-link">Tech</a>
                <a href="#" className="tag-cloud-link">Travel</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 sidebar">
            <div className="sidebar-box">
              <form action="#" className="search-form">
                <div className="form-group">
                  <span className="icon ion-ios-search"></span>
                  <input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
                </div>
              </form>
            </div>

            <div className="sidebar-box">
              <h3 className="heading">Recent Blog</h3>
              {blogs.map((blog, index) => (
                <div key={index} className="block-21 mb-4 d-flex">
                  <a
                    className="blog-img mr-4"
                    style={{ backgroundImage: `url(${blog.image})` }}
                  ></a>
                  <div className="text">
                    <h3 className="heading-1">
                      <a href="#">{blog.title}</a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#">
                          <span className="icon-calendar"></span> {new Date().toDateString()}
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-person"></span> Admin
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-chat"></span> {Math.floor(Math.random() * 20) + 1}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
