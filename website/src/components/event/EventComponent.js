import React from "react";
import { Link } from "react-router-dom";
import eventData from "../../data/eventData.json";

const EventComponent = () => {
  return (
    <>
      {eventData.map((event, index) => (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
          <div className="blog-wrap-2 h-100 border rounded shadow-sm overflow-hidden">
            <div className="blog-img-2">
              <Link to={`/eventdetail/${event.slug}`}>
                <img
                  src={event.images?.[0]} // cover image always at index 0 now
                  alt={event.title}
                  className="img-fluid w-100"
                  style={{
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
              </Link>
            </div>
            <div
              className="blog-content-2 p-3 d-flex align-items-center justify-content-center text-center"
              style={{ height: "120px" }}
            >
              <h4 className="mb-0">
                <Link
                  to={`/eventdetail/${event.slug}`} // unified route
                  className="text-dark text-decoration-none"
                >
                  {event.title}
                </Link>
              </h4>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default EventComponent;
