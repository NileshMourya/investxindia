import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const data = [
  {
    question: "Is a lower NAV better? Does it mean the fund is cheaper?",
    answer: `No, NAV alone doesn t indicate if a fund is better or cheaper. A
            lower NAV doesn t mean better value. What matters is the fund s
            performance, consistency, expense ratio, and alignment with your
            goals. A ₹10 NAV and ₹100 NAV fund can both be good or bad depending
            on their underlying portfolio and management.`,
  },
  {
    question: "How often should I review my mutual fund investments?",
    answer: `Review your portfolio at least once a year or when there are significant life changes (marriage, job change, new goals). Avoid checking NAV daily as it can lead to emotional decisions. Focus on long-term performance and whether your funds are still aligned with your goals. Regular reviews help ensure your portfolio stays on track.`,
  },
  {
    question:
      "What's the actual cost difference between Direct and Regular plans?",
    answer: `The expense ratio difference typically ranges from 0.5% to 1% per year. On a ₹1 lakh investment growing at 12% annually, a 0.75% higher expense ratio could mean approximately ₹2-3 lakhs less over 20 years. However, Regular plans provide professional guidance, behavioral support, and periodic reviews that can help avoid costly mistakes. The value depends on whether you need ongoing support or can manage independently.`,
  },
  {
    question: "Can I pause or stop my SIP anytime?",
    answer: `Yes, you can pause or stop your SIP anytime. However, stopping during market downturns means missing opportunities to buy units at lower prices. SIPs work best when continued consistently over the long term. If you need to pause due to financial constraints, consider reducing the SIP amount instead of stopping completely.`,
  },
  {
    question: "What happens if I need money before my goal timeline?",
    answer:
      "Mutual funds offer liquidity - you can redeem your units anytime (except in certain close-ended schemes). However, redeeming equity funds within 1 year may result in short-term capital gains tax. For goals less than 3 years away, consider debt or hybrid funds. Always maintain an emergency fund separately to avoid premature redemptions.",
  },
  {
    question: "Are mutual funds safe? Can I lose all my money?",
    answer:
      "Mutual funds are market-linked products and carry market risk. While you can lose money, especially in equity funds during market downturns, losing all your money is extremely unlikely in diversified equity funds. Debt funds carry credit and interest rate risks. The key is to invest according to your risk profile, stay invested for the long term, and diversify across fund categories and asset management companies.",
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
