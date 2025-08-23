'use client';

import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import { TickIcon } from '@/images/icons';
import Link from 'next/link';
import { useState } from 'react';

interface PersonalContainProps {
  title: string;
  inputWidth: string;
}
interface cardDetailContainProps {
  title: string;
  price: number;
}
interface cardItemProps {
  title: string;
  quntity: number;
  subtotal: number;
}
export default function page() {
  let [isOrderComplete, setIsOrderComplete] = useState<boolean>(false);
  const PersonalContain = ({ title, inputWidth }: PersonalContainProps) => {
    return (
      <div className="mt-[25px]">
        <p className="text-black text-[16px]">{title}*</p>
        <input
          type="text"
          className={`rounded-[15px] ${inputWidth} h-[43px] border border-1 border-black outline-none mt-[10px]`}
        />
      </div>
    );
  };
  const CardDetailContain = ({ title, price }: cardDetailContainProps) => {
    return (
      <div className="px-[40px] h-[80px] border-t border-dashed border-gray-300 py-[15px] flex justify-between">
        <p className="w-[250px] text-gray-900 font-semibold">{title}</p>
        <p className="w-[100px] text-right font-semibold">${price}</p>
      </div>
    );
  };
  const CardItem = ({ title, quntity, subtotal }: cardItemProps) => {
    return (
      <div className="px-[40px] py-[15px] flex justify-between ">
        <p className="w-[250px] text-gray-600">{title}</p>
        <p className="w-[100px] text-center">{quntity}</p>
        <p className="w-[100px] text-right">${subtotal}</p>
      </div>
    );
  };
  const placeOrderHandler = () => {
    setIsOrderComplete(true);
    setTimeout(() => {setIsOrderComplete(false)}, 3000)
  };
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full z-50">
        <Menu showStickyLogo={true} />
      </div>
      <div className="flex  justify-between px-[100px]">
        <div className="mt-[120px] mx-[50px]">
          <div className="w-[710px] h-[790px] rounded-[10px] border border-1 border-[#DEDFE1]">
            <div className="flex items-center justify-between px-[40px] w-[710px] h-[80px] rounded-t-[10px] bg-black text-white text-[20px]">
              <p>Personal</p>
              <p>Billing</p>
              <p>Confirmation</p>
            </div>
            <div className="px-[30px] flex justify-between items-center">
              <PersonalContain title="First Name" inputWidth="w-[307px]" />
              <PersonalContain title="Last Name" inputWidth="w-[307px]" />
            </div>
            <div className="px-[30px] flex justify-between items-center">
              <PersonalContain title="Email Address" inputWidth="w-[307px]" />
              <PersonalContain title="Phone Number" inputWidth="w-[307px]" />
            </div>
            <div className="px-[30px]">
              <PersonalContain title="Street Address" inputWidth="w-[660px]" />
              <PersonalContain title="Town / City" inputWidth="w-[660px]" />
              <PersonalContain title="Country" inputWidth="w-[660px]" />
              <PersonalContain title="Postcode / Zip" inputWidth="w-[660px]" />
            </div>
            <div
              onClick={() => {
                placeOrderHandler();
              }}
              className="w-[243px] h-[43px] bg-[black] flex items-center justify-center rounded-[15px] text-[19px]  text-white ml-[30px] mt-[25px]"
            >
              <button className='w-[243px] h-[43px] transition-transform duration-300 ease-in-out transform hover:scale-115 cursor-pointer'>Place order </button>
            </div>
          </div>
        </div>
        <div className="mt-[120px] mx-[50px]">
          <div className="w-[500px] h-[560px] rounded-[10px] border border-1 border-[#DEDFE1]">
            <div className="flex items-center px-[40px] w-[500px] h-[80px] rounded-t-[10px] bg-black text-white text-[20px] font-medium">
              <p>Cart Details</p>
            </div>
            <div className="h-[88px] px-[40px] py-[15px] flex justify-between items-center text-[#333] font-medium border-b border-dashed border-gray-300">
              <p className="w-[250px]">PRODUCT</p>
              <p className="w-[100px] text-center">Quantity</p>
              <p className="w-[100px] text-right">SUBTOTAL</p>
            </div>
            <CardItem title="Double Bed & Dressing" quntity={1} subtotal={180} />
            <CardItem title="Double Bed & Dressing" quntity={1} subtotal={120} />
            <CardItem title="Double Bed & Dressing" quntity={2} subtotal={130} />
            <CardDetailContain title="SUBTOTAL" price={400} />
            <CardDetailContain title="SHIPPING" price={100} />
            <CardDetailContain title="Total" price={500} />
          </div>
        </div>
        {isOrderComplete && 
          <div
            className="fixed top-1/2 left-1/2 w-[1024px] h-[450px] bg-white rounded-[5px] 
  transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-center shadow-lg"
          >
            <div className="mb-[20px]">
              <TickIcon />
            </div>
            <div className="mb-[30px]">
              <p className="text-black text-[36px] font-semibold">Thank you!</p>
              <p className="text-[16px] text-gray-700 max-w-[600px]">
                Your order has been confirmed & it is on the way. Check your email for the details
              </p>
            </div>
            <div className="flex justify-between items-center gap-6">
            <Link href="homePage">
                  <button className="w-[200px] h-[60px] rounded-[20px] bg-black  transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                    <p className="text-[20px] text-white">Go to Homepage</p>
                  </button>
            </Link>
              <Link href="shoppingCart">
                  <button className="w-[200px] h-[60px] rounded-[20px] bg-white border border-black  transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                    <p className="text-[20px] text-black">Check shopping cart</p>
                  </button>
              </Link>
            </div>
          </div>}
      </div>
      <Footer />
    </div>
  );
}
