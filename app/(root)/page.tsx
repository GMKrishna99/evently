import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import HeaderImg from "@/public/assets/images/hero.png";

export default function Home() {
  return (
    <>
      {/* header section */}
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Host, Connect,Celebrate:your Events,Out Platform!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Book and learn helpful tips from 3,168+ mentors in world-class
              companies with our global community
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>
          {/* header section image */}
          <Image
            src={HeaderImg}
            alt="header section image"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>
      {/* header section */}
    </>
  );
}
