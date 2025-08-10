import clsx from "clsx";
import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import shorts from "../../data/reviewData.json"

const SkyDecorShorts = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const loadMore = () => setVisibleCount((prev) => prev + 4);

  const visibleShorts = shorts.slice(0, visibleCount);

  return (
    <section className="py-5 bg-light">
      <Container>
        <div className={clsx("welcome-area")}>
          <div className="container">
            <div className="welcome-content text-center">
              <h1 style={{ textTransform: "uppercase" }}>CUSTOMER REVIEWS</h1>
            </div>
          </div>
        </div>

        <Row>
          {visibleShorts.map((id, index) => (
            <Col key={index} lg={3} md={4} sm={6} className="mb-4">
              <div
                style={{
                  position: "relative",
                  paddingBottom: "177%",
                  height: 0,
                  overflow: "hidden",
                }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`YouTube Short ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy" // Native lazy loading!
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "12px",
                    border: "none",
                  }}
                />
              </div>
            </Col>
          ))}
        </Row>

        {visibleCount < shorts.length && (
          <div className="text-center mt-4">
            <Button onClick={loadMore} variant="primary">
              Load More
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default SkyDecorShorts;
