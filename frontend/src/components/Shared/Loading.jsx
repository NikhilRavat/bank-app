import React from "react";

function Loading() {
  return (
    <div className="w-100 h-100 d-grid" style={{ placeContent: "center" }}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
