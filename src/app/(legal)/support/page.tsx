import type { Metadata } from "next";
import { A, H2, H3, LegalHeader, P } from "@/components/prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: "Help with Heem: frequently asked questions and how to contact us.",
};

const mail = <A href={`mailto:${site.email}`}>{site.email}</A>;

export default function SupportPage() {
  return (
    <>
      <LegalHeader title="Support" />
      <P>
        Heem finds second-hand furniture that matches your style. If something is not working, email {mail} and
        we will get back to you.
      </P>

      <H2>Frequently asked</H2>

      <H3>Where does Heem work?</H3>
      <P>
        Heem currently covers Greater Stockholm, Sweden. Listings come from Tradera, Blocket, Facebook
        Marketplace and our retail partner Mjuk, and prices are in SEK. You can browse from anywhere, but the
        items are in Stockholm.
      </P>

      <H3>My feed is taking a long time to load</H3>
      <P>
        The first feed after you finish the style quiz is built for you from scratch: we search several
        marketplaces, rank the results against your style, and generate room images. This can take up to about
        90 seconds. After that, feeds load quickly.
      </P>

      <H3>Are the room images real photos?</H3>
      <P>
        No. Images marked AI Generated are created by AI to show roughly how a piece might look in a room. They
        are approximations: colour, scale and materials will differ from the real item. The seller&apos;s own
        photos are always shown too.
      </P>

      <H3>How do I report an image or listing?</H3>
      <P>Tap the report control on any generated image or listing detail screen. Reports go straight to us and we review them.</P>

      <H3>I bought something and there is a problem</H3>
      <P>
        Heem does not sell anything or handle payment. Purchases happen on the marketplace or retailer you were
        taken to, so their support team handles orders, delivery, returns and refunds. We can help you work out
        who to contact.
      </P>

      <H3>How do I turn off notifications?</H3>
      <P>
        Profile → New item alerts. If it shows &ldquo;Blocked&rdquo;, notifications were turned off for Heem at
        the system level; tapping the row opens Settings.
      </P>

      <H3>How do I delete my account?</H3>
      <P>
        Profile → Delete account, or see our <A href="/delete-account">account deletion page</A>.
      </P>

      <H2>Contact</H2>
      <P>{mail}. We aim to reply within two working days.</P>
    </>
  );
}
