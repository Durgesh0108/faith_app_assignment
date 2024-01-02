import React from 'react'
import AboutCourse from "@/components/AboutCourse";
import AboutInstructor from "@/components/AboutInstructor";
import CourseDetails from "@/components/CourseDetails";
import CourseExpectation from "@/components/CourseExpectation";
import HeroImage from "@/components/HeroImage";
import KeyTopics from "@/components/KeyTopics";
import Review from "@/components/Review";
import CourseNavigation from "@/components/courseNavigation";

const CourseOverview = ({data}) => {
  return (
		<main className="flex min-h-screen flex-col text-black font-serif gap-4">
			<HeroImage data={data} />
			<div className="px-32 flex flex-col gap-8 mb-16">
				<div className="grid grid-cols-2 gap-8">
					<div className="flex flex-col gap-4">
						<CourseNavigation />
						<AboutCourse aboutCourse={data.course.about} />
						<CourseExpectation
							expectations={data.course.what_to_expect}
						/>
						<KeyTopics keyTopics={data.course.key_topics} />
					</div>
					<div className="">
						<CourseDetails
							fees={data.course.fee}
							content={data.course.inclusions}
						/>
					</div>
				</div>
				<AboutInstructor
					about={data.about_instructor}
					social={data.instructor.social_media}
				/>
			</div>
			<Review reviews={data.testimonial}/>
		</main>
  );
}

export default CourseOverview
