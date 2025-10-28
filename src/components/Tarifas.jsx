import tarifas from '../images/tarifas2026.png';
import '../css/EspaciosComunes.css';

function Tarifas() {

  return (
    <section id="tarifas" className="tarifas-section">
      <h1 className="tarifas-title">Tarifas 2026</h1>

      <div className="full-bleed">
        <img
          src={tarifas}
          alt="Tarifas 2026"
          className="tarifas-img"
        />
      </div>
    </section>
  );
}

export default Tarifas;