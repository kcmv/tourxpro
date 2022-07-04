import React from "react";

function Pagination() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <nav>
            <ul className="pagination pagination-style-one justify-content-center pt-50">
              <li className="page-item page-arrow">
                <a href="#" onClick={scrollTop} className="page-link">
                  <i className="bi bi-chevron-double-left" />
                </a>
              </li>
              <li className="page-item active">
                <a href="#" onClick={scrollTop} className="page-link">
                  01
                </a>
              </li>
              <li className="page-item">
                <a href="#" onClick={scrollTop} className="page-link">
                  02
                </a>
              </li>
              <li className="page-item">
                <a href="#" onClick={scrollTop} className="page-link">
                  03
                </a>
              </li>
              <li className="page-item">
                <a href="#" onClick={scrollTop} className="page-link">
                  04
                </a>
              </li>
              <li className="page-item page-arrow">
                <a href="#" onClick={scrollTop} className="page-link">
                  <i className="bi bi-chevron-double-right" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Pagination;
