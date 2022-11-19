import React from "react";
import styled from "styled-components";
import { FaChevronCircleRight } from "react-icons/fa";

import about from "../assets/about.png";
import Button from "./Button";
export default function AboutUs() {
  return (
    <Section id="about" className="flex a-center gap">
      <div className="content flex column gap">
        <div className="title-container flex column j-center a-center gap-1">
          <div className="subtitle subdue">
            <h3 className="text-3xl">Why choose WeListen?</h3>
          </div>
          <div className="title">
            <h2 className="text-2xl">Uncover a new ’you’</h2>
          </div>
        </div>
        <div className="flex gap">
          <div className="info flex column gap a-start j-center">
            <p className="text-2xl">Talk to the best Experts</p>
            <p className="text-xl">
              Cause there is growth in discomfort. Treat Anxiety, stress or
              depression. You provide your preferences, we’ll take care of the
              rest.
            </p>
            <Button text="Find an expert match" icon={<FaChevronCircleRight />} />
          </div>
          <div className="rounded-md">
            <img
              src={
                "https://www.news-medical.net/images/Article_Images/ImageForArticle_22028_16430272124432966.jpg"
              }
              alt="about"
              className="width rounded-lg"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .title-container {
      text-align: center;
    }
  }
`;
