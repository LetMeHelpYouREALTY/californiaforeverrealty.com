"use client";

import Image from "next/image";

type AgentPhotoProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClass = {
  sm: "h-12 w-12",
  md: "h-[72px] w-[72px]",
  lg: "h-[180px] w-[180px]",
} as const;

export default function AgentPhoto({ size = "sm", className = "" }: AgentPhotoProps) {
  return (
    <Image
      src="/images/agent/dr-jan-duffy.jpg"
      alt="Dr. Jan Duffy"
      width={180}
      height={180}
      className={`inline-block rounded-full object-cover ${sizeClass[size]} ${className}`}
    />
  );
}
