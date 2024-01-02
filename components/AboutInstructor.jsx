"use client"

import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";



const AboutInstructor = ({about,social}) => {
	return (
		<div className="flex flex-col gap-6">
			<h1 className="font-bold text-3xl">About the Instructor</h1>
			<div className="flex gap-8">
				<img
					src="./images/nityanad.jpg"
					alt=""
					className="rounded-full h-32 w-32"
				/>
				<div className="grid grid-cols-2">
					<p>
						{about}
					</p>
					<p>
						{about}
					</p>
				</div>
			</div>
			<div className="social flex justify-around font-semibold text-base">
				{social.facebook && <a href="" className="flex gap-2">
					<FaFacebook color="#316FF6" className="text-2xl" />
					Facebook
				</a>}
				{social.twitter && <a href="" className="flex gap-2">
					<FaSquareXTwitter className="text-2xl" />
					Twitter
				</a>}
				{social.youtube && <a href="" className="flex gap-2">
					<FaYoutube color="red" className="text-2xl" />
					Youtube
				</a>}
				{social.instagram && <a href="" className="flex gap-2">
					<AiFillInstagram color="#c92f8a" className="text-2xl" />
					Instagram
				</a>}
			</div>
		</div>
	);
};

export default AboutInstructor;
