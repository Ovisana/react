import React from 'react';

const Sidebar = () => {
  const categories = [
    {
      title: "Men's Shoes",
      items: ['Sport', 'Casual', 'Running', 'Jordan', 'Soccer', 'Football', 'Lifestyle'],
    },
    {
      title: "Women's Shoes",
      items: ['Sport', 'Casual', 'Running', 'Jordan', 'Soccer', 'Football', 'Lifestyle'],
    },
    { title: 'Accessories', items: ['Jeans', 'T-Shirt', 'Jacket', 'Shoes'] },
    { title: 'Clothing', items: ['Jeans', 'T-Shirt', 'Jacket', 'Shoes'] },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-box-2">
        <h2 className="heading">Categories</h2>
        <div className="fancy-collapse-panel">
          <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
            {categories.map((category, index) => (
              <div className="panel panel-default" key={index}>
                <div className="panel-heading" role="tab" id={`heading${index}`}>
                  <h4 className="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href={`#collapse${index}`}
                      aria-expanded="true"
                      aria-controls={`collapse${index}`}
                    >
                      {category.title}
                    </a>
                  </h4>
                </div>
                <div
                  id={`collapse${index}`}
                  className={`panel-collapse collapse ${index === 0 ? 'in' : ''}`}
                  role="tabpanel"
                  aria-labelledby={`heading${index}`}
                >
                  <div className="panel-body">
                    <ul>
                      {category.items.map((item, idx) => (
                        <li key={idx}>
                          <a href="#">{item}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sidebar-box-2">
        <h2 className="heading">Price Range</h2>
        <form className="colorlib-form-2">
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>Price from:</label>
                <select className="form-control">
                  {[1, 200, 300, 400, 1000].map((value, index) => (
                    <option key={index} value={value}>
                      ${value}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label>Price to:</label>
                <select className="form-control">
                  {[2000, 4000, 6000, 8000, 10000].map((value, index) => (
                    <option key={index} value={value}>
                      ${value}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
