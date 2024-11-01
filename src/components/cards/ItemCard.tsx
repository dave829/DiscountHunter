import { Card } from "@/types/Card";
import Image from "next/image";
import Link from "next/link";
//import { clsx } from "clsx";
//import coke from "/public/images/store_item/coke.webp";

type Props = { item: Card };

// const result = clsx({
// 	imagePath: true,
//   "button-primary": true
// })

export default function ItemCard({
  item: { storeName, imgPath, name, promotionTypeName },
}: Props) {
  //console.log(imgPath.startsWith); // //tqklhszfkvzk6518638.cdn.ntruss.com/product/8806004000587.png
  //const imgUrl = imgPath.replace("//", " ");
  //console.log(imgUrl);

  // const absoluteImageUrl = imgPath?.startsWith("//")
  //   ? `https:${imgPath}`
  //   : imgPath;

  //const img = imgPath.replace("//", "");
  //console.log(img);

  const img = `http://${imgPath.replace("http://", "").replace("//", "")}`;

  return (
    <Link href={`/cards/${name}`}>
      <article
        className={`flex flex-col justify-center items-center rounded-2xl overflow-hidden  border-8 border-white
          bg-transparent
         
          `}
      >
        <div className="flex flex-col w-full  py-1 bg-[#383737]">
          {/* <time className="self-end text-white">{date.toString()}</time> */}
          <time className="self-end text-white">
            {/* {date} */}
            12월 11일까지
          </time>
          <span className=" border-[3px] rounded-md text-center m-1 p-0.5 px-2 w-fit">
            <p
              className={`
              text-white 
            ${
              storeName === "CU" &&
              "[text-shadow:-2px_0px_#9CC92B,0px_1px_#9CC92B,1px_0px_#9CC92B,0px_-1px_#9CC92B]"
            }`}
            >
              {storeName}
            </p>
          </span>
        </div>
        <Image
          //src="/images/store_item/coke.webp"
          //src={coke}
          // src={`/images/store_item/${imagePath}.webp`}
          //src={`http://${imgPath.replace("http://", "").replace("//", "")}`}
          src={img}
          //src={`http://${imgPath}`}
          //src="http://tqklhszfkvzk6518638.cdn.ntruss.com/product/8806004000587.png"
          //src={absoluteImageUrl}
          alt={name}
          width={200}
          height={200}
          priority
          className="h-80 w-full rounded-s"
        />
        <div className="flex flex-col items-center p-4 ">
          <h3 className="text-lg font-bold text-white">{name}</h3>
          <p className="w-full truncate text-center text-white">{name}</p>
          <span className="text-sm rounded-xl bg-green-100 my-2 p-1">
            {promotionTypeName}
          </span>
        </div>
      </article>
    </Link>
  );
}
