import Image, { ImageProps } from "next/image";

type LogoProps = Omit<ImageProps, "src" | "alt"> & {
  alt?: string;
};

export function Logo({ alt = "Arohi Rhythms", width = 160, height = 48, ...rest }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt={alt}
      width={width}
      height={height}
      priority
      {...rest}
    />
  );
}
