import '../css/EspaciosComunes.css';

function Tarifas() {
  return (
    <section id="tarifas" className="tarifas-section">
      <h1 className="tarifas-title">Tarifas 2026</h1>

      <div className="tarifas-table-container">
        <table className="tarifas-table">
          <thead>
            <tr>
              <th></th>
              <th>Single</th>
              <th>Single Deluxe</th>
              <th>Doble</th>
              <th>Doble Deluxe</th>
              <th>Triple Deluxe</th>
              <th>Cuádruple Deluxe</th>
              <th>Apart<br/>(p/ persona)</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Enero hasta 12/02 inc</td>
              <td>$39.000</td>
              <td>$47.000</td>
              <td>$52.000</td>
              <td>$63.000</td>
              <td>$94.000</td>
              <td>$126.000</td>
              <td>$33.000</td>
            </tr>

            <tr>
              <td>Carnaval 13/02 al 16/02 inc</td>
              <td>$48.500</td>
              <td>$58.500</td>
              <td>$65.000</td>
              <td>$78.000</td>
              <td>$117.000</td>
              <td>$156.000</td>
              <td>$39.000</td>
            </tr>

            <tr>
              <td>Febrero a partir del 17/02</td>
              <td>$33.500</td>
              <td>$40.500</td>
              <td>$45.000</td>
              <td>$54.000</td>
              <td>$81.000</td>
              <td>$108.000</td>
              <td>$27.000</td>
            </tr>

            <tr>
              <td>Marzo</td>
              <td>$30.000</td>
              <td>$36.000</td>
              <td>$40.000</td>
              <td>$48.000</td>
              <td>$72.000</td>
              <td>$96.000</td>
              <td>$25.000</td>
            </tr>

            <tr>
              <td>Semana Santa</td>
              <td>$45.000</td>
              <td>$54.000</td>
              <td>$60.000</td>
              <td>$72.000</td>
              <td>$108.000</td>
              <td>$144.000</td>
              <td>$36.000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Tarifas;