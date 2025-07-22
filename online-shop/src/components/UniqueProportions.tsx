import { ArrowRightIcon } from '@/images/icons';

export default function UniqueProportions() {
  return (
    <div className="w-full h-[661px] bg-black mt-[170px] flex justify-between items-center px-[210px] text-white">
      <div  className='w-[456px]' >
        <h1 data-aos="fade-up"  className='text-[36px] mb-[30px] font-medium'>Have a Look at Our Unique Selling Proportions</h1>
        <button data-aos="fade-up" data-aos-delay={500} className="w-[181px] h-[59px] bg-[#282828] text-[white] rounded-[50px] flex justify-between items-center px-[22px]">
          <p>Read More</p> 
          <ArrowRightIcon/>
        </button>
      </div>
      <div className='w-[616px]' >
        <p data-aos="fade-up" data-aos-delay={250} className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        <div className='flex justofy-between items-center mt-[20px]'>
          <div data-aos="fade-up"  data-aos-delay={700}>
            <h1  className='text-[48px] font-medium'>99%</h1>
            <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
          </div>
          <div data-aos="fade-up"  data-aos-delay={900}>
            <h1 className='text-[48px] font-medium'>100%</h1>
            <p  className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
