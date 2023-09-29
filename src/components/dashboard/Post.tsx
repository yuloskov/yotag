import Image from "next/image";
import { cn } from "~/utils/cn";

export interface PostData {
  cover: string;
  title: string;
}

interface PostProps extends React.HTMLAttributes<HTMLDivElement> {
  data: PostData;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export function Post({
  data,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: PostProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div className="overflow-hidden rounded-md">
        <Image
          src={data.cover}
          alt={data.title}
          width={width}
          height={height}
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square",
          )}
        />
      </div>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{data.title}</h3>
        <p className="text-xs text-muted-foreground">{data.title}</p>
      </div>
    </div>
  );
}
