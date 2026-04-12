import Tag from "./Tag";
import { ExternalLink, Code2 } from "lucide-react";

interface CardProps {
  image: string | undefined;
  title: string;
  description: string;
  demo_url: string;
  github_url: string;
  tags: string[];
}

export default function Card({
  image,
  title,
  description,
  demo_url,
  github_url,
  tags,
}: CardProps) {
  return (
    <div className="glass-card group flex flex-col h-full p-5 transition-all duration-500 hover:border-accent/30">
      <div className="relative overflow-hidden rounded-2xl mb-5 aspect-video bg-canvas border border-border-subtle">
        {image ? (
          <>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-ink/30 font-medium italic text-xs tracking-widest bg-linear-to-br from-accent/5 to-transparent">
            COMING SOON
          </div>
        )}
      </div>

      <div className="flex flex-col grow">
        <h4 className="text-xl font-bold mb-2 text-ink group-hover:text-accent transition-colors duration-300">
          {title}
        </h4>

        <p className="text-ink/60 text-sm line-clamp-3 mb-5 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {tags.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <a
            target="_blank"
            href={demo_url}
            className="flex items-center justify-center gap-2 py-2.5 px-4 bg-accent text-canvas text-[11px] font-bold rounded-xl transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-accent/10"
          >
            LIVE PREVIEW <ExternalLink size={14} />
          </a>
          <a
            target="_blank"
            href={github_url}
            className="flex items-center justify-center gap-2 py-2.5 px-4 bg-canvas border border-border-subtle text-ink/70 text-[11px] font-bold rounded-xl transition-all hover:bg-surface-raised hover:text-ink active:scale-95"
          >
            SOURCE <Code2 size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
