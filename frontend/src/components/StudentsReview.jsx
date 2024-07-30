// Testimonial.js
import TestimonialCard from "../utilities/TestimonialCard";

export default function StudentsReview() {
  const testimonialData = [
    {
      name: "Aaron Dessner",
      company: "Microsoft",
      image: "../images/pfp.jpg",
      logo: "https://developer.microsoft.com/_devcom/images/logo-ms-social.png",
      testimony:
        "Lorem Ipsum courses we have? lorem ipsum Loremdiorigh vodfjv idfjbvid dfjbvlsdjfvb sjdfvjsjdbfvkjsdfivsj sidjfsi isjdbfisbdfi sidjfbisjbdf isdjfbsijdffsd sdøjhsøjdhf sjdbfsjdfijs sdjfbisjdfsu sjdfsihjf ssdjhgfsø sdjf",
    },
    {
      name: "Jane Doe",
      company: "Apple",
      image: "../images/pfp.jpg",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0mpcTWy4WSOrDf5m5M1x4fCNM9VhpaHvMnOCDk8YNKeGlrC31yNo4RSomQ3mTojQuEw&usqp=CAU",
      testimony:
        "Lorem Ipsum courses we have? lorem ipsum Loremdiorigh vodfjv idfjbvid dfjbvlsdjfvb sjdfvjsjdbfvkjsdfivsj sidjfsi isjdbfisbdfi sidjfbisjbdf isdjfbsijdffsd sdøjhsøjdhf sjdbfsjdfijs sdjfbisjdfsu sjdfsihjf ssdjhgfsø sdjf",
    },
  ];

  return (
    <>
      <h1 className=" text-start font-bold text-[25px] mt-5 mb-5 ml-[5%]">
        Hear from our students
      </h1>
      <div className="flex flex-col flex-wrap justify-between md:flex-row">
        {testimonialData.map((data, index) => (
          <TestimonialCard
            key={index}
            name={data.name}
            company={data.company}
            image={data.image}
            logo={data.logo}
            testimony={data.testimony}
          />
        ))}
      </div>
    </>
  );
}
