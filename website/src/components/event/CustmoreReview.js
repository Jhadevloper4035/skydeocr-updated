import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

// Extract the Shorts video ID from URL
const getVideoId = (url) => {
  const parts = url.split("/shorts/");
  return parts[1] || "";
};

const shorts = [
  "https://www.youtube.com/shorts/AjtDae8e-As",
  "https://www.youtube.com/shorts/3F0qirI0PFk",
  "https://www.youtube.com/shorts/sFjjYVQjNJE",
  "https://www.youtube.com/shorts/RuoO85qtPuA",
  "https://www.youtube.com/shorts/oxAkFpE5udw",
  "https://www.youtube.com/shorts/mLN5wYYd-2M",
  "https://www.youtube.com/shorts/qiNJOdl6Ue8",
  "https://www.youtube.com/shorts/56flyM-Ux8U",
  "https://www.youtube.com/shorts/fLQflphs5zw",
  "https://www.youtube.com/shorts/0AbUXybH-hk",
  "https://www.youtube.com/shorts/JwwLbKMl4d4",
  "https://www.youtube.com/shorts/Q1hTShTofrI",
  "https://www.youtube.com/shorts/3yQ-ajG78jg",
  "https://www.youtube.com/shorts/mGWLlI4Te2M",
  "https://www.youtube.com/shorts/F2qmOUGdXVU",
  "https://www.youtube.com/shorts/DUpZ-Jg6VZA",
  "https://www.youtube.com/shorts/4vsRzS0XeB0",
  "https://www.youtube.com/shorts/3MuBAREG0SM",
  "https://www.youtube.com/shorts/NQt8izIxfpE",
  "https://www.youtube.com/shorts/aO2HYwuJSXM",
  "https://www.youtube.com/shorts/SmUvT9n2PeE",
  "https://www.youtube.com/shorts/jQdcOWnA4EM",
  "https://www.youtube.com/shorts/gdJCAb9AVd8",
  "https://www.youtube.com/shorts/hqq2LR1khd4",
  "https://www.youtube.com/shorts/WV60HZjCe7M",
  "https://www.youtube.com/shorts/N6GpOs0GXN0",
  "https://www.youtube.com/shorts/om_C2VdU-30",
  "https://www.youtube.com/shorts/9Eg8R1FejkY",
  "https://www.youtube.com/shorts/xSPjPMyrfEQ",
  "https://www.youtube.com/shorts/AJ_TydJwapM",
  "https://www.youtube.com/shorts/4Edd12gRAmY",
  "https://www.youtube.com/shorts/VFRS11Vrr3Y",
  "https://www.youtube.com/shorts/57IW8UlIYD8",
  "https://www.youtube.com/shorts/yYPQtXzv5cA",
];

const SkyDecorShorts = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const loadMore = () => setVisibleCount((prev) => prev + 4);

  const visibleShorts = shorts.slice(0, visibleCount);

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">SkyDecor YouTube Reviews</h2>
        <Row>
          {visibleShorts.map((url, index) => (
            <Col key={index} lg={3} md={4} sm={6} className="mb-4">
              <div style={{ position: "relative", paddingBottom: "177%", height: 0, overflow: "hidden" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${getVideoId(url)}`}
                  title={`YouTube Short ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "12px",
                    border: "none"
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
