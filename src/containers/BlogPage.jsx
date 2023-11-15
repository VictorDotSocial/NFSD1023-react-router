import { useNavigate } from "react-router-dom";

const BlogPage = () => {
  // Navegación programática
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/blog/tortugas", {
      state: {
        confirmationCode: 6481,
      },
    });
  };

  return (
    <div>
      <h1>BlogPage</h1>
      <p>
        <div onClick={handleButton}>Navegar al artículo sobre tortugas</div>
      </p>
    </div>
  );
};

export default BlogPage;
