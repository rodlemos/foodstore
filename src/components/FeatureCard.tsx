interface Props {
  image: string;
  title: string;
  description: string;
  color: string;
  reverse?: boolean;
}

export function FeatureCard({
  color,
  description,
  image,
  title,
  reverse = false,
}: Props) {
  return (
    <div
      className={`flex max-sm:flex-col rounded-md overflow-hidden ${
        reverse && "flex-row-reverse"
      }`}
    >
      <img
        src={image}
        className="w-full md:w-[60%] h-[400px] object-cover object-right"
      />
      <div className={`max-sm:py-4 flex-1 grid place-items-center ${color}`}>
        <div className="text-center max-w-[34ch] p-2 lg:p-4">
          <h2 className="font-cursive text-4xl lg:text-5xl text-white drop-shadow-md leading-none">
            {title}
          </h2>
          <p className="text-white mt-2 text-lg md:text-base lg:text-xl">
            {description}
          </p>

          <button
            className={`mt-6 py-2 px-4 rounded-md border-2 border-white font-bold hover:text-white transition-colors duration-200`}
          >
            Ver produtos
          </button>
        </div>
      </div>
    </div>
  );
}
