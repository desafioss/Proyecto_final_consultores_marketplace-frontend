// src/views/Blog.jsx
import React, { useState } from 'react';

function Blog() {
  // Contenido del blog
  const blogContent = {
    title: "Gestión Eficiente para Pymes de Constructoras: Herramientas Clave de Administración, Gestión y Marketing",
    subtitle: "La gestión de pequeñas y medianas empresas (pymes) en el sector de la construcción puede ser un desafío debido a la variedad de tareas que deben manejarse simultáneamente. Desde la planificación de proyectos hasta el marketing, contar con las herramientas adecuadas es crucial para garantizar la eficiencia y el éxito.",
    content: `En este artículo, exploraremos algunas de las herramientas esenciales que toda pyme de constructoras debería considerar.

Herramientas de Administración

1. Software de Gestión de Proyectos  
   Ejemplo: Microsoft Project, Trello, Asana.  
   Descripción: Estas plataformas permiten una gestión eficiente de los proyectos, asignando tareas, estableciendo plazos y realizando un seguimiento del progreso.
   
2. Software de Contabilidad  
   Ejemplo: QuickBooks, Xero, FreshBooks.  
   Descripción: Facilita la gestión de las finanzas empresariales, incluyendo facturación, seguimiento de gastos y generación de informes financieros.
   
3. Software de Recursos Humanos  
   Ejemplo: BambooHR, Gusto, Zenefits.  
   Descripción: Ayuda en la administración de nóminas, gestión de beneficios y seguimiento de la asistencia de los empleados.

Herramientas de Gestión

1. Sistemas de Gestión de la Calidad (SGC)  
   Ejemplo: ISO 9001, Six Sigma.  
   Descripción: Aseguran que los procesos de la empresa cumplan con los estándares de calidad necesarios para mantener la satisfacción del cliente y la eficiencia operativa.
   
2. Software de Gestión de Inventarios  
   Ejemplo: Zoho Inventory, TradeGecko.  
   Descripción: Permite un seguimiento preciso de materiales y suministros, asegurando que siempre haya suficientes recursos disponibles para completar los proyectos.
   
3. Herramientas de Gestión de Riesgos  
   Ejemplo: RiskWatch, Resolver.  
   Descripción: Ayudan a identificar, evaluar y mitigar riesgos potenciales que puedan afectar los proyectos de construcción.

Herramientas de Marketing

1. Plataformas de Marketing Digital  
   Ejemplo: HubSpot, Mailchimp.  
   Descripción: Facilitan la creación, implementación y análisis de campañas de marketing digital, incluyendo correo electrónico, redes sociales y SEO.
   
2. Software de Gestión de Relaciones con el Cliente (CRM)  
   Ejemplo: Salesforce, Zoho CRM.  
   Descripción: Permite gestionar y analizar las interacciones con clientes actuales y potenciales, mejorando la satisfacción y fidelización.
   
3. Herramientas de Análisis de Competencia  
   Ejemplo: SEMrush, Ahrefs.  
   Descripción: Proveen información valiosa sobre la competencia y el mercado, ayudando a tomar decisiones estratégicas informadas.

Conclusión

La implementación de estas herramientas puede transformar la manera en que las pymes de constructoras gestionan sus operaciones, proyectos y estrategias de marketing. Adoptar una combinación de herramientas de administración, gestión y marketing no solo mejorará la eficiencia operativa, sino que también permitirá a las empresas mantenerse competitivas y alcanzar el éxito a largo plazo.`
  };

  // Estado local para comentarios
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    const trimmedComment = newComment.trim();
    if (!trimmedComment) return;

    const comment = { id: Date.now(), text: trimmedComment };
    setComments([...comments, comment]);
    setNewComment('');
  };

  return (
    <div className="container py-5">
      {/* Título del Blog fuera de la card  */}
      <h2 className="blog-title">Blog</h2>

      <div className="card mb-5 blog-content">
        <div className="card-body">
          <h2 className="card-title">{blogContent.title}</h2>
          <h5 className="card-subtitle mb-3 text-muted">{blogContent.subtitle}</h5>
          <div className="card-text" style={{ whiteSpace: 'pre-wrap' }}>
            {blogContent.content}
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h4 className="mb-3">Deja tu comentario</h4>
          {comments.length === 0 && <p>No hay comentarios aún.</p>}
          <ul className="list-group mb-3">
            {comments.map((comment) => (
              <li key={comment.id} className="list-group-item">
                {comment.text}
              </li>
            ))}
          </ul>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Escribe tu comentario..."
              value={newComment}
              onChange={handleCommentChange}
            ></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleAddComment}>
            Agregar comentario
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
