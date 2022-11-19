import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import Button from "./Button";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
export default function Newsletter() {
  const [email, setemail] = useState("");
  function sendMail() {
    // console.log(email);
    emailjs
      .send(
        "service_hesknwi",
        "template_ibzkoaw",
        { email: email },
        "gP8sKnDLte9gp24k2"
      )
      .then(function (response) {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Successfully Subscribed");
        setemail("");
      })
      .catch((err) => {
        toast.error("Invalid Email or Server Error");
        console.log(err);
      });
  }
  return (
    <Section id="contact" className="flex shadow-2xl j-between a-center gap">
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <div className="title-container flex column gap-1">
        <h2 className="text-3xl">Contact us</h2>
        <h3 className="text-2xl">
          Want to ask something , lets connected to us.
        </h3>
      </div>
      <div className="newsletter flex j-center a-center gap-2">
        <div className="input-container flex j-center a-center gap-1">
          <AiOutlineMail />
          <input onChange={(e) => setemail(e.target.value)} type="text" placeholder="Enter your email address" />
        </div>
        <a onClick={sendMail}>
        <Button text="Send" />
        </a>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 0;
  margin-bottom: 8rem;
  background-color: #BBDED6;
  padding: 8rem;
  .newsletter {
    .input-container {
      background-color: #61C0BF;
      padding: 1rem;
      padding-right: 8rem;
      border-radius: 0.5rem;
      font-size: 1.3rem;
      color: white;
      input {
        background-color: transparent;
        border: none;
        font-size: 1.2rem;
        color: white;
        &:focus {
          outline: none;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 2rem;
    margin-bottom: 2rem;
    .newsletter {
      .input-container {
        flex-direction: row;
        padding-right: 1rem;
        input {
        }
      }
    }
  }
`;
