import React, { useEffect, useState } from 'react';
import axios from 'axios';

// BlogPost Component
const BlogPost = ({ image, date, author, comments, title, description }) => (
  <div className="col-md-12 d-flex">
    <div className="blog-entry align-self-stretch d-md-flex">
      <a href="blog-single.html" className="block-20" style={{ backgroundImage: `url(${image})` }}>
      </a>
      <div className="text d-block pl-md-4">
        <div className="meta mb-3">
          <div><a href="#">{date}</a></div>
          <div><a href="#">{author}</a></div>
          <div><a href="#" className="meta-chat"><span className="icon-chat"></span> {comments}</a></div>
        </div>
        <h3 className="heading"><a href="blog-single.html">{title}</a></h3>
        <p>{description}</p>
        <p><a href="/" className="btn btn-primary py-2 px-3">Read more</a></p>
      </div>
    </div>
  </div>
);

// Pagination Component
const Pagination = () => (
  <div className="row mt-2">
    <div className="col">
      <div className="block-27">
        <ul>
          <li><a href="#">&lt;</a></li>
          <li className="active"><span>1</span></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
          <li><a href="#">&gt;</a></li>
        </ul>
      </div>
    </div>
  </div>
);

// Sidebar Component
const Sidebar = () => (
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
      <h3 className="heading">Categories</h3>
      <ul className="categories">
        <li><a href="#">Shoes <span>(12)</span></a></li>
        <li><a href="#">Men's Shoes <span>(22)</span></a></li>
        <li><a href="#">Women's <span>(37)</span></a></li>
        <li><a href="#">Accessories <span>(42)</span></a></li>
        <li><a href="#">Sports <span>(14)</span></a></li>
        <li><a href="#">Lifestyle <span>(140)</span></a></li>
      </ul>
    </div>
    <div className="sidebar-box">
      <h3 className="heading">Recent Blog</h3>
      <div className="block-21 mb-4 d-flex">
        <a className="blog-img mr-4" style={{ backgroundImage: 'url(/assets/images/image_1.jpg)' }}></a>
        <div className="text">
          <h3 className="heading-1"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
          <div className="meta">
            <div><a href="#"><span className="icon-calendar"></span> April 27, 2019</a></div>
            <div><a href="#"><span className="icon-person"></span> Admin</a></div>
            <div><a href="#"><span className="icon-chat"></span> 19</a></div>
          </div>
        </div>
      </div>
      <div className="block-21 mb-4 d-flex">
        <a className="blog-img mr-4" style={{ backgroundImage: 'url(/assets/images/image_2.jpg)' }}></a>
        <div className="text">
          <h3 className="heading-1"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
          <div className="meta">
            <div><a href="#"><span className="icon-calendar"></span> April 27, 2019</a></div>
            <div><a href="#"><span className="icon-person"></span> Admin</a></div>
            <div><a href="#"><span className="icon-chat"></span> 19</a></div>
          </div>
        </div>
      </div>
      <div className="block-21 mb-4 d-flex">
        <a className="blog-img mr-4" style={{ backgroundImage: 'url(/assets/images/image_3.jpg)' }}></a>
        <div className="text">
          <h3 className="heading-1"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
          <div className="meta">
            <div><a href="#"><span className="icon-calendar"></span> April 27, 2019</a></div>
            <div><a href="#"><span className="icon-person"></span> Admin</a></div>
            <div><a href="#"><span className="icon-chat"></span> 19</a></div>
          </div>
        </div>
      </div>
    </div>
    <div className="sidebar-box">
      <h3 className="heading">Tag Cloud</h3>
      <div className="tagcloud">
        <a href="#" className="tag-cloud-link">shop</a>
        <a href="#" className="tag-cloud-link">products</a>
        <a href="#" className="tag-cloud-link">shirt</a>
        <a href="#" className="tag-cloud-link">jeans</a>
        <a href="#" className="tag-cloud-link">shoes</a>
        <a href="#" className="tag-cloud-link">dress</a>
        <a href="#" className="tag-cloud-link">coats</a>
        <a href="#" className="tag-cloud-link">jumpsuits</a>
      </div>
    </div>
    <div className="sidebar-box">
      <h3 className="heading">Paragraph</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
    </div>
  </div>
);

// Main Component
const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  // Fetch data from Fake Store API
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=5')  // Fetch 5 products from the Fake Store API
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <section className="ftco-section ftco-degree-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 order-lg-last ">
            <div className="row">
              {posts.map(post => (
                <BlogPost
                  key={post.id}
                  image={post.image} // Use image from the API
                  date="April 9, 2019" // You can replace with dynamic date if needed
                  author="Admin"  // Replace with dynamic author if needed
                  comments="3"  // You can replace with dynamic comments if needed
                  title={post.title}
                  description={post.description}
                />
              ))}
            </div>
            <Pagination />
          </div>
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
