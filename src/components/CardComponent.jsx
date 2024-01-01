import { Link } from "react-router-dom";

import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";

const CardComponent = () => {
  return (
    <main className="flex flex-wrap justify-center items-center gap-8 pb-12">
      {/* Kart 1 */}
      <Link to="/shop">
        <div className="flex flex-col items-center">
          <h2 className="text-[#252B42] text-base leading-3 font-bold pt-8 pb-4">
            Graphic Design
          </h2>
          <p className="text-[#737373] text-sm font-bold pb-4">
            English Department
          </p>
          <div className="flex gap-2 pb-4">
            <p className="text-[#BDBDBD] text-sm font-bold">$16.48</p>
            <p className="text-[#23856D] text-sm font-bold">$6.48</p>
          </div>
          <img src={card1} alt="svg" className="cursor-pointer" />
        </div>
      </Link>

      {/* Kart 2 */}
      <Link to="/shop">
        <div className="flex flex-col items-center">
          <h2 className="text-[#252B42] text-base leading-3 font-bold pt-8 pb-4">
            Graphic Design
          </h2>
          <p className="text-[#737373] text-sm font-bold pb-4">
            English Department
          </p>
          <div className="flex gap-2 pb-4">
            <p className="text-[#BDBDBD] text-sm font-bold">$16.48</p>
            <p className="text-[#23856D] text-sm font-bold">$6.48</p>
          </div>
          <img src={card2} alt="svg" className="cursor-pointer" />
        </div>
      </Link>

      {/* Kart 3 */}
      <Link to="/shop">
        <div className="flex flex-col items-center">
          <h2 className="text-[#252B42] text-base leading-3 font-bold pt-8 pb-4">
            Graphic Design
          </h2>
          <p className="text-[#737373] text-sm font-bold pb-4">
            English Department
          </p>
          <div className="flex gap-2 pb-4">
            <p className="text-[#BDBDBD] text-sm font-bold">$16.48</p>
            <p className="text-[#23856D] text-sm font-bold">$6.48</p>
          </div>
          <img src={card3} alt="svg" className="cursor-pointer" />
        </div>
      </Link>
    </main>
  );
};

export default CardComponent;
