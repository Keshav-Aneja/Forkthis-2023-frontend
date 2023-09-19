"use client";
const faqData = [
  {
    qID: 1,
    question: "Are there any pre-requisites for the event?",
    answer:
      "Create a GitHub account for yourself, and you're all set!",
  },
  {
    qID: 2,
    question:
      " Are the points earned during the course of the event redeemable?",
    answer:
      "The top 3 in the leaderboard based on points will win exciting prizes!",
  },
  {
    qID: 3,
    question: "What do we need to bring to the venue?",
    answer:"Just bring your laptop, chargers and whatever will help you focus. Don't forget to bring along your zeal to learn.",
  },
  {
    qID: 4,
    question:
      "Do we need to report to the venue throughout the three days of the event?",
    answer:
      "Nope! Your esteemed presence is only required on the first day.",
  },
  {
    qID: 5,
    question: "What do we get at the end of the 3 days?",
    answer:
      "Apart from the knowledge and feeling of accomplishment? We've got you covered with tons of cool surprises!",
  },
];
import FAQList from "../components/FAQList";
export default function FAQ() {
  return (
    <div className="faq-container z-10 w-full min-h-[100vh] h-full flex justify-center items-center lg:mt-24">
      <div className="w-[100%] h-fit p-4 md:p-24 pt-10 md:pt-20 bg-[#8A61FF33] flex flex-col">
        <div className="heading text-white text-4xl font-gilroyBlack font-bolder mb-4 text-center md:text-left">
          FAQs
        </div>
        <div className="faq_list w-full flex flex-col justify-between items-center gap-4 md:gap-2">
          {faqData.map((data) => (
            <FAQList key={data.qID} que={data.question} ans={data.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}
