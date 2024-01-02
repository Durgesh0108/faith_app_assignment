import React from "react";

const HeroImage = ({ data }) => {
	return (
		<div className="w-full h-[400px] relative">
			<img
				src="/images/nityanandCharanDas.jpeg"
				className="w-full h-full"
			/>
			<div className="overlay absolute bottom-20 left-12 w-1/2 text-white">
				<p className="font-medium text-lg">{data.instructor.name}</p>
				<h2 className="font-semibold text-2xl">
					{data.course.title}
				</h2>
			</div>
		</div>
	);
};

// bg-gradient-to-r from-slate-500 via-slate-300 to-white
export default HeroImage;
