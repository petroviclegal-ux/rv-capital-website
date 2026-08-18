/**
 * Heritage / representative transaction experience.
 *
 * ⚠️ MANDATORY ACCURACY RULE (do not violate):
 * Every transaction below was executed by RV Capital's FOUNDING TEAM during
 * their prior tenure at Hefestos Capital d.o.o., Belgrade — NOT by
 * RV Capital – FZCO, which was incorporated in Dubai in 2023 and has no
 * transaction history of its own. This attribution is presented explicitly on
 * the /track-record page (heading, subtitle and footnote) and must never be
 * softened or dropped. Do not add transactions here that were not executed by
 * the founding team, and do not re-attribute these to RV Capital as a company.
 *
 * Facts are used verbatim from the client brief; do not embellish.
 */
export type Transaction = {
  deal: string;
  value: string;
  year: number;
  sector: string;
  role: string;
  // Optional note rendered as a small annotation.
  note?: string;
};

export const heritageStats = [
  { value: 'USD 11bn+', label: 'Cumulative transaction value' },
  { value: '15+', label: 'Landmark closed transactions' },
  {
    value: '#1',
    label: 'Ranked M&A & privatization advisor in Southeast Europe, 2002–2020',
  },
] as const;

export const transactions: Transaction[] = [
  {
    deal: 'Sale of Mobi 63 to Telenor',
    value: 'USD 1.9bn',
    year: 2006,
    sector: 'Telecoms',
    role: 'Co-lead sell-side advisor',
    note: 'The Banker’s “Deal of the Year,” SEE 2006',
  },
  {
    deal: 'Gazprom Neft acquisition of NIS',
    value: 'USD 1.4bn',
    year: 2008,
    sector: 'Oil & Gas',
    role: 'Advisor',
  },
  {
    deal: 'Joint venture of the Republic of Serbia with Fiat Automobiles',
    value: 'USD 960m–1,022m',
    year: 2009,
    sector: 'Automotive',
    role: 'Advisor to the Republic of Serbia',
  },
  {
    deal: 'Restructuring of Zastava Vozila Group',
    value: 'USD 434m',
    year: 2014,
    sector: 'Automotive',
    role: 'Advisor to the Republic of Serbia',
  },
  {
    deal: 'Secondary public offering of OMV Petrom shares',
    value: 'USD 770m',
    year: 2011,
    sector: 'Oil & Gas',
    role: 'Joint bookrunner',
  },
  {
    deal: 'Philip Morris acquisition of DIN',
    value: 'USD 635m',
    year: 2003,
    sector: 'Consumer / Tobacco',
    role: 'Co-lead sell-side advisor',
  },
  {
    deal: 'Stada acquisition of Hemofarm',
    value: 'USD 621m',
    year: 2006,
    sector: 'Pharmaceuticals',
    role: 'Sell-side advisor',
  },
  {
    deal: 'InBev acquisition of Apatinska Pivara',
    value: 'USD 517m',
    year: 2003,
    sector: 'Consumer / Beverages',
    role: 'Buy-side advisor',
  },
  {
    deal: 'NBG acquisition of Vojvođanska Banka',
    value: 'USD 508m',
    year: 2006,
    sector: 'Banking',
    role: 'Sell-side advisor',
  },
  {
    deal: 'Banca Intesa acquisition of Delta Banka',
    value: 'USD 463m',
    year: 2005,
    sector: 'Banking',
    role: 'Buy-side advisor',
  },
  {
    deal: 'Lukoil acquisition of Beopetrol',
    value: 'USD 240m',
    year: 2003,
    sector: 'Oil & Gas',
    role: 'Advisor to Lukoil',
  },
];
