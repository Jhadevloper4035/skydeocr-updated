import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import eventData from "../../data/eventData.json";

const fadeInStyle = {
  animation: "fadeIn 0.8s ease-in-out",
};

const imgStyle = {
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
};

const imgHoverStyle = {
  transform: "scale(1.03)",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
};

const EventDetail = () => {
  const { slug } = useParams();
  const event = eventData.find((e) => e.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!event) {
    return (
      <h2 className="text-center my-5" style={fadeInStyle}>
        Event not found
      </h2>
    );
  }

  const coverImage =
    event.images.find((img) => img.includes("cover-img")) || event.images[0];
  const galleryImages = event.images.filter(
    (img) => !img.includes("cover-img")
  );

  // Optional: handle hover effect using inline React state
  const handleMouseEnter = (e) => {
    Object.assign(e.currentTarget.style, imgHoverStyle);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.currentTarget.style, imgStyle);
  };

  return (
    <div className="container py-5" style={fadeInStyle}>
      {/* Title */}
      <div className="row justify-content-center mb-4 pt-0">
        <div className="col-md-10 text-center">
          <h2 className="fw-bold">{event.title}</h2>
        </div>
      </div>

      {/* Cover Image */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-12 text-center">
          <img
            src={coverImage}
            alt={`Cover of ${event.title}`}
            className="img-fluid rounded shadow"
            loading="lazy"
            style={{
              ...imgStyle,
              maxHeight: "400px",
              objectFit: "cover",
              width: "100%",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>

      {/* Gallery */}
      <div className="row g-4">
        {galleryImages.map((img, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4" key={index}>
            <img
              src={img}
              alt={`Event ${index + 1}`}
              className="img-fluid rounded shadow"
              loading="lazy"
              style={imgStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        ))}
      </div>

      {/* Inline Keyframe Styles */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(15px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default EventDetail;
