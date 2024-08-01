import Image from "next/image";
import Link from "next/link";

export default async function home() {

  return (
    <div >
      <div className="w-[618px] my-10 text-center mx-auto  ">
        <h1 className="font-inter font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] text-center">Become a better buiness with us.</h1>
        <p className="font-inter font-normal text-[21px] leading-[36px] text-center">Lorem Ipsum sit  amer, conselector about areas of the dployment underline. Becouse od the vvvv</p>
        <button className="ml-10 my-1 border-2 border-[#6610F2] w-[142px] h-[45px] text-white bg-[#6610F2] rounded-full">Our Business</button>
      </div>
      <Image src="/girl.png" alt="girl photo" width={1440} height={500}></Image>
      I
    </div>
    
  );
}
