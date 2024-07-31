import Image from "next/image";
import Link from "next/link";

export default async function home() {

  return (
    <div>
      <h1 >Home</h1>
      <Image src="/girl.png" alt="girl photo" width={1440} height={500}></Image>
      I
    </div>
    
  );
}
