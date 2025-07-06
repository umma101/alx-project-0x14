interface MovieCardProps {
  title: string;
  posterUrl: string;
  year: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, posterUrl, year }) => {
  return (
    <div className="bg-[#1f1f1f] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <img src={posterUrl} alt={title} className="w-full h-60 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400">{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
