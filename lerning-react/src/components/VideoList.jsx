function VideoList(){
    const videos = [
        {
            name: "some name",
            duration: 12,
            id: 1
        },
        {
            name: "second name",
            duration: 32,
            id: 2
        },
        {
            name: "one more name",
            duration: 20,
            id: 3
        }
    ]

    return(
        <>
            <h1>videos</h1>

            {videos.map((elem) => {
                return(
                    <div key={elem.id}>
                        <p>{elem.name}</p>
                        <p>{elem.duration} минут</p>
                        <button>like!</button>
                        <hr></hr>
                    </div>
                )
            })}
        </>
    )
}

export default VideoList