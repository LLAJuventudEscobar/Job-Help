import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Sobre nosotros</h4>
        <p>Somos la Juventud de La Libertad Avanza de Escobar, un grupo comprometido con la defensa de la libertad individual y el desarrollo personal. Nuestra misión es guiar y acompañar a jóvenes en su crecimiento profesional, brindando herramientas para la creación de perfiles laborales sólidos y currículums efectivos.</p>
      </div>
      <div className="footer-section">
        <h4>Fuentes</h4>
        <div className='list'>
            <a href="https://www.indeed.com/career-advice/resumes-cover-letters/how-to-create-resume-pdf">https://www.indeed.com/career-advice/resumes-cover-letters/how-to-create-resume-pdf</a>
            <a href="https://www.elmhurst.edu/wp-content/uploads/2017/10/Elmhurst-College-Writing-An-Effective-Resume.pdf">https://www.elmhurst.edu/wp-content/uploads/2017/10/Elmhurst-College-Writing-An-Effective-Resume.pdf</a>
            <a href="https://www.santander.com/es/stories/las-10-claves-para-hacer-un-buen-curriculum-vitae">https://www.santander.com/es/stories/las-10-claves-para-hacer-un-buen-curriculum-vitae</a>
            <a href="https://www.canterbury.ac.nz/content/dam/uoc-main-site/documents/pdfs/d-other/linkedin-cheat-sheet.pdf">https://www.canterbury.ac.nz/content/dam/uoc-main-site/documents/pdfs/d-other/linkedin-cheat-sheet.pdf</a>
        </div>
      </div>
      <div className="footer-section">
        <h4>Redes Sociales</h4>
        <p>
            <a href="https://www.instagram.com/lla.juventud.escobar/" target="_blank" rel="noopener noreferrer">Instagram</a><span>|</span>
            <a href="https://www.tiktok.com/@lla.juventud.esco" target="_blank" rel="noopener noreferrer">TikTok</a><span>|</span>
            <a href="https://www.youtube.com/@lla.juventud.escobar" target="_blank" rel="noopener noreferrer">Youtube</a>
        </p>
      </div>
      <div className="footer-bottom">
        <p>Creado por Federico Goldammer</p>
      </div>
    </footer>
  );
};

export default Footer;
