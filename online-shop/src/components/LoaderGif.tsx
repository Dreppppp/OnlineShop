import loadergif from '../images/loader.gif';

export default function LoaderGif() {
  return (
    <div className="w-screen h-screen flex justify-center bg-black">
      <div className="text-center h-[700px]">
        <img
          src={loadergif.src}
          alt="LOADING"
          className="h-[800px] w-[1000px]  [clip-path:inset(150px_150px_200px_150px)] relative"
        />
        <p className="text-white text-[25px] absolute bottom-45 left-1/2 -translate-x-1/2">Loading...</p>
      </div>
    </div>
  );
}
