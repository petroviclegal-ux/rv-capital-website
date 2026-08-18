/**
 * FAQs rendered on the Home page and used to build FAQPage JSON-LD structured
 * data. Answers stay within advisory/consulting language and avoid any
 * regulated-activity claims.
 */
export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: 'How much does it cost to sell a business in the UAE?',
    answer:
      'Advisory fees for a company sale are usually a combination of a modest monthly retainer and a success fee payable on completion, expressed as a percentage of transaction value. The exact structure depends on the size and complexity of the deal. We agree fees transparently at the outset so there are no surprises, and the bulk of our compensation is tied to a successful outcome.',
  },
  {
    question: 'How long does an M&A process take?',
    answer:
      'A typical sell-side or buy-side M&A process in the UAE runs from about six to twelve months from mandate to completion, though timelines vary with the size of the business, the number of counterparties, the depth of due diligence and the regulatory approvals required. Thorough preparation before going to market is the single biggest factor in a faster, smoother process.',
  },
  {
    question: 'Do I need an M&A advisor to sell my company?',
    answer:
      'You are not required to use one, but an experienced advisor typically improves both the outcome and the certainty of a sale. An advisor prepares the business for market, runs a competitive and confidential process, brings qualified buyers to the table, and negotiates on your behalf — allowing you to keep running the company while the process is managed professionally.',
  },
  {
    question: 'How do you value a business?',
    answer:
      'We use a combination of established methods — discounted cash flow, comparable company and precedent transaction multiples, and asset-based approaches — cross-checked against what buyers in your sector are actually paying. The right method depends on the nature of the business; the goal is a defensible valuation range you can rely on in negotiations.',
  },
  {
    question: 'Is my information kept confidential?',
    answer:
      'Yes. Discretion is fundamental to how we work. Sensitive information is shared only with qualified, approved counterparties under confidentiality agreements, and a sale process can be run on a confidential basis so that staff, customers and competitors are not alerted until you choose to disclose.',
  },
  {
    question: 'Do you work on cross-border transactions?',
    answer:
      'Yes. A large share of activity in the UAE and GCC involves international buyers, sellers and capital. We regularly connect regional businesses with international counterparties and vice versa, managing the additional coordination, structuring and diligence that cross-border transactions require.',
  },
];
