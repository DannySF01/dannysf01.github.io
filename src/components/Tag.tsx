interface TagProps {
  name: string;
}

export default function Tag({ name }: TagProps) {
  return (
    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-md">
      {name}
    </span>
  );
}
