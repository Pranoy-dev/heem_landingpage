import type { Metadata } from "next";
import { A, B, H2, LegalHeader, P, UL } from "@/components/prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "What data Heem collects, who processes it, why, and how you can delete it.",
};

const mail = <A href={`mailto:${site.email}`}>{site.email}</A>;

export default function PrivacyPage() {
  return (
    <>
      <LegalHeader title="Privacy Policy" effective="16 September 2026" />
      <P>
        Heem helps you find second-hand furniture that matches your style. This policy explains what data we
        collect, who processes it, why, and how you can delete it.
      </P>
      <P>Heem is operated from Sweden and its users are in the EU, so this policy is written to the GDPR.</P>

      <H2>Who is responsible for your data</H2>
      <P>
        The data controller is {site.company.name} (organisationsnummer {site.company.orgNumber}),{" "}
        {site.company.address}. Contact: {mail}.
      </P>
      <P>
        Every processor named below is engaged under a written data-processing agreement requiring protection
        equivalent to that described in this policy.
      </P>

      <H2>What we collect</H2>
      <UL>
        <li>
          <B>Account information.</B> When you sign in (with Apple, Google, or email) our authentication
          provider, Clerk, stores your email address and name. We identify you in our own systems only by an
          opaque user ID.
        </li>
        <li>
          <B>Style profile.</B> Your style quiz answers and chosen room, used to personalise your feed.
        </li>
        <li>
          <B>Saved listings and app activity.</B> Listings you save, and (only if you agree when we ask) a
          limited set of product events (features you use, errors and crashes), collected through PostHog,
          hosted in the EU. Analytics are off until you say yes, we do not record your taps or screen contents,
          and you can change your mind at any time in Profile.
        </li>
        <li>
          <B>Notification settings.</B> If you enable alerts, a push token for your device and your notification
          preferences.
        </li>
      </UL>

      <H2>What we do not do</H2>
      <UL>
        <li>We do not sell your data.</li>
        <li>We do not show ads.</li>
        <li>We do not track you across other companies&apos; apps or websites.</li>
        <li>We do not ask for photos of you or your home.</li>
        <li>We do not share your profile with the marketplaces whose listings we display.</li>
      </UL>

      <H2>AI-generated images</H2>
      <P>
        Heem creates the room images you see with AI: a generated room in your style, with furniture rendered
        into it. Those images are built from your style and room-type choices and from the marketplace listings
        themselves. They are not made from photos of you or your home, and we do not collect photos from you.
      </P>
      <P>That work is done, via the Vercel AI Gateway, by:</P>
      <UL>
        <li>OpenAI (GPT Image 2), which generates the room your furniture is placed into.</li>
        <li>Google (Gemini 3.1 Flash Image, on Vertex AI), which renders furniture into that room image.</li>
        <li>Anthropic (Claude Haiku 4.5), which describes listings and checks a generated image is usable.</li>
        <li>Modal (Grounding DINO), which finds the furniture in a generated image so it can be tapped.</li>
      </UL>
      <P>
        Images marked &ldquo;AI Generated&rdquo; in the app are approximations, not photographs. You can report
        any generated image you think is wrong or inappropriate from the app itself.
      </P>

      <H2>Other third-party services</H2>
      <P>
        We use Clerk (authentication), Supabase (data storage, hosted in the EU), Railway (application hosting),
        and PostHog EU (product analytics and crash reporting). Furniture listings shown in the app come from
        public marketplaces (Tradera, Blocket, Facebook Marketplace) and from Mjuk, a retail partner whose links
        carry a referral tag. Opening a listing takes you to that marketplace or retailer, where its own privacy
        policy applies. Purchases, payment and any dispute happen there, not in Heem.
      </P>

      <H2>Legal bases</H2>
      <UL>
        <li>
          <B>Contract.</B> Your account, style profile, saved listings and feed. These are the service you asked
          for.
        </li>
        <li>
          <B>Consent.</B> Push notifications and product analytics. Each can be withdrawn separately, in the app.
        </li>
        <li>
          <B>Legitimate interests.</B> Security, abuse prevention, and keeping the service working.
        </li>
      </UL>

      <H2>International transfers</H2>
      <P>
        Our database and analytics are hosted in the EU. The AI services that generate room images operate in
        the United States. They receive your style and room-type choices and the marketplace listing data needed
        to produce an image (no personal photos) under the relevant transfer safeguards.
      </P>

      <H2>Data retention and deletion</H2>
      <P>
        Your data is kept while your account exists. You can permanently delete your account, including your
        style profile, saved listings, generated images and notification data, at any time from Profile → Delete
        account in the app, or via our <A href="/delete-account">account deletion page</A>. Deletion is
        immediate and cannot be undone. Backups roll off within 30 days.
      </P>

      <H2>Your rights</H2>
      <P>
        Under the GDPR you may request access to, correction of, or erasure of your personal data, object to or
        restrict processing, and request a copy of your data. Email {mail} and we will respond within 30 days.
        You also have the right to complain to your national supervisory authority; in Sweden, that is
        Integritetsskyddsmyndigheten (IMY).
      </P>

      <H2>Children</H2>
      <P>Heem is not directed at children under 13.</P>

      <H2>Changes</H2>
      <P>
        If this policy changes we will update this page and the effective date above. Material changes to how we
        use your data will be surfaced in the app.
      </P>

      <H2>Contact</H2>
      <P>Questions, rights requests or deletion requests: {mail}</P>
    </>
  );
}
