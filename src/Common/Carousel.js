import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Carousel = ({ images, selectValue, name }) => {
  // Componentes de flechas personalizadas
  const CustomPrevArrow = (props) => (
    <button {...props} className="custom-prev-arrow">
      &#60; {/* Flecha izquierda */}
    </button>
  );

  const CustomNextArrow = (props) => (
    <button {...props} className="custom-next-arrow">
      &#62; {/* Flecha derecha */}
    </button>
  );

  const [selectedImage, setSelectedImage] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    beforeChange: (current, next) => {
      setSelectedImage(next);
      selectValue(name, next);
    },
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <StyledCarousel>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className={selectedImage === index ? "selected" : ""}
          >
            <img
              src={image.imageUrl}
              alt={`Face ${index + 1}`}
              onClick={() => selectValue(index, name)}
            />
          </div>
        ))}
      </Slider>
    </StyledCarousel>
  );
};

export default Carousel;

const StyledCarousel = styled.div`
  max-width: 250px; /* Ajusta el ancho deseado del contenedor del carrusel */
  margin: 0 auto; /* Centra el contenedor horizontalmente */
  position: relative; /* Agrega posición relativa al contenedor */
  .slick-slide img {
    max-width: 120px; /* Aumenta el tamaño deseado para las imágenes */
    max-height: 2000px; /* Aumenta la altura deseada para las imágenes */
  }
`;
