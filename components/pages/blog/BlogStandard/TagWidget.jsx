import React from "react";

function TagWidget() {
  
  return (
    <>
      <aside className="blog-widget widget-tag-cloud mt-30">
        <div className="widget-title">
          <h4>Tags</h4>
        </div>
        <div className="tag-cloud widget-body">
          <a href="#">Adventure</a>
          <a href="#">Trip</a>
          <a href="#">Guided</a>
          <a href="#">Historical</a>
          <a href="#">Road Trips</a>
          <a href="#">Tourist</a>
          <a href="#">Cultural</a>
          <a href="#">Natural Tour</a>
          <a href="#">Journey</a>
        </div>
      </aside>
    </>
  );
}

export default TagWidget;
