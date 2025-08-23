import beauty from '../images/beauty.jpg';
import livingRoomFurnitures from '../images/furniture.avif';
import electrinics from '../images/gadgets.jpg';
import clothes from '../images/clothes.avif';
import Link from 'next/link';

export default function Range() {
  return (
    <div>
      <div className="w-[609px] h-[109px] text-center mx-[auto] mt-[90px]">
        <h1 data-aos="fade-up" className="text-[36px] font-medium ">
          View Our Range Of Categories
        </h1>
        <p data-aos="fade-up" className="text-[#666666] text-[16px] text-center">
         We have lots of categories. From electronics to clothes. With our online shop yuo can buy any product wich you want
        </p>
      </div>
      <div className="w-[1240px] flex justify-between mx-auto mt-[68px]">
       <Link  href="/products">
         <div className='transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer'>
            <div
              className="w-[392px] h-[513px] rounded-[20px] relative"
              data-aos="fade-right"
              data-aos-delay={700}
            >
              <img
                src={beauty.src}
                alt="Beauty"
                className="w-full h-full object-cover rounded-[20px]"
              />
              <p className="text-black text-[22px] absolute bottom-[25px] left-[25px]">Beauty</p>
            </div>
         </div>
       </Link>
        <div>
         <Link href="/products">
            <div className='transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer'>
              <div
                data-aos="fade-right"
                data-aos-delay={700}
                className="w-[392] h-[240px] bg-[#A6A6A6] rounded-[20px] relative"
              >
                <img
                  src={livingRoomFurnitures.src}
                  alt="Furniture"
                  className="w-[392px] h-full object-cover  rounded-[20px]"
                />
                <p className="text-black text-[22px] absolute bottom-[25px] left-[25px]">Furniture</p>
              </div>
            </div>
         </Link>
          <div>
           <Link  href="/products">
              <div className='transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer'>
                <div
                  data-aos="fade-left"
                  data-aos-delay={500}
                  className="w-[392px] h-[240px] bg-[#A6A6A6] rounded-[20px] relative mt-[33px]  "
                >
                  <img
                    src={electrinics.src}
                    alt="Electronics"
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                  <p className="text-black text-[22px] absolute bottom-[25px] left-[25px]">
                    Electronics
                  </p>
                </div>
              </div>
           </Link>
          </div>
        </div>
      <Link  href="/products">
        <div className='transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer'>
            <div
              data-aos="fade-left"
              data-aos-delay={450}
              className="w-[392px] h-[513px] bg-[#A6A6A6] rounded-[20px] relative"
            >
              <img
                src={clothes.src}
                alt="clothes"
                className="w-[392px] h-full object-cover rounded-[20px]"
              />
              <p className="text-black text-[22px] absolute bottom-[25px] left-[25px]">clothes</p>
            </div>
        </div>
      </Link>
      </div>
    </div>
  );
}
