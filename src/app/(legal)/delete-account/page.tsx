import type { Metadata } from "next";
import { A, B, H2, LegalHeader, P, UL } from "@/components/prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Delete your account",
  description: "How to permanently delete your Heem account and what gets deleted.",
};

export default function DeleteAccountPage() {
  return (
    <>
      <LegalHeader title="Delete your Heem account" />
      <P>
        You can permanently delete your Heem account and everything associated with it. There are two ways to
        do it.
      </P>

      <H2>In the app (immediate)</H2>
      <UL ordered>
        <li>Open Heem and sign in.</li>
        <li>Go to Profile (bottom navigation).</li>
        <li>
          Scroll to the bottom and tap <B>Delete account</B>.
        </li>
        <li>Confirm. Deletion happens straight away and signs you out.</li>
      </UL>

      <H2>By email (if you have uninstalled the app)</H2>
      <P>
        Email <A href={`mailto:${site.email}?subject=Account%20deletion%20request`}>{site.email}</A> from the
        address you signed up with, with the subject <B>Account deletion request</B>. We will verify the request
        and delete the account within 30 days, usually much sooner, and confirm by reply.
      </P>

      <H2>What gets deleted</H2>
      <P>Permanently, and immediately on the in-app path:</P>
      <UL>
        <li>your account and sign-in identity;</li>
        <li>every AI-generated image made for you: generated room bases, furniture renders and collection images;</li>
        <li>any room photos stored from before that feature was withdrawn, if you had used it;</li>
        <li>your style profile, quiz answers and room choice;</li>
        <li>your saved listings and collections;</li>
        <li>your push notification tokens, notification settings and send history;</li>
        <li>your search and feed history;</li>
        <li>your analytics profile and event history held by PostHog, our analytics processor.</li>
      </UL>

      <H2>What is not deleted</H2>
      <UL>
        <li>
          <B>Marketplace listings themselves.</B> These are public third-party content and are not yours or ours.
          They stay in our catalogue for other users.
        </li>
        <li>
          <B>Backups,</B> which roll off automatically within 30 days.
        </li>
        <li>
          <B>Anonymised content reports.</B> If you reported an image or listing, the report itself is kept so we
          can still act on it, but your identity and anything you typed are removed from it. Deleting an account
          must not be a way to erase a safety report.
        </li>
      </UL>

      <H2>If you signed in with Apple</H2>
      <P>
        Deleting your Heem account removes all of the above. To also revoke Apple&apos;s sign-in link, open
        Settings → your name → Sign in with Apple → Heem → Stop using Apple Account on your iPhone.
      </P>

      <H2>Questions</H2>
      <P>
        <A href={`mailto:${site.email}`}>{site.email}</A>
      </P>
    </>
  );
}
