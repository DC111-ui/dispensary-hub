export type Testimonial = {
  quote: string;
  authorName: string;
  authorRole: string;
  clubName: string;
  clubLocality?: string;
};

export type ClubLogo = {
  name: string;
};

/**
 * PLACEHOLDER DATA.
 *
 * LeafLedger has real pilot/beta clubs running the product today, but their
 * quotes, names, and logos are not yet collected in this codebase. Do not
 * ship this file as-is: replace every entry below with a real quote and a
 * real club name, with that club's explicit consent to be named publicly,
 * before the Social Proof section goes live.
 */
export const PLACEHOLDER_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Replace with a real quote from a pilot club, ideally about a specific moment: an inspection that went smoothly, a stocktake that used to take a day and now doesn't, etc.",
    authorName: "Pilot club owner name",
    authorRole: "Owner",
    clubName: "Pilot club name",
    clubLocality: "City, South Africa",
  },
  {
    quote:
      "Replace with a second real quote, from a different role (e.g. a compliance officer or manager) to show LeafLedger works for more than one kind of user.",
    authorName: "Pilot club staff name",
    authorRole: "Compliance Officer",
    clubName: "Pilot club name",
    clubLocality: "City, South Africa",
  },
  {
    quote:
      "Replace with a third real quote, ideally from a multi-store or growing club to support the 'grows with you' positioning.",
    authorName: "Second pilot club owner name",
    authorRole: "Owner",
    clubName: "Second pilot club name",
    clubLocality: "City, South Africa",
  },
];

/** PLACEHOLDER DATA — replace with real pilot/beta club names before shipping. */
export const PLACEHOLDER_CLUB_LOGOS: ClubLogo[] = [
  { name: "Pilot Club One" },
  { name: "Pilot Club Two" },
  { name: "Pilot Club Three" },
  { name: "Pilot Club Four" },
];
