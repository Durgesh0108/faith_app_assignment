import React from "react";
import {
	FaRegArrowAltCircleLeft,
	FaRegArrowAltCircleRight,
} from "react-icons/fa";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import { Card, CardContent } from "@/components/ui/card";

const Review = ({ reviews }) => {
	return (
		<div className="w-full bg-slate-200 px-20 h-72 py-12 flex justify-between items-center">
			<FaRegArrowAltCircleLeft className="text-2xl" />
			<div className="w-1/2 flex flex-col items-center gap-4">
				<p className="font-bold text-xl text-center">{reviews.text}</p>
				<div className="avatar flex gap-2 items-center">
					<img
						src="./images/nityanad.jpg"
						alt=""
						className="rounded-full w-10"
					/>
					<div className="user">
						<p className="name font-semibold text-xs mb-2">
							{reviews.reviewer_name}
						</p>
						<p className="designation font-medium text-xs">
							{reviews.reviewer_designation}
						</p>
					</div>
				</div>
			</div>
			<FaRegArrowAltCircleRight className="text-2xl" />
			{/* <Carousel>
				<CarouselContent className="flex justify-center items-center">
					<CarouselItem>
						<div className="w-1/2 flex flex-col justify-center items-center gap-4">
							<p className="font-bold text-xl text-center">
								{reviews.text}
							</p>
							<div className="avatar flex gap-2 items-center">
								<img
									src="./images/nityanad.jpg"
									alt=""
									className="rounded-full w-10"
								/>
								<div className="user">
									<p className="name font-semibold text-xs">
										{reviews.reviewer_name}
									</p>
									<p className="designation font-medium text-xs">
										{reviews.reviewer_designation}
									</p>
								</div>
							</div>
						</div>
					</CarouselItem>
				</CarouselContent>
				<CarouselNext />
				<CarouselPrevious />
			</Carousel> */}
			
		</div>
	);
};

export default Review;
