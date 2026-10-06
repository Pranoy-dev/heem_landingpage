import Image, { type StaticImageData } from "next/image";
import feed from "@/assets/screens/feed.png";
import quiz from "@/assets/screens/quiz.png";
import room from "@/assets/screens/room.png";
import listing from "@/assets/screens/listing.png";
import saved from "@/assets/screens/saved.png";
import style from "@/assets/screens/style.png";

function Screenshot({ src, alt, preload = false }: { src: StaticImageData; alt: string; preload?: boolean }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      preload={preload}
      placeholder="blur"
      sizes="280px"
      className="object-cover object-top"
    />
  );
}

export function FeedScreen({ preload }: { preload?: boolean }) {
  return (
    <Screenshot
      src={feed}
      preload={preload}
      alt="Heem home feed showing an AI-generated living room with a beige oval rug from Blocket for 8 500 kr, marked 88% match"
    />
  );
}

export function QuizScreen() {
  return (
    <Screenshot
      src={quiz}
      alt="Style quiz, round 1 of 4: pick the room that feels most like you, from four interior photos"
    />
  );
}

export function StyleScreen() {
  return (
    <Screenshot
      src={style}
      alt="Quiz result: your style is Warm Mediterranean Revival, with tags for plaster, terracotta, arches, olive and linen"
    />
  );
}

export function RoomScreen() {
  return (
    <Screenshot
      src={room}
      alt="Where should we start? Pick a room for your first collection: bedroom, kitchen, office or living room"
    />
  );
}

export function SavedScreen() {
  return (
    <Screenshot
      src={saved}
      alt="Saved tab with 13 liked second-hand pieces, including a walnut coffee table and a rattan armchair"
    />
  );
}

export function ListingScreen() {
  return (
    <Screenshot
      src={listing}
      alt="A listing for a rustic coffee table on Blocket, 7 000 kr, with a View on Blocket button"
    />
  );
}
