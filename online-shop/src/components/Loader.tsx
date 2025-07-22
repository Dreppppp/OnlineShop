import loadergif from "../images/loader.gif"

export default function Loader() {
    return(
        <div className="w-screen h-screen">
            <img src={loadergif.src} alt="LOADING" />
        </div>
    )
};
