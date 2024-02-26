interface Props {
  name: string;
  description?: string;
  image: string;
  color: string;
}

export const Class = ({ name, description, image, color }: Props) => {
  const overlayStyles = `p-5 absolute  flex
h-[300px] w-[300px] flex-col items-center justify-center
whitespace-normal bg-rose-300 text-center text-white
opacity-0 transition duration-500 hover:opacity-90 rounded-md`;

  return (
    <li
      className={`relative mx-5 inline-block h-[300px] w-[300px]  rounded-md    ${color} `}
    >
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img alt={`${image}`} src={image} />
    </li>
  );
};
