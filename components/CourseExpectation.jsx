import React from "react";
import { FaCheck } from "react-icons/fa";

const CourseExpectation = ({ expectations }) => {
	return (
		<div className="flex flex-col gap-4">
			<h1 className="font-bold text-3xl">
				What to expect from the course
			</h1>
			<ul className="flex flex-col gap-2 ">
				{expectations.map((expectation) => (
					<li className="flex gap-6 items-center">
						<FaCheck />
						<span>{expectation.point}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CourseExpectation;
