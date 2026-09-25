/**
 * On-page outline for californiaforeverrealty.com.
 * Phrases follow current California-to-Las-Vegas search language.
 * Neighborhood "best for" wording is omitted so the page does not steer.
 */

export const CALIFORNIA_FOREVER_DOMAIN = "californiaforeverrealty.com";

export interface HeadingTopic {
  h3: string;
  body: string;
}

export interface HeadingSection {
  h2: string;
  topics: HeadingTopic[];
}

export const californiaForeverHeadings: HeadingSection[] = [
  {
    h2: "Moving to Las Vegas from California",
    topics: [
      {
        h3: "Las Vegas homes for sale",
        body: "Dr. Jan Duffy pulls Las Vegas listings that match your price, size, and timing. You see the address and the price, not a slogan.",
      },
      {
        h3: "Search and tour before you land",
        body: "Start with video tours. Book a showing weekend when you are ready to walk the homes.",
      },
    ],
  },
  {
    h2: "Moving to Henderson from California",
    topics: [
      {
        h3: "Henderson homes for sale",
        body: "Henderson listings include Green Valley, Inspirada, and MacDonald Highlands. Each search is by community name, square footage, and price.",
      },
      {
        h3: "What a California sale can buy in Henderson",
        body: "Send the net sheet from your California sale. Dr. Jan lines it up against Henderson homes that are for sale now.",
      },
    ],
  },
  {
    h2: "How to buy a home in Las Vegas",
    topics: [
      {
        h3: "Down payment and a 30 to 45 day close",
        body: "Your lender sets the down payment. Most financed purchases close 30 to 45 days after an accepted offer.",
      },
      {
        h3: "New construction or a resale home",
        body: "Resale homes are on the MLS now. New construction is a separate pass on incentives, lot premiums, and build time.",
      },
    ],
  },
];
