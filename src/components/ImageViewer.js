export const ImageViewer = ({ path, id }) => {
    return (
        <div style={{ width: "100%" }}>
            <img style={{ width: '100%', height: '400px', objectFit: 'cover' }} src={path} alt={id} />
        </div>
    )
}