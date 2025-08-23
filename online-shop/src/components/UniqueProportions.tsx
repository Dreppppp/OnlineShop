import { ArrowRightIcon } from '@/images/icons';

export default function UniqueProportions() {
  return (
    <div className="w-full h-[661px] bg-black mt-[170px] flex justify-between items-center px-[210px] text-white">
      <div data-aos="fade-up" data-aos-delay={500} className='w-[500px]' >
        <h1 className='text-[36px] mb-[30px] font-medium'>Want to order product by phone or consult?</h1>
          <button className="w-[181px] h-[59px] bg-[#282828] text-[white] rounded-[50px] flex justify-between items-center px-[22px] transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
            <p>Contact us</p> 
            <ArrowRightIcon/>
          </button>
      </div>
      <div className='w-[616px]' >
        <p data-aos="fade-up" data-aos-delay={250} className='text-[16px]'>You can easily place an order by phone or get a detailed consultation from our specialists. We will answer all your questions, help you choose the right product, and guide you through every step. Quick, convenient, and without unnecessary hassle — just call us and we’ll take care of the rest.</p>
        <div className='flex justofy-between items-center mt-[20px]'>
          <div data-aos="fade-up"  data-aos-delay={700}>
            <h1  className='text-[48px] font-medium'>99%</h1>
            <p className='text-[16px]'>Most of our customers note that phone ordering saves them time and allows them to get professional advice instantly.</p>
          </div>
          <div data-aos="fade-up"  data-aos-delay={900}>
            <h1 className='text-[48px] font-medium'>100%</h1>
            <p  className='text-[16px]'>We guarantee that every consultation is free, clear, and focused on your needs, so you always make the right choice.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
