

import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Dentro de tu componente:

const A = '/images/'
const email = 'frjmastrangelo@gmail.com'
const phone = '+5493516502759'
const contact = '#contacto'

function SectionHeading({ eyebrow, children, light = false }) {
  return <div className={`section-heading ${light ? 'light' : ''}`}><span>{eyebrow}</span><h2>{children}</h2></div>
}

function App() {
  return <main>
    <header className="topbar">
      <a className="brand" href="#inicio" aria-label="Fabio Mastrangelo, inicio"><span className="brand-mark">FM</span><span>Fabio Mastrangelo<small>Abogado · Master y Doctor en Derecho</small></span></a>
      <nav><a href="#estudio">Estudio</a><a href="#areas">Áreas de práctica</a><a href="#publicaciones">Publicaciones</a><a href="#formacion">Formación</a>
      </nav>
    </header>

    <section className="hero" id="inicio">
      <div className="hero-content">
        <p className="eyebrow"><span className="eyebrow-line"/> Derecho y perspectiva internacional</p>
        <h1>Experiencia jurídica<br/><em>sin fronteras.</em></h1>
        <p className="hero-lead">Fabio Mastrangelo</p>
        <p className="hero-copy">Abogado, Master y Doctor en Derecho. Especialista en Derecho Internacional Privado y Derecho de Familia Internacional.</p>
       {/*  <a className="button button-light" href={contact}>Coordinar una consulta <ArrowUpRight size={17}/></a> */}
        <div className="hero-note"> Córdoba, Argentina · Asesoramiento en asuntos internacionales</div>
      </div>
      <div className="hero-image"><img src={A+'retrato-fabio.jpg'} alt="Fabio Mastrangelo en su estudio"/><div className="image-caption"><span>Fabio Mastrangelo</span><small>Abogado · Docente universitario</small></div></div>
      <div className="hero-decoration">DERECHO<br/>INTERNACIONAL</div>
    </section>

    <section className="intro section-pad" id="estudio">
      <div className="intro-symbol"><span>FM</span></div>
      <div className="intro-copy"><p className="eyebrow">Nuestro estudio jurídico</p><h2>Conocimiento académico.<br/><em>Experiencia práctica.</em></h2>
      <p>Especialista en Derecho Internacional Privado, con formación académica en Argentina y Europa, miembro de asociaciones de la especialidad y profesor de la materia Derecho Internacional Privado desde hace más de 20 años en la Universidad Nacional de Córdoba.</p></div>
      <div className="intro-stat"><strong>20<span>+</span></strong><span>años de docencia<br/>universitaria</span></div>
    </section>

    <section className="book-section section-pad">
      <div className="book-copy">
  <h3 className="eyebrow">Presentamos el libro:</h3>

  <h2> <em>Las comunicaciones judiciales directas en la restitución de niños, niñas y adolescentes.</em></h2>
   <h3 className="book-title">
   <em> Abordaje desde la ejecución de la sentencia.</em>
  </h3>

<p>De Fabio Mastrangelo.</p>
  {/* <p>Investigación y doctrina</p> */}

  <h3 className="book-title">
   <em> Una mirada especializada sobre los desafíos del derecho internacional.</em>
  </h3>

  

  <a
    className="button button-dark"
    href="https://www.eadvocatus.com.ar/producto/Las-comunicaciones-judiciales-directas-en-la-restituci%C3%B3n-internacional-de-ni%C3%B1os-,-ni%C3%B1as-y-adolescentes.php"
    target="_blank"
    rel="noopener noreferrer"
  >
    Accedé a más detalles
  </a>
</div>
      <div className="book-visual"><div className="book-frame"><img src={A+'portada-libro1.png'} alt="Imagen de presentación del libro sobre comunicaciones judiciales directas"/></div><span className="vertical-label">PUBLICACIÓN ACADÉMICA</span></div>
    </section>

    <section className="practice section-pad" id="areas">
      <SectionHeading eyebrow="Áreas de práctica">En qué nos enfocamos</SectionHeading>
      <div className="practice-grid">
        <article className="practice-card featured"><span className="card-number">01</span><h3>Derecho comercial internacional</h3><p>Análisis y redacción de contratos internacionales. Asesoramiento a empresas y gestión de marcas y patentes ante el Instituto Nacional de la Propiedad Industrial (INPI).</p></article>
        <article className="practice-card"><span className="card-number">02</span><h3>Restitución internacional de niños</h3><p>Experiencia en casos vinculados con Alemania, Canadá, Bélgica, Brasil, España, Italia, México, Uruguay, entre otros países.</p></article>
        <article className="practice-card image-card"><img src={A+'justicia.jpg'} alt="Estatua de la justicia"/><div><span className="card-number">03</span><h3>Derecho de familia internacional</h3><p>Regímenes de contacto transfronterizo, cuotas alimentarias, responsabilidad parental y divorcios con elementos internacionales.</p></div></article>
        <article className="practice-card"><span className="card-number">04</span><h3>Casos con niños, niñas y adolescentes</h3><p>Abordaje centrado en el interés superior del niño, con trabajo interdisciplinario e interconsultas con colegas de distintos países cuando el caso lo requiere.</p></article>
        <article className="practice-card wide"><div><span className="card-number">05</span><h3>Litigio complejo y actualización permanente</h3></div><p>Actualización doctrinaria y jurisprudencial en las distintas ramas de especialización.</p></article>
      </div>
      <div className="practice-footer"><p>¿Necesitás asesoramiento en un asunto con alcance internacional?</p><a className="button button-outline" href="https://docs.google.com/forms/d/e/1FAIpQLSdKf5AOEjjJdbuBkGgDOOjMFpfebibEI1fUBDjzGPC3b3Pq-w/viewform"  target="_blank">Ponete en contacto </a></div>
    </section>

    <section className="publications section-pad" id="publicaciones">
      <div className="publication-banner"><img src={A+'banner-publicaciones.jpg'} alt="Imagen relacionada con publicaciones jurídicas"/><div><p className="eyebrow">Producción académica</p><h2>Publicaciones</h2></div></div>
      <div className="publication-list">
        <article><span>01</span><p>La cooperación judicial internacional y nuevas tecnologías: algunas consideraciones sobre WhatsApp y el correo electrónico como medio de notificación en el proceso internacional.</p></article>
        <article><span>02</span><p>Un tema esencial en materia de restitución internacional de niños, niñas y adolescentes.</p></article>
        <article><span>03</span><p>Corte Suprema — El aporte de Córdoba a la restitución internacional de menores: una mirada sobre algunos instrumentos.</p></article>
        <article><span>04</span><p>El idioma en el derecho internacional privado, ¿un obstáculo para el libre acceso a la justicia?</p></article>
      </div>
    </section>

    <section className="members section-pad">
      <div className="members-copy"><p className="eyebrow">Participación profesional</p><h2>Redes que fortalecen<br/><em>el conocimiento.</em></h2><div className="member-list"><div><span>AADI</span><p>Miembro titular de la Asociación Argentina de Derecho Internacional.</p></div><div><span>ASADIP</span><p>Miembro titular de la Asociación Americana de Derecho Internacional Privado.</p></div></div></div>
      <img className="members-image" src={A+'facultad.jpg'} alt="Patio de una institución académica en Córdoba"/>
    </section>

    <section className="education section-pad" id="formacion">
      <div className="education-photo"><img src={A+'formacion-fabio.jpg'} alt="Fabio Mastrangelo en su biblioteca"/></div>
      <div className="education-copy"><p className="eyebrow">Trayectoria académica</p><h2>Formación para abordar<br/><em>casos complejos.</em></h2><ul><li><span><strong>Abogado</strong><small>Facultad de Derecho · Universidad Nacional de Córdoba</small></span></li><li><span><strong>Diplomado en Derecho de Familia y Sucesiones</strong><small>Facultad de Derecho · Universidad Nacional de Córdoba</small></span></li><li><span><strong>Master en Derecho</strong><small>Universidad Complutense de Madrid · España</small></span></li><li><span><strong>Doctor en Derecho Internacional Privado</strong><small>Universidad Nacional de Córdoba</small></span></li></ul></div>
    </section>

{/*     <section className="contact section-pad" id="contacto">
      <div><p className="eyebrow">Contacto</p><h2>Hablemos de tu<br/><em>caso.</em></h2><p className="contact-intro">Para consultas y coordinación de entrevistas, podés comunicarte a través de los siguientes medios.</p></div>
      <div className="contact-details">
        <a href="https://maps.google.com/?q=Dean+Funes+743+Cordoba+Argentina" target="_blank" rel="noreferrer"><MapPin/><span><strong>Estudio jurídico</strong><small>Dean Funes 743, primer piso, Of. B<br/>Córdoba, Argentina · CP X5000</small></span><ArrowUpRight className="contact-arrow"/></a>
        <a href={`mailto:${email}`}><Mail/><span><strong>Correo electrónico</strong><small>{email}</small></span><ArrowUpRight className="contact-arrow"/></a>
        <a href={`tel:${phone}`}><Phone/><span><strong>Teléfono</strong><small>+54 9 351 650-2759</small></span><ArrowUpRight className="contact-arrow"/></a>
        <a href="https://www.instagram.com/fabio_mastrangelo1/" target="_blank" rel="noreferrer"><Instagram/><span><strong>Instagram</strong><small>@fabio_mastrangelo1</small></span><ArrowUpRight className="contact-arrow"/></a>
      </div>
    </section> */}


{/* <footer>
  <a className="brand footer-brand" href="#inicio">
    <span className="brand-mark">FM</span>
    <span>
      Fabio Mastrangelo
      <small>Derecho Internacional Privado</small>
    </span>
  </a>

  <div className="footer-contacto">
    <span>
      © {new Date().getFullYear()} Fabio Mastrangelo · Córdoba, Argentina
    </span>
    <a href="tel:+549XXXXXXXXXX">
      📱 Celular
    </a>
    <a
      href="https://www.instagram.com/USUARIO_INSTAGRAM/"
      target="_blank"
      rel="noopener noreferrer"
    >
      📷 Instagram
    </a>
  </div>

  <div className="footer-desarrollo">
    <a href="#inicio">Volver arriba ↑</a>
    <span>Desarrollado por:</span>
    <a href="tel:+5493516557517">
      +54 9 351 6557517
    </a>
  </div>
</footer> */}


    <footer>
      <a className="brand footer-brand" href="#inicio"><span className="brand-mark">FM</span><span>Fabio Mastrangelo<small>Derecho Internacional Privado</small>
    
    </span>
    
    </a>
    <a className="brand footer-brand" href="#inicio">
    <span>
     Contacto: 
     <p> <small> <FontAwesomeIcon icon={faPhone} />  +54 9 351 6502759</small></p> 
     <p><small> <FontAwesomeIcon icon={faInstagram} /> <a
      href="https://www.instagram.com/#fabio_mastrangelo1/"
      target="_blank"
      rel="noopener noreferrer"
    > #fabio_mastrangelo1 </a></small> </p>
     </span>
     </a>
     
    
    
    <span>
      <p>Sitio desarrollado por:</p>
  <FontAwesomeIcon icon={faPhone} />
  +54 9 351 6557517
</span>    
    <a href="#inicio">Volver arriba ↑</a>
    </footer>
  </main>
}

export default App
