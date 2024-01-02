import React from "react";

const AboutCourse = ({ aboutCourse }) => {
	return (
		<div className=" flex flex-col gap-4 text-justify">
			<h1 className="font-bold text-3xl ">About the Course</h1>
			<ul className="flex flex-col gap-4">
				{aboutCourse.map((about) => (
					<li className="">{about.point}</li>
				))}
			</ul>
		</div>
	);
};

export default AboutCourse;
