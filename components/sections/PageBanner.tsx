import Image from "next/image";

type PageBannerProps = {
  src: string;
  alt: string;
};

export default function PageBanner({ src, alt }: PageBannerProps) {
  return (
    <div className="relative mb-10 h-52 overflow-hidden rounded-2xl md:h-72">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 1152px"
        className="object-cover"
      />
    </div>
  );
}
