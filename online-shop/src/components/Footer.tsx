import { ArrowRightIcon, BigLogoIcon } from '@/images/icons';

export default function Footer() {
  const FooterProduct = () => {
    return (
      <div data-aos="fade-up">
        <h1 className="text-[18px] text-[#9A9A9A]">PRODUCTS</h1>
        <p className="text-[18px] text-[white] mt-[32px]">Lorem Ipsum</p>
        <p className="text-[18px] text-[white] mt-[22px]">Lorem Ipsum</p>
        <p className="text-[18px] text-[white] mt-[22px]">Lorem Ipsum</p>
        <p className="text-[18px] text-[white] mt-[22px]">Lorem Ipsum</p>
        <p className="text-[18px] text-[white] mt-[22px]">Lorem Ipsum</p>
      </div>
    );
  };
  return (
    <div className="h-[962px] bg-[#3D3D3D] pt-[150px] mt-[170px]">
      <div className="">
        <div data-aos="fade-up" className="w-full flex justify-center">
          {' '}
          <BigLogoIcon />
        </div>
        <div  className="w-full flex justify-center">
          {' '}
          <h1 data-aos="fade-up" className="text-[white] text-[40px] w-[800px] text-center mt-[40px]">Subscribe To Your Newsletter to Stay Updated About Discounts</h1>
        </div>
        <div data-aos="fade-up" className="w-full flex justify-center mt-[40px]">
          <button className="w-[343px] h-[62px] bg-[#282828] text-[white] rounded-[50px] flex justify-between items-center px-[22px]">
            <input className="styled-none w-[250px]" placeholder="person@email.com"></input>
            <div className="size-[46px] flex justify-center items-center">
              <ArrowRightIcon />
            </div>
          </button>
        </div>
      </div>
      <div className="mt-[100px] px-[110px] flex justify-between h-[270px]">
        <FooterProduct />
        <FooterProduct />
        <FooterProduct />
        <FooterProduct />
        <FooterProduct />
      </div>
      <div className="w-full h-[67px] mt-[65px]">
        <hr className='h-[2px] text-white'/>
        <div className=' flex items-center justify-center'><p className="text-[white] text-center mt-[15px]">Copyright © 2023 Renew Bariatrics, Inc </p></div>
      </div>
    </div>
  );
}
