import { ArrowRightIcon } from '@/images/icons';

export default function Ongoings() {
  const OngoingsCard = () => {
    return (
      <div className="w-[400] h-[415px]">
        <div className="w-[400px] h-[275px] bg-[#A6A6A6] rounded-[20px]"></div>
        <div className="flex items-center text-[16px] mt-[30px]">
          <p>Oliver Bennett</p>
          <p className="ml-[25px]">18 Jan 2022</p>
        </div>
        <div className=" mt-[30px]">
          <p className="text-[20px]">Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog</p>
        </div>
      </div>
    );
  };
  return (
    <div className="mx-[210px] mt-[150px]">
      <div className="flex justify-between items-center">
        <div className="w-[610px]">
          <h1 data-aos="fade-up" className="text-[36px] font-medium mb-[20px]">Latest Ongoings</h1>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in
            molestie feugiat. Nunc auctor consectetur elit, quis pulvina.
          </p>
        </div>
        <div>
          {' '}
          <button data-aos="fade-up" className="w-[216px] h-[59px] bg-[#282828] text-[white] rounded-[50px] flex justify-between items-center px-[22px]">
            <p>Read all blogs</p>
            <ArrowRightIcon />
          </button>
        </div>
      </div>
      <div className="flex mt-[60px] gap-[40px]">
      <div data-aos="fade-up" data-aos-delay={200}><OngoingsCard/></div>
      <div data-aos="fade-up" data-aos-delay={400} ><OngoingsCard/></div>
      <div data-aos="fade-up"  data-aos-delay={600}><OngoingsCard/></div>
      </div>
    </div>
  );
}
