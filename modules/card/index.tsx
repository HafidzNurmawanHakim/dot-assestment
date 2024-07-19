import { Product } from "@/lib/_types";
import "./style.scss";
import Image from "next/image";
import { ClothsIcon, CrownIcon } from "@/lib/icons";

interface CardProps {
   data: Product;
}

const icons: Record<Product["category"], JSX.Element> = {
   "men's clothing": <ClothsIcon />,
   "women's clothing": <ClothsIcon />,
   jewelery: <CrownIcon />,
   electronics: <CrownIcon />,
};

function index({ data }: CardProps) {
   return (
      <div className="card">
         <div className="img">
            <Image src={data.image} fill alt={data.title} />
         </div>
         <div className="content">
            <span className="icon">{icons[data.category]}</span>
            <h4>{data.title}</h4>
            <p>{data.description}</p>
            <div className="shine"></div>
         </div>
      </div>
   );
}

export default index;
