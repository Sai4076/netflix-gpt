const VideoTitle = ({title,overview}) => {
    return(
        <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
            <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
            <div>
                <button className="bg-white text-black py-1 px-6 md:py-2 md:px-10 md:m-2 m-1 text-lg rounded-md hover:bg-opacity-50">▶ Play</button>
                <button className="hidden md:inline-block bg-gray-400 text-white py-2 px-10 text-lg bg-opacity-50 rounded-md">ℹ More Info</button>
            </div>
        </div>
    )
};

export default VideoTitle;