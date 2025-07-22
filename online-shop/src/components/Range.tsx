import bedroomFurnitures from '../images/bedroomFurniture.png';
import livingRoomFurnitures from '../images/livingRoom.png';
import DiningRoomFurintures from '../images/diningRoom.png';
import sofaSets from '../images/sofaSetsFurniture.png';

export default function Range() {
  console.log(bedroomFurnitures);
  return (
    <div>
      <div className="w-[609px] h-[109px] text-center mx-[auto] mt-[90px]">
        <h1 data-aos="fade-up" className="text-[36px] font-medium ">
          View Our Range Of Categories
        </h1>
        <p data-aos="fade-up" className="text-[#666666] text-[16px] text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
          tincidunt ut laoreet dolore magna aliquam.
        </p>
      </div>
      <div className="w-[1240px] flex justify-between mx-auto mt-[68px]">
        <div
          data-aos="fade-right"
          data-aos-delay={250}
          className="w-[392] h-[513px] rounded-[20px] relative"
        >
          <img
            src={bedroomFurnitures.src}
            alt="bedroom"
            className="w-full h-full object-cover absolute inset-0 rounded-[20px]"
          />
          <p className="text-white text-[22px] absolute bottom-[25px] left-[25px]">
            Bedroom Furniture
          </p>
        </div>
        <div>
          <div
            data-aos="fade-right"
            data-aos-delay={700}
            className="w-[392] h-[240px] bg-[#A6A6A6] rounded-[20px] relative"
          >
            <img
              src={livingRoomFurnitures.src}
              alt="living room"
              className="w-full h-full object-cover absolute inset-0 rounded-[20px]"
            />
            <p className="text-white text-[22px] absolute bottom-[25px] left-[25px]">
              Living Room Furniture
            </p>
          </div>
          <div>
            <div
              data-aos="fade-left"
              data-aos-delay={500}
              className="w-[392] h-[240px] bg-[#A6A6A6] rounded-[20px] relative mt-[33px]  "
            >
              <img
                src={DiningRoomFurintures.src}
                alt="dining room"
                className="w-full h-full object-cover absolute inset-0 rounded-[20px]"
              />
              <p className="text-white text-[22px] absolute bottom-[25px] left-[25px]">
                Dinning Room Furniture
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay={450}
          className="w-[392] h-[513px] bg-[#A6A6A6] rounded-[20px] relative"
        >
          <img
            src={sofaSets.src}
            alt="sofaSets"
            className="w-full h-full object-cover absolute inset-0 rounded-[20px]"
          />
          <p className="text-white text-[22px] absolute bottom-[25px] left-[25px]">Sofa Sets</p>
        </div>
      </div>
    </div>
  );
}
