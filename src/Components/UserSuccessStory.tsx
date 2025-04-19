export type UserProps = {
  image: string;
  name: string;
  testimonial: string;
}

const UserSuccessStory = ({ image, name, testimonial }: UserProps) => {
  return (
    <div className="flex space-x-6">
      <img className="w-12 h-12 rounded-full shadow-inner mt-4" src={ image } alt="User success profile"/>
      <div className="flex flex-col">
          <p className="underline hover:no-underline cursor-pointer self-start text-gray-900">{ name }</p>
          <p className="text-lg text-gray-600 text-left">{ testimonial }</p>
      </div>
    </div>
  );
};

export default UserSuccessStory;