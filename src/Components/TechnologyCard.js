
const TechnologyCard = (props) => {
    return (
        <div className="bg-white flex flex-col gap-3 px-10 py-6 rounded-lg w-56 h-fit items-center cursor-pointer hover:shadow-lg">
            <img className="h-40" src={props.technology.image} alt="technology icon"/>
            <h3 className="text-gray-600 text-xl sm:w-11/12">{props.technology.title}</h3>
        </div>
    );
}

export default TechnologyCard;