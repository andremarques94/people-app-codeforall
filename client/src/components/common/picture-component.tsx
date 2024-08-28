interface PictureComponentProps {
  picture?: string;
  name: string;
  className?: string;
  size?: string;
}

interface PlaceholderImageProps {
  name: string;
  className: string;
  size?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  name,
  className,
  size,
}) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-blue-500 text-white font-bold ${size} ${className}`}
    >
      <span className="text-xl">{initials}</span>
    </div>
  );
};

const PictureComponent: React.FC<PictureComponentProps> = ({
  picture = null,
  name,
  className = "",
  size,
}) => {
  return (
    <div className="picture">
      {picture ? (
        <img
          src={picture}
          alt="name"
          className={`${size} rounded-full ${className}`}
        />
      ) : (
        <PlaceholderImage name={name} className={className} size={size} />
      )}
    </div>
  );
};

export default PictureComponent;
