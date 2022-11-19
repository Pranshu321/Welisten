import React from "react";
import styled from "styled-components";
import card from "../assets/card.png";
import signupBackground from "../assets/signupBackground.png";
import Button from "./Button";

export default function SignUp() {
  return (
    <Section className="flex gap j-between">
      <div className="content text-center flex flex-row gap-5">
        <h2 className="font-semibold">Give Your Valuevale Feedback to us 😁</h2>
        <button style={{
          padding: "0.7rem 1.3rem",
          backgroundColor: "#61C0BF",
          color: "white",
          border: "none",
          borderRadius: "0.5rem",
          fontS: "1.1rem",
          fontWeight: "bolder",
          cursor: "pointer",
        }}> Feedback </button>
      </div>
    </Section>
  );
}
const Section = styled.section`
  background: #FFB6B9;
  background-size: contain;
  margin: 0;
  margin-bottom: 8rem;
  max-width: 100vw;
  overflow: hidden;
  .content {
    padding: 8rem;
    h2 {
      font-size: 2.4rem;
    }
  }
  .image {
    img {
      height: 100%;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-bottom: 2rem;
    .content {
      padding: 2rem;
      h2 {
        font-size: 1.5rem;
      }
    }
    .image {
      display: none;
    }
  }
`;
