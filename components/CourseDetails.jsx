import React from "react";

const CourseDetails = ({ fees, content }) => {
	return (
		<div className="bg-purple-50 w-full p-12 flex flex-col gap-6">
			<div className="font-semibold">
				<p className="text-sm">Course fees</p>
				<span className="text-4xl">
					{fees.currency === "INR" ? "₹" : "$"}
					{fees.amount}
				</span>
			</div>
			<div>
				<h2 className="font-semibold mb-2">What's included:</h2>
				<div className="flex flex-col gap-1">
					<div>
						<span></span>
						<p>{content.on_demand_videos} on-demand videos</p>
					</div>
					<div>
						<span></span>
						<p>{content.live_stream} live stream sessions</p>
					</div>
					{content.live_qa_sessions && (
						<div>
							<span></span>
							<p>Live Q&A sessions with Nityanand Charan Das</p>
						</div>
					)}
					{content.whatsapp_community && (
						<div>
							<span></span>
							<p>An Active Whatsapp Community</p>
						</div>
					)}
				</div>
			</div>
			<button className="px-10 py-2 bg-purple-700 text-white rounded-full">
				Register today
			</button>
		</div>
	);
};

export default CourseDetails;
