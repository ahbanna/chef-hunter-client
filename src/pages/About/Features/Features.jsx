import React, { useEffect, useState } from "react";
import "./Features.css";
import { Container } from "react-bootstrap";

const Features = () => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch("features.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);
  return (
    <div className="features-area">
      <Container>
        {features.map((feature) => (
          <div class="feature-part" key={feature.number}>
            <div class="feature-count">
              <span>{feature.number}</span>
            </div>
            <div class="feature-block">
              <h4 class="feature-title">{feature.title}</h4>
              <p class="feature-desc">{feature.description}</p>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Features;
