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
 * PLACEHOLDER DATA — deliberately written to read as an obvious placeholder
 * on the live site (not a fabricated quote), since no real pilot-club
 * testimonials exist yet. Replace every entry with a real quote, with that
 * person's explicit consent to be named publicly, as soon as one exists —
 * and drop the "Placeholder · not live copy" caption at that point too.
 */
export const PLACEHOLDER_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Placeholder quote — replace before launch. This space will show a real quote from a pilot club owner once we have one to publish.",
    authorName: "Pilot Club Owner",
    authorRole: "Placeholder",
    clubName: "not live copy",
  },
  {
    quote:
      "Placeholder quote — replace before launch. This space will show a real quote from a pilot club staff member once we have one to publish.",
    authorName: "Pilot Club Staff Member",
    authorRole: "Placeholder",
    clubName: "not live copy",
  },
  {
    quote:
      "Placeholder quote — replace before launch. This space will show a real quote from a second pilot club once we have one to publish.",
    authorName: "Second Pilot Club Owner",
    authorRole: "Placeholder",
    clubName: "not live copy",
  },
];

/** PLACEHOLDER DATA — replace with real pilot/beta club names before shipping. */
export const PLACEHOLDER_CLUB_LOGOS: ClubLogo[] = [
  { name: "Pilot Club One" },
  { name: "Pilot Club Two" },
  { name: "Pilot Club Three" },
  { name: "Pilot Club Four" },
];
