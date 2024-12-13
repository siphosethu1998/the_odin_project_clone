
const DescriptionCard = (props) => {
    return (
        <div className="flex flex-col space-x-8">
            <img className="h-40" src={props.step.image} alt="Group icon"/>
            <h3 className="text-gray-600 mt-8 mb-4 text-xl font-medium">{props.step.title}</h3>
            <p className="text-gray-600">{props.step.description}</p>
        </div>
    );
}

export default DescriptionCard;