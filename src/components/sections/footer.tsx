import { Wordmark } from "@/components/wordmark";

export function Footer() {
  return (
    <footer id="site-footer" className="mt-auto pt-6 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:py-14">
      <div className="container-page">
        <Wordmark />
      </div>
    </footer>
  );
}
