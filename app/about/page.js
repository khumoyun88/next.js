import Image from "next/image";
import Link from "next/link";

export default async function about() {

  return (
    <div>
      <h1 >About</h1>
      <Image src="/girl2.png" alt="girl photo" width={1440} height={500}></Image>
      
    </div>
    
  );
}
