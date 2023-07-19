export const AudioPlayer = ({ path }) => {
    return (
        <div style={{ width: "100%", padding: 80 }}>
            <audio controls style={{ width: "100%" }}>
                <source src={path} type="audio/mp3" />
            </audio>
        </div>
    )
}