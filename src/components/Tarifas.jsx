import tarifas from '../images/tarifas2026.png';
import '../css/EspaciosComunes.css';
import { useState, useEffect, useRef } from "react";

function Tarifas() {
  const [isOpen, setIsOpen] = useState(false);
  const [fullSrc, setFullSrc] = useState(null);

  // zoom / pan state
  const [scale, setScale] = useState(1);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);
  const [panning, setPanning] = useState(false);
  const start = useRef({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const openModal = (src) => {
    if (!src) return;
    setFullSrc(src);
    setIsOpen(true);
    // reset zoom/pan al abrir
    setScale(1);
    setTx(0);
    setTy(0);
  };

  const closeModal = () => {
    setIsOpen(false);
    setFullSrc(null);
  };

  // Cerrar con ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // util: clamp
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  // wheel zoom centrado en el cursor
  const handleWheel = (e) => {
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    const delta = e.deltaY < 0 ? 0.25 : -0.25;
    const newScale = clamp(scale + delta, 1, 6);

    if (newScale === scale) return;

    // mantener el punto bajo el cursor fijo
    const px = (mx - tx) / scale;
    const py = (my - ty) / scale;

    const ntx = mx - px * newScale;
    const nty = my - py * newScale;

    setScale(newScale);
    setTx(ntx);
    setTy(nty);
  };

  // pan con mouse
  const onMouseDown = (e) => {
    e.preventDefault();
    setPanning(true);
    start.current = { x: e.clientX - tx, y: e.clientY - ty };
  };
  const onMouseMove = (e) => {
    if (!panning) return;
    setTx(e.clientX - start.current.x);
    setTy(e.clientY - start.current.y);
  };
  const onMouseUp = () => setPanning(false);
  const onMouseLeave = () => setPanning(false);

  // doble click: toggle 1x ↔ 2x centrado en cursor
  const onDoubleClick = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const targetScale = scale > 1 ? 1 : 2;

    const px = (mx - tx) / scale;
    const py = (my - ty) / scale;

    const ntx = mx - px * targetScale;
    const nty = my - py * targetScale;

    setScale(targetScale);
    setTx(ntx);
    setTy(nty);
  };

  return (
    <section id="tarifas" className="tarifas-section">
      <h1 className="tarifas-title">Tarifas 2026</h1>

      <div className="full-bleed">
        <img
          src={tarifas}
          alt="Tarifas 2026"
          className="tarifas-img"
          loading="lazy"
          onClick={() => openModal(tarifas)}
          role="button"
          aria-label="Abrir imagen a pantalla completa con zoom"
        />
      </div>

      {/* Modal con zoom/pan */}
      {isOpen && (
        <div
          className="imgmodal-overlay"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="imgmodal-body"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="imgmodal-close" onClick={closeModal} aria-label="Cerrar">×</button>

            <div
              ref={containerRef}
              className={`img-zoom-container ${panning ? 'grabbing' : ''}`}
              onWheel={handleWheel}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseLeave}
              onDoubleClick={onDoubleClick}
            >
              <img
                src={fullSrc}
                alt="Tarifas 2026"
                draggable="false"
                className="img-zoom-el"
                style={{ transform: `translate(${tx}px, ${ty}px) scale(${scale})` }}
              />
            </div>

            <div className="img-zoom-help" aria-hidden="true">
              Rueda para zoom · arrastrá para mover · doble click para 1×/2×
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Tarifas;