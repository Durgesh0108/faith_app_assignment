import React from "react";
import { FaCheck } from "react-icons/fa";

const KeyTopics = ({ keyTopics }) => {
	return (
		<div className=" flex flex-col gap-4 ">
			<h1 className="font-bold text-3xl ">Key Topics Covered</h1>
			<div className="flex flex-col gap-4 text-justify">
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Quas, error. Aliquam id aperiam velit eum voluptatibus nemo
					magni facere unde maxime nulla soluta labore illo maiores
					eveniet, veniam cupiditate! Quidem ipsa rerum, deserunt
					reprehenderit velit corporis accusamus aperiam fugiat sunt
					molestiae dolores pariatur vero optio!
				</p>
				<ul className="flex flex-col gap-4">
					{keyTopics.map((keyTopic) => (
						<li className="">
							<div className="flex items-center gap-6">
								<FaCheck className="" />
								<span className="font-bold">
									{keyTopic.header}{" "}
								</span>
							</div>
							<span>{keyTopic.message}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default KeyTopics;
