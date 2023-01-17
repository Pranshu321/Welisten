import React from "react";
import styled from "styled-components";
import { FaChevronCircleRight } from "react-icons/fa";
import home from "../assets/home.png";
import badgePercent from "../assets/badge-percent.png";
import Button from "./Button";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

export default function Home() {
	const navi = useHistory();
	const provider = new GoogleAuthProvider();
	const login = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				navi.push("/dashboard");
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});
	};
	return (
		<Section className="flex j-center a-center gap">
			<div className="content flex column gap-2">
				<div className="subtitle">
					<h3
						style={{ color: "#FFB6B9" }}
						className="flex text-xl font-bold a-center gap-1 blue"
					>
						<span>
							<MdOutlineHealthAndSafety size={30} color={"#FFB6B9"} />
						</span>
						Mental treatment made easy
					</h3>
				</div>
				<div className="title">
					<h1>Discover, retreat and relax yourself</h1>
				</div>
				<div className="description">
					<p className="subdue">
						Experienced counsellor allows you to monitor your mind pressures
						without limits and improve your productivity.
					</p>
				</div>
				<div className="buttons flex gap-1">
					<div onClick={login}>
						<Button text="Try Now" icon={<FaChevronCircleRight />} />
					</div>
					<Button text="Read Stories" subduedButton />
				</div>
			</div>
			<div className="">
				<img
					src={
						"https://user-images.githubusercontent.com/86917304/202763702-52164848-bf5e-47cf-a689-bd11c2041f85.png"
					}
					alt="home"
					className="half-width"
				/>
			</div>
		</Section>
	);
}

const Section = styled.section`
	@media screen and (min-width: 280px) and (max-width: 1080px) {
		.subtitle {
			h3 {
				flex-direction: row;
			}
		}
		.buttons {
			flex-direction: row;
			margin: 2rem 0;
			gap: 1rem;
		}
	}
`;
