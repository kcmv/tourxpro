import React from "react";

function BlogWidgetCategories() {
  return (
    <>
      <aside className="blog-widget widget-categories mt-30">
        <div className="widget-title">
          <h4>Categories</h4>
        </div>
        <ul className="widget-body">
          <li>
            <a href="#">
              <h6>
                <i className="bi bi-chevron-double-right" /> New York City
              </h6>
              <span>(20)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <h6>
                <i className="bi bi-chevron-double-right" />
                Adventure Tour
              </h6>
              <span>(08)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <h6>
                <i className="bi bi-chevron-double-right" /> Couple Tour
              </h6>
              <span>(18)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <h6>
                <i className="bi bi-chevron-double-right" /> Village Tour
              </h6>
              <span>(21)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <h6>
                <i className="bi bi-chevron-double-right" /> Group Tour
              </h6>
              <span>(09)</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default BlogWidgetCategories;
