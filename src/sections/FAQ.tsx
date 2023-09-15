"use client";
const faqData = [
  {
    qID: 1,
    question: "Are there any pre-requisites for the event?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio vitae cum culpa omnis corporis? Adipisci consequuntur tempore quaerat omnis sit.",
  },
  {
    qID: 2,
    question:
      " Are the points earned during the course of the event redeemable?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio vitae cum culpa omnis corporis? Adipisci consequuntur tempore quaerat omnis sit.",
  },
  {
    qID: 3,
    question: "What do we need to bring to the venue?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio vitae cum culpa omnis corporis? Adipisci consequuntur tempore quaerat omnis sit.",
  },
  {
    qID: 3,
    question:
      "Do we need to report to the venue throughout the three days of the event?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio vitae cum culpa omnis corporis? Adipisci consequuntur tempore quaerat omnis sit.",
  },
  {
    qID: 3,
    question: "What do we get at the end of the 3 days?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio vitae cum culpa omnis corporis? Adipisci consequuntur tempore quaerat omnis sit.",
  },
];
import FAQList from "../components/FAQList";
export default function FAQ() {
  return (
    <div className="faq-container w-full min-h-[100vh] h-full flex justify-center items-center">
      <div className="w-[80%] h-fit p-4 md:p-24 pt-10 md:pt-20 bg-[#8A61FF33] flex flex-col">
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
