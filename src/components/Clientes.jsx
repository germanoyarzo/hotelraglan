// import React from 'react';
// import styled from 'styled-components';
// import Square from './Square'; // Asegúrate de importar el componente Square actualizado
// import logohotel from '../images/logohotel.jpg';
// import kineseologia from '../images/kineseologiafs.jpg';
// import '../css/Clientes.css'; // Importa el archivo CSS

// const slides = [
//   { src: logohotel, title: "Cowork", link: "https://www.hotelraglan.com" },
//   { src: kineseologia, title: "Kinesiología", link: "https://kinesiologiafs.com/" }
// ];


// const Link = styled.a`
//   /* Puedes mantener el resto de estilos en el componente si prefieres */
// `;

// function Clientes() {
//   return (
//     <section id="clientes">
//       <div className="Container">
//         <div className="Text">
//           <h2>Empresas que utilizan nuestros servicios</h2>
//           <div className="GridContainer">
//             {slides.map((slide, index) => (
//               <Link key={index} href={slide.link} target="_blank" rel="noopener noreferrer">
//                 <Square image={slide.src} title={slide.title} />
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Clientes;
