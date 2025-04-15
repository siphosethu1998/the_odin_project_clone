
const StepCard = (props: any) => {
    return (
        <div className="flex flex-col items-center gap-5 text-center py-6 text-gray-700">
            <img className="sm:h-32 md:h-40" src={props.step.image} alt="step icon"/>
            <h3 className="text-xl font-medium">{props.step.title}</h3>
            <p className="font-normal sm:w-3/4 md:w-4/5 xl:w-4/5">{props.step.description}</p>
        </div>
    );
}


export default StepCard;