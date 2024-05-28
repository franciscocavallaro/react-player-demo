const IframePlayer = () => {
    return (
        <div>
            <iframe src="https://www.youtube.com/watch?v=gm3jomzFEpk"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            >
            </iframe>
        </div>
    );
}

export default IframePlayer;