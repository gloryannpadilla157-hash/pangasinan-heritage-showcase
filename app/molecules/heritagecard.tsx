interface HeritageCardProps {
  title: string;
  location: string;
  description: string;
  image: string;
}

export default function HeritageCard({
  title,
  location,
  description,
  image,
}: HeritageCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
      
      <img
        src={image}
        alt={title}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">
        
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-600">
          {location}
        </p>

        <h3 className="mt-2 text-2xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mt-3 leading-relaxed text-gray-600">
          {description}
        </p>

        <button
          type="button"
          className="mt-5 rounded-lg bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700"
        >
          Explore
        </button>

      </div>
    </article>
  );
}