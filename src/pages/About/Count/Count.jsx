import React from "react";
import "./Count.css";
import CountUp from "react-countup";
import { Container } from "react-bootstrap";

const Count = () => {
  return (
    <div className="count-area">
      <div className="count-bg-overlay"></div>
      <Container>
        <div className="all-count">
          <div className="single-count">
            <CountUp end={28} enableScrollSpy={true} />
            <p>Years of Foundation</p>
          </div>
          <div className="single-count">
            <CountUp end={22} enableScrollSpy={true} />
            <span>K</span>
            <p>Satisfied Clients</p>
          </div>
          <div className="single-count">
            <CountUp end={365} enableScrollSpy={true} />
            <p>Global Reach</p>
          </div>
          <div className="single-count">
            <CountUp end={56} enableScrollSpy={true} />
            <p>Awards Winning</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Count;
