import { useState } from "react";

export default function ImageGallery({ images }) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) {
    return <p>No hay imágenes disponibles.</p>;
  }

  function next() {
    setCurrent((prev) => (prev + 1) % images.length);
  }

  function previous() {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <img
        src={images[current]}
        alt="imagen"
        style={{
          width: "60%",
          height: "300px",
          objectFit: "cover",
          borderRadius: "10px"
        }}
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={previous} style={{ marginRight: "10px" }}>
          ◀ Anterior
        </button>

        <button onClick={next}>Siguiente ▶</button>
      </div>
    </div>
  );
}
