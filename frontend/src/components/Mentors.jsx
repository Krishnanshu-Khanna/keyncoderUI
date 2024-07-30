import MentorCard from "../utilities/MentorCard";

function Mentors() {
  return (
    <section className=" pt-28 dark:pt-0 bg-[#1d1534] dark:bg-[#131313] ">
      <h1 className="text-[50px] text-white font-bold md:text-5xl font-sans text-center">
        Our Mentors
      </h1>
      <p className="mt-4 text-[#8A8A8A] text-center text-base md:text-lg">
        Lorem Ipsum courses we have? lorem ipsum
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6 md:gap-12 mt-8 md:mt-12">
        <MentorCard />
        <MentorCard />
      </div>
    </section>
  );
}

export default Mentors;
