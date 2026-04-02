import Tag from "./Tag";

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
    <div className="border border-gray-200 dark:border-[#1f1f22] p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <img
        src={image}
        alt={title}
        className="rounded-lg mb-4 w-full h-40 object-cover"
      />
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <Tag key={tag} name={tag} />
        ))}
      </div>
      <div className="space-x-4">
        <a
          target="_blank"
          href={demo_url}
          className="text-blue-600 font-medium hover:underline"
        >
          Live Demo
        </a>
        <a
          target="_blank"
          href={github_url}
          className="text-blue-600 font-medium hover:underline"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
