import Image from 'next/image';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{' '}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              pages/index.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

// pages/index.tsx
import Image from 'next/image';
import { HERO_BG_IMAGE } from '@/constants/images'; // optional
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Property App</title>
      </Head>

      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <Image
          src={HERO_BG_IMAGE}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>
    </>
  );
}

import { useState } from 'react';
import Pill from '@/components/Pill';
import { FILTER_LABELS } from '@/components/Pill';

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  return (
    <>
      {/* Filter Section */}
      <section className="container mx-auto my-8 px-4">
        <h2 className="text-xl font-semibold mb-4">Filter by:</h2>
        <div className="flex flex-wrap gap-3">
          {FILTER_LABELS.map(label => (
            <Pill
              key={label}
              label={label}
              selected={selectedFilter === label}
              onClick={() =>
                setSelectedFilter(selectedFilter === label ? null : label)
              }
            />
          ))}
        </div>
      </section>
    </>
  );
}

import { PROPERTYLISTINGSAMPLE } from '@/constants/index';

{
  /* Listing Section */
}
<section className="container mx-auto px-4 my-10">
  <h2 className="text-xl font-semibold mb-6">Available Properties</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {PROPERTYLISTINGSAMPLE.map((property, index) => (
      <div
        key={index}
        className="border rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow bg-white"
      >
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{property.name}</h3>
          <p className="text-blue-600 font-bold text-sm mb-1">
            ${property.price} / night
          </p>
          <p className="text-yellow-500 text-sm">⭐ {property.rating}</p>
        </div>
      </div>
    ))}
  </div>
</section>;
