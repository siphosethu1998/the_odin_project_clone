
const StepCard = (props) => {
    return (
        <div className="flex flex-col items-center text-center py-6 text-gray-600">
            <img className="h-40 sm:h-32 md:h-36" src={props.step.image} alt="step icon"/>
            <h3 className="mt-8 mb-4 text-xl font-medium">{props.step.title}</h3>
            <p className="sm:w-3/4 md:w-4/5 xl:w-3/4">{props.step.description}</p>
        </div>
    );
}

export default StepCard;