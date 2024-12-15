
const UserSuccessStory = (props) => {
    return (
        <div className="flex space-x-6 max-w-xl">
            <img className="w-12 h-12 rounded-full shadow-inner mt-4" src={ props.user.image } alt="User success profile"/>
            <div className="flex flex-col">
                <p className="underline hover:no-underline cursor-pointer self-start text-gray-900">{ props.user.name }</p>
                <p className="text-lg text-gray-600 text-left">{ props.user.paragraph }</p>
            </div>
        </div>
    );
};

export default UserSuccessStory;