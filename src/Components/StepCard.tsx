type StepProps = {
  id?: number;
  image: string;
  title: string;
  description: string;
}

const StepCard = ({ image, title, description }: StepProps) => {
  return (
    <div className="flex flex-col items-center gap-5 text-center py-6 text-gray-700">
      <img className="xxs:h-20 md:h-40" src={ image } alt="step icon"/>
      <h3 className="text-xl font-medium">{ title }</h3>
      <p className="font-normal xxs:w-2/3 sm:w-3/4 md:w-4/5 xl:w-4/5">{ description }</p>
      </div>
    );
}

export default StepCard;