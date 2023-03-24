import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../utils/urlFor";
import { PortableTextReactComponents } from "@portabletext/react";

export const RichTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl font-bold py-10">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl font-bold py-10">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl font-bold py-10">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl font-bold py-10">{children}</h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="text-xl font-bold py-10">{children}</h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="text-lg font-bold py-10">{children}</h6>
    ),
    blockqoute: ({ children }: any) => (
      <blockquote className="border-l border-[#F7AB0A] pl-5 italic">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noopener noreferrer"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#F7AB0A] hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};
