
const StepCard = (props) => {
    return (
        <div className="flex flex-col items-center py-6 text-gray-600">
            <img className="h-40" src={props.step.image} alt="step icon"/>
            <h3 className="mt-8 mb-4 text-xl font-medium">{props.step.title}</h3>
            <p className="xl:w-11/12">{props.step.description}</p>
        </div>
    );
}

export default StepCard;