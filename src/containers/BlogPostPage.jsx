import React from "react";
import { useLocation } from "react-router-dom";

const BlogPostPage = () => {
  const { state } = useLocation();

  const { confirmationCode } = state || {
    confirmationCode: "0000",
  };

  return (
    <div>
      <h1>Mi artículo sobre tortugas</h1>
      <p>BLaaaaaaablabalabalabaka</p>
      <p>Tu código de confirmación es: {confirmationCode}</p>
    </div>
  );
};

export default BlogPostPage;
