import { useRef, useState } from "react";
import "../css/carousel.css";

const Carousel = ({ images, onImageClick }) => {
  const carousel = useRef(null);
  const [count, setCount] = useState(0);

  const goTo = (index) => {
    if (!carousel.current) return;
    const width = carousel.current.offsetWidth;
    carousel.current.scrollTo({
      left: width * index,
      top: 0,
      behavior: "smooth",
    });
  };

  const incrementCarousel = (delta) => {
    setCount((prev) => {
      const len = images.length || 1;
      const next = (prev + delta + len) % len; // wrap seguro
      goTo(next);
      return next;
    });
  };

  return (
    <div className="carousel-container">
      <button
        className="carousel-btn left-btn"
        onClick={() => incrementCarousel(-1)}
        aria-label="Anterior"
        type="button"
      >
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
        </svg>
        <span className="sr-only">Anterior</span>
      </button>

      <button
        className="carousel-btn right-btn"
        onClick={() => incrementCarousel(1)}
        aria-label="Siguiente"
        type="button"
      >
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z"></path>
        </svg>
        <span className="sr-only">Siguiente</span>
      </button>
      <div className="carousel" ref={carousel}>
        {images.map((img, idx) => {
          const alt = img.title || "Imagen de carrusel";
          const isActive = idx === count;
          return (
            <div
              key={`${idx}-${img.title || "slide"}`}
              className={isActive ? "carousel-item active" : "carousel-item"}
            >
              <img
                src={img.src}
                alt={alt}
                onClick={() => onImageClick?.(img.src)}
                className="carousel-image"
              />
              {img.title ? <p>{img.title}</p> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;