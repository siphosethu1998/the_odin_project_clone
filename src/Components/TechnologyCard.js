
const TechnologyCard = (props) => {
    return (
        <div className="flex flex-col px-10 py-6 bg-white rounded-lg w-56 min-h-fit items-center cursor-pointer hover:shadow-lg">
            <img className="h-40" src={props.technology.image} alt="technology icon"/>
            <h3 className="text-gray-600 my-4 text-xl w-fit">{props.technology.title}</h3>
        </div>
    );
}

export default TechnologyCard;