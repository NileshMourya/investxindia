import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const data = [
  {
    question: "Is a lower NAV always better? Does it mean the fund is cheaper?",
    answer: `No, the NAV by itself doesn’t tell you whether a fund is good or inexpensive.
             A lower NAV does not imply better value. What really matters are factors
             like the fund’s performance history, consistency, expense ratio, and how
             well it fits your financial goals. A fund with a ₹10 NAV and one with a
             ₹100 NAV can both perform well or poorly depending on their portfolio and
             management quality.`,
  },
  {
    question: "How frequently should I review my mutual fund portfolio?",
    answer: `It’s advisable to review your investments at least once a year or whenever
             there is a major life event such as marriage, a job change, or new financial
             goals. Avoid tracking NAVs daily, as this can lead to impulsive decisions.
             Focus instead on long-term performance and goal alignment. Periodic reviews
             help keep your portfolio on course.`,
  },
  {
    question:
      "What is the real cost difference between Direct and Regular mutual fund plans?",
    answer: `The expense ratio gap is usually around 0.5% to 1% annually. For example, on a
             ₹1 lakh investment growing at 12% per year, an extra 0.75% in expenses could
             reduce your final corpus by roughly ₹2–3 lakhs over 20 years. That said,
             Regular plans include advisory support, ongoing guidance, and portfolio
             reviews that may help investors avoid costly mistakes. The right choice
             depends on how comfortable you are managing investments on your own.`,
  },
  {
    question: "Is it possible to pause or discontinue a SIP whenever I want?",
    answer: `Yes, SIPs can be paused or stopped at any time. However, discontinuing them
             during market declines may cause you to miss the benefit of buying units
             at lower prices. SIPs tend to work best when maintained consistently over
             the long term. If cash flow is tight, reducing the SIP amount may be a
             better option than stopping it entirely.`,
  },
  {
    question: "What if I need funds before reaching my investment goal?",
    answer:
      "Mutual funds are generally liquid, allowing you to redeem units whenever needed (except for certain close-ended schemes). However, withdrawing from equity funds within one year can attract short-term capital gains tax. For goals with a time horizon of under three years, debt or hybrid funds may be more suitable. Keeping a separate emergency fund can help avoid early withdrawals.",
  },
  {
    question: "Are mutual funds safe, or is it possible to lose everything?",
    answer:
      "Mutual funds are linked to market performance and involve varying degrees of risk. While short-term losses are possible—especially in equity funds during market downturns—losing your entire investment is highly unlikely in well-diversified funds. Debt funds also carry risks related to credit quality and interest rates. Investing according to your risk tolerance, staying invested long term, and diversifying across fund types and fund houses helps manage risk effectively.",
  },
];

export function AccordionDemo() {
  return (
    <>
      <section className="w-full py-14 px-4 sm:px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-2xl sm:text-3xl text-[#0b2b7f] font-semibold">
                Frequently Asked Questions
              </h2>
            </div>
          </div>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {data.map((item, id) => (
            <AccordionItem key={id} value={`item-${id + 1}`}>
              <AccordionTrigger className="cursor-pointer text-[#0b2b7f] font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-sm text-gray-600">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}

export default AccordionDemo;
