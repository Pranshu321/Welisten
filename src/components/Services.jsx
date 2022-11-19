import React from "react";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import {FaUserMd} from 'react-icons/fa';
import {BsCalendarPlusFill} from 'react-icons/bs';
import {MdPrivacyTip} from 'react-icons/md';



export default function Services() {
  const servicesData = [
    {
      mage: <FaUserMd size={50} color={"#FFB6B9"} />,
      title: "One to One Counselling",
      descrption:
        "Share your candid thoughts, experiences and feelings anonymously.",
    },
    {
      mage: <BsCalendarPlusFill size={50} color={"#FFB6B9"} />,
      title: "Share Your Experiences",
      descrption:
        "An open platform for all to share your candid emotions, experiences and suggestions.",
    },
    {
      mage: <MdPrivacyTip size={50} color={"#FFB6B9"} />,
      title: "Privacy First",
      descrption:
        "WeListen provides a safe space for users to meet experts and audience anonymously.",
    },
  ];
  return (
    <Section className="flex column j-center a-center gap">
      <div className="title-container flex column gap-1">
        <div className="title text-center ">
          <h2 className="text-3xl">How is WeListen different?</h2>
        </div>
        <div className="text-center text-xl">
          <h3>
            Welisten has a variety of features that make it the best place to
            release your tension and let you calm
          </h3>
        </div>
      </div>
      <div className="services flex j-center a-center gap">
        {servicesData.map(({ mage, title, descrption }) => {
          return (
            <div className="service text-center flex column gap-1" key={title}>
              <div className="flex justify-center items-center">{mage}</div>
              <h3 className="title">{title}</h3>
              <p className="description subdue">{descrption}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
const Section = styled.section`
  .services {
    padding: 0 5rem;
    gap: 10rem;
    .service {
      .title {
        font-size: 1.5rem;
      }
      .description {
        font-size: 1rem;
        line-height: 1.2rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .services {
      padding: 2rem;
      gap: 3rem;
    }
  }
`;
