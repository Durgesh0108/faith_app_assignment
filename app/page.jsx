import CourseOverview from "@/components/CourseOverview";
import React from "react";

const data = [
	{
		instructor: {
			name: "NITYANAND CHARAN DAS",
			social_media: {
				facebook: true,
				twitter: true,
				youtube: true,
				instagram: true,
			},
		},
		course: {
			title: "Learn key life lessons from the Gita: Mind control and conflict resolution",
			fee: {
				amount: 5000,
				currency: "INR",
			},
			inclusions: {
				on_demand_videos: 5,
				live_stream: 2,
				live_qa_sessions: true,
				whatsapp_community: true,
			},
			about: [
				{
					point: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta corrupti repellendus magni molestiae? Perspiciatis sint officiis ratione qui quae, cum esse modi! Laborum in natus dignissimos nemo. Numquam expedita praesentium, molestiae velit veritatis blanditiis officia?",
				},
				{
					point: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, excepturi. Id perferendis molestias ipsam, sit amet dolorem excepturi, totam qui vel dicta eos ea illo animi debitis quasi. Minus reprehenderit, obcaecati dolore quasi animi doloribus.",
				},
				{
					point: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, excepturi. Id perferendis molestias ipsam, sit amet dolorem excepturi, totam qui vel dicta eos ea illo animi debitis quasi. Minus reprehenderit, obcaecati dolore quasi animi doloribus.",
				},
			],
			what_to_expect: [
				{
					point: "Learn to manage your relationships",
				},
				{
					point: "Better Communication",
				},
				{
					point: "Time Management",
				},
				{
					point: "Forgiveness",
				},
			],

			key_topics: [
				{
					header: "10 Written and Audio sessions",
					message:
						"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non mollitia error doloremque, placeat facere iste incidunt dignissimos sunt nobis est!",
				},
				{
					header: "Intuitive exercises and homework",
					message:
						"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non mollitia error doloremque, placeat facere iste incidunt dignissimos sunt nobis est!",
				},
				{
					header: "A Handy references",
					message:
						"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non mollitia error doloremque, placeat facere iste incidunt dignissimos sunt nobis est!",
				},
				{
					header: "Expert techniques",
					message:
						"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non mollitia error doloremque, placeat facere iste incidunt dignissimos sunt nobis est!",
				},
			],
		},
		about_instructor:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit Molestiae est quod, obcaecati praesentium perferendis voluptate sint numquam ducimus fugiat autem. Repudiandae aliquam, illum eligendi dolorem totam eius excepturi nisi eos inventore repellat? Facilis temporibus, est labore tempora quo rem esse harum iste quisquam! Sapiente, commodi numquam cupiditate nam fugiat impedit?",
		testimonial: {
			text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
			reviewer_name: "Durgesh Prajapati",
			reviewer_designation: "Full Stack Developer",
		},
	},
];

const Home = () => {
	return <CourseOverview data={data[0]} />;
};

export default Home;
