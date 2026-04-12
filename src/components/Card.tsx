import Tag from "./Tag";
import { ExternalLink } from "lucide-react"; // Optional: adds icons to buttons

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
    <div className="group border border-gray-200 dark:border-[#1f1f22] p-5 rounded-2xl bg-white dark:bg-[#111113]/50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
      <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/2] bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-zinc-400 font-medium italic">
            Preview coming soon
          </div>
        )}
      </div>

      <h4 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
        {title}
      </h4>

      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4 flex-grow">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
        {tags.map((tag) => (
          <Tag key={tag} name={tag} />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 mt-auto">
        <a
          target="_blank"
          href={demo_url}
          className="flex items-center justify-center gap-2 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all"
        >
          Live Demo <ExternalLink size={14} />
        </a>
        <a
          target="_blank"
          href={github_url}
          className="flex items-center justify-center gap-2 py-2 px-4 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white text-sm font-semibold rounded-lg transition-all border border-gray-200 dark:border-zinc-700"
        >
          Code{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h2.25m8.25-8.693V19.18A2.25 2.25 0 0018.5 21h-6a2.25 2.25 0 01-2.25-2.25V9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
