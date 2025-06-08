import { BagpackMenuIcon, LogoIcon, MenuArrowDownIcon, ProfileMenuIcon } from '@/images/icons';
import Menu from './Menu';

export default function Header() {

  interface User {
    id: number;
    name: string;
  }
  const greetUser = (user: User): string => {
    return `hello ${user}`;
  };


  interface Product {
    name: string;
    price: number;
  }
  const getTotal = (products: Product[]): number => {
    let sum = 0;
    return products.reduce((sum, product) => sum + product.price, 0);
  };
  
  type Status = 'success' | 'error' | 'loading';

  const logStatus = (status: Status): void => {
    if (status === 'success') {
      console.log('Operation was successful');
    } else if (status === 'error') {
      console.log(' error');
    } else if (status === 'loading') {
      console.log('Loading...');
    }
  };
  interface Post {
    title: string;
    content: string;
  }

  const printPost = (post: Post): void => {
    console.log(post.title);
    if (post.content) {
      console.log(post.content);
    }
  };
  interface User {
    name: string;
    isActive: boolean;
  }

  const filterActive = (users: User[]): User[] => {
    return users.filter((user) => user.isActive);
  };

  interface Animal {
    name: string;
  }
  interface Dog extends Animal {
    barkVolume: number
  }
  // let a:Dog = {name}
  return (
    <div className="w-full h-[780px] px-[108px] bg-[#000000] opacity-[60%] pt-[40px] ">
      <Menu  textColor="white"/>
      <div className="w-[800px] h-[300px] text-center mx-auto mt-[160px]">
        <h1 data-aos="fade-up-right" className="text-[45px] text-white" data-aos-delay={850}>
          Crafting Comfort, Redefining Spaces. Your Home, Your Signature Style!
        </h1>
        <p
          data-aos-delay={1000}
          data-aos="fade-up-left"
          className="w-[650px] text-[16px] text-white mx-[auto] my-[35px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie
          feugiat. Nunc auctor consectetur elit, quis pulvina. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat
        </p>
        <input
          data-aos-delay={1150}
          data-aos="fade-up-right"
          type="search"
          className="text-white w-[344] h-[56] rounded-[20px] border border-1 border-white bg-[#00000026]"
        />
      </div>
    </div>
  );
}
