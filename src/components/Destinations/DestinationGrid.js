import React from 'react';
import '../../styles/Destinations/DestinationGrid.css';

const destinations = [
  {
    imgSrc: "https://cdn.colombia.com/sdi/2019/10/10/san-jose-del-guaviare-puerta-de-orion-de-la-selva-a-la-constelacion-776681.jpg",
    location: "Guaviare, Colombia",
    title: "Puerta de Orión",
    description: "Formación rocosa natural en medio de la selva, ideal para fotografía y conexión con la naturaleza.",
    rating: "★★★★★",
  },
  {
    imgSrc: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQXGBud7eGNU67q0uuzXkk5rBIwn7Qfl2WStcNFpK-hlGmmDOFHH06Y0XAm6gj8qbwXXxujWOQpPChhDqFguvHj2h6Kxe6gKTGeH1AxWg",
    location: "Guaviare, Colombia",
    title: "Tranquilandia",
    description: "Paraíso natural con ríos de aguas cristalinas y playas de arena blanca.",
    rating: "★★★★★",
  },
  {
    imgSrc: "https://media-cdn.tripadvisor.com/media/photo-s/0f/04/13/6f/extraordinarias-formaciones.jpg",
    location: "Guaviare, Colombia",
    title: "Reserva Túneles Naturales",
    description: "Túneles formados por rocas que crean un paisaje único y misterioso.",
    rating: "★★★★★",
  },
  {
    imgSrc: "https://fontur.com.co/sites/default/files/styles/large/public/blog/images/164.png?itok=VE4aeXFq",
    location: "Guaviare, Colombia",
    title: "Cascada del Arcoíris",
    description: "Impresionante cascada donde se forma un arcoíris en ciertas épocas del año.",
    rating: "★★★★★",
  },
  {
    imgSrc: "https://raw.githubusercontent.com/JhamG9/api-viaja/main/uploads/guaviare/Chiribiquete.webp",
    location: "Guaviare, Colombia",
    title: "Cerro Azul - Puerta del Chiribiquete",
    description: "Montaña emblemática con vistas panorámicas y conexión espiritual con la naturaleza.",
    rating: "★★★★★",
  },
  {
    imgSrc: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/10/3e/98/a5.jpg",
    location: "Guaviare, Colombia",
    title: "Pinturas Rupestres de La Lindosa",
    description: "Sitio arqueológico con miles de pinturas rupestres que datan de miles de años.",
    rating: "★★★★★",
  },
];

function DestinationGrid() {
  return (
    <section className="popular-destinations">
      <div className="container">
        <div className="destinations-grid">
          {destinations.map((destination, index) => (
            <div className="destination-card" key={index}>
                <img src={destination.imgSrc} alt={destination.title} />
              <div className="card-content">
                <span className="destination-country">{destination.location}</span>
                <h3 className="destination-name">{destination.title}</h3>
                <p className="destination-description">{destination.description}</p>
                <span className="destination-rating">{destination.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DestinationGrid;