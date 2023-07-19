export const DocumentViewer = ({ path, id }) => {
    return (
        <div style={{ width: "100%" }}>
            <iframe style={{ width: "100%", height: "400px" }} src={path} title={id}></iframe>
        </div>
    )
}

