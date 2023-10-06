"use client";

import { Watch } from "@prisma/client";

import { Navigation, Pagination } from "swiper/modules";

import Image from "next/image";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import Inline from "yet-another-react-lightbox/plugins/inline";

import "yet-another-react-lightbox/styles.css";
import { Button } from "./ui/button";

type WatchDetailsProps = Watch;

export function WatchDetailsComponent({
  name,
  description,
  images,
  videos,
  price,
}: WatchDetailsProps) {
  const [open, setOpen] = useState(false);

  const videosMedia = videos.map((video) => {
    console.log(video);
    return new Object({
      type: "video",
      poster: "/logo.svg",
      sources: [
        {
          src: video,
          type: "video/mp4",
        },
      ],
    });
  });

  const imagesMedia = images.map((image) => new Object({ src: image }));
  const media: any = [...imagesMedia, ...videosMedia];

  return (
    <div>
      <Navbar />
      <div className="rounded-full">
        <div className="min-h-screen max-w-[1300px] w-[100%] relative mx-auto px-4 py-4 flex justify-end flex-wrap gap-4">
          <div className="w-full h-full gap-4">
            <div className="flex w-full min-h-screen place-items-center">
              <div className="flex tablet:block">
                <div
                  className="w-1/2 tablet:w-full tablet:pt-20  cursor-pointer hover:brightness-75 transition-all"
                  onClick={() => setOpen(true)}
                >
                  <Image
                    className="h-[650px] tablet:h-2/3 object-cover rounded-lg"
                    src={images[0]}
                    alt={name}
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="ml-12 tablet:ml-0 tablet:pt-7">
                  <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    {name}
                  </h1>
                  <p className="leading-7 [&:not(:first-child)]:mt-6 mb-10">
                    {description}
                  </p>
                  <p className="leading-7 [&:not(:first-child)]:mt-6 mb-10">
                    {price}
                  </p>

                  <div>
                    <Button className="w-full">Comprar</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        styles={{
          slide: {
            backgroundColor: "hsl(0, 0%, 10%)",
          },
        }}
        plugins={[Video]}
        slides={[...media]}
      />

      <Footer />
    </div>
  );
}
