import { Button, Option, Select } from "@material-tailwind/react";
import { Link } from "react-router-dom";

import { IoGrid } from "react-icons/io5";
import { MdOutlineChecklist } from "react-icons/md";

import carditem1 from "../../assets/ProductCard/carditem1.png" ;
import carditem2 from "../../assets/ProductCard/carditem2.png" ;
import carditem3 from "../../assets/ProductCard/carditem3.png" ;
import carditem4 from "../../assets/ProductCard/carditem4.png" ;

function Products() {
    return (
      <div className="flex justify-center items-center  pt-8 ">
        <div className="flex flex-col w-full items-center gap-12">
          <div className="w-11/12 flex flex-col gap-10 items-center  xl:flex xl:flex-row xl:justify-between xl:items-center">
            <h2 className=" text-secondText text-base font-medium">
              Showing all 12 results
            </h2>
            <div className="flex items-center gap-7  font-semibold text-lg p-2">
              <h3 className="text-secondText">Views :</h3>
              <IoGrid className="h-5 w-5 text-textColor" />
              <MdOutlineChecklist className="h-5 w-5 text-secondText" />
            </div>
            <div className="flex gap-2 items-center">
              <Select label="Sort By" size="lg">
                <Option>Popularity</Option>
                <Option>Newest</Option>
                <Option>Price Low-High</Option>
                <Option>Price High-Low</Option>
              </Select>
              <div>
                <Button
                  size="lg"
                  className="capitalize tracking-wider bg-primaryColor text-lightText "
                >
                  Filter
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-16 xl:gap-0 xl:flex xl:flex-row w-11/12 xl:flex-wrap xl:justify-between xl:gap-y-12">
            <div className=" xl:w-[23%] flex flex-col text-center xl:gap-6 gap-8 ">
              <Link to="/shop/product">
                <img className="w-full" src={carditem1} alt="card 1" />
              </Link>
              <h4 className="text-textColor font-bold tracking-wider">
                Graphic Design
              </h4>
              <p className="text-secondText font-medium">English Department</p>
              <div className="flex gap-3 xl:gap-5 justify-center">
                <span className="text-mutedColor">$16.48</span>
                <span className="text-secondaryColorGreen font-bold">$6.48</span>
              </div>
              <div className="flex gap-2 justify-center">
                <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
                <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
                <button className="h-5 w-5 bg-alertColor rounded-full"></button>
                <button className="h-5 w-5 bg-darkBg rounded-full"></button>
              </div>
            </div>
            <div className=" xl:w-[23%] flex flex-col text-center xl:gap-6 gap-8 ">
              <Link to="/shop/product">
                <img className="w-full" src={carditem2} />
              </Link>
              <h4 className="text-textColor font-bold tracking-wider">
                Graphic Design
              </h4>
              <p className="text-secondText font-medium">English Department</p>
              <div className="flex gap-3 xl:gap-5 justify-center">
                <span className="text-mutedColor">$16.48</span>
                <span className="text-secondaryColorGreen font-bold">$6.48</span>
              </div>
              <div className="flex gap-2 justify-center">
                <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
                <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
                <button className="h-5 w-5 bg-alertColor rounded-full"></button>
                <button className="h-5 w-5 bg-darkBg rounded-full"></button>
              </div>
            </div>
            <div className=" xl:w-[23%] flex flex-col text-center gap-8 xl:gap-6">
              <Link to="/shop/product">
                <img className="w-full" src={carditem3} />
              </Link>
              <h4 className="text-textColor font-bold tracking-wider">
                Graphic Design
              </h4>
              <p className="text-secondText font-medium">English Department</p>
              <div className="flex gap-3 xl:gap-5 justify-center">
                <span className="text-mutedColor">$16.48</span>
                <span className="text-secondaryColorGreen font-bold">$6.48</span>
              </div>
              <div className="flex gap-2 justify-center">
                <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
                <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
                <button className="h-5 w-5 bg-alertColor rounded-full"></button>
                <button className="h-5 w-5 bg-darkBg rounded-full"></button>
              </div>
            </div>
            <div className=" xl:w-[23%] flex flex-col text-center gap-8 xl:gap-6">
              <Link to="/shop/product">
                <img className="w-full" src={carditem4} />
              </Link>
              <h4 className="text-textColor font-bold tracking-wider">
                Graphic Design
              </h4>
              <p className="text-secondText font-medium">English Department</p>
              <div className="flex gap-3 xl:gap-5 justify-center">
                <span className="text-mutedColor">$16.48</span>
                <span className="text-secondaryColorGreen font-bold">$6.48</span>
              </div>
              <div className="flex gap-2 justify-center">
                <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
                <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
                <button className="h-5 w-5 bg-alertColor rounded-full"></button>
                <button className="h-5 w-5 bg-darkBg rounded-full"></button>
              </div>
            </div>
            <div className=" xl:w-[23%] flex flex-col text-center gap-8 xl:gap-6">
              <Link to="/shop/product">
                <img className="w-full" src={carditem1} />
              </Link>
              <h4 className="text-textColor font-bold tracking-wider">
                Graphic Design
              </h4>
              <p className="text-secondText font-medium">English Department</p>
              <div className="flex gap-3 xl:gap-5 justify-center">
                <span className="text-mutedColor">$16.48</span>
                <span className="text-secondaryColorGreen font-bold">$6.48</span>
              </div>
              <div className="flex gap-2 justify-center">
                <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
                <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
                <button className="h-5 w-5 bg-alertColor rounded-full"></button>
                <button className="h-5 w-5 bg-darkBg rounded-full"></button>
              </div>
            </div>
            <div className=" xl:w-[23%] flex flex-col text-center gap-8 xl:gap-6">
              <Link to="/shop/product">
                <img className="w-full" src={carditem1} />
              </Link>
              <h4 className="text-textColor font-bold tracking-wider">
                Graphic Design
              </h4>
              <p className="text-secondText font-medium">English Department</p>
              <div className="flex gap-3 xl:gap-5 justify-center">
                <span className="text-mutedColor">$16.48</span>
                <span className="text-secondaryColorGreen font-bold">$6.48</span>
              </div>
              <div className="flex gap-2 justify-center">
                <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
                <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
                <button className="h-5 w-5 bg-alertColor rounded-full"></button>
                <button className="h-5 w-5 bg-darkBg rounded-full"></button>
              </div>
            </div>
            <div className=" xl:w-[23%] flex flex-col text-center gap-8 xl:gap-6">
              <Link to="/shop/product">
                <img className="w-full" src={carditem1} />
              </Link>
              <h4 className="text-textColor font-bold tracking-wider">
                Graphic Design
              </h4>
              <p className="text-secondText font-medium">English Department</p>
              <div className="flex gap-3 xl:gap-5 justify-center">
                <span className="text-mutedColor">$16.48</span>
                <span className="text-secondaryColorGreen font-bold">$6.48</span>
              </div>
              <div className="flex gap-2 justify-center">
                <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
                <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
                <button className="h-5 w-5 bg-alertColor rounded-full"></button>
                <button className="h-5 w-5 bg-darkBg rounded-full"></button>
              </div>
            </div>
            <div className=" xl:w-[23%] flex flex-col text-center gap-8 xl:gap-6">
              <Link to="/shop/product">
                <img className="w-full" src={carditem1} />
              </Link>
              <h4 className="text-textColor font-bold tracking-wider">
                Graphic Design
              </h4>
              <p className="text-secondText font-medium">English Department</p>
              <div className="flex gap-3 xl:gap-5 justify-center">
                <span className="text-mutedColor">$16.48</span>
                <span className="text-secondaryColorGreen font-bold">$6.48</span>
              </div>
              <div className="flex gap-2 justify-center">
                <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
                <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
                <button className="h-5 w-5 bg-alertColor rounded-full"></button>
                <button className="h-5 w-5 bg-darkBg rounded-full"></button>
              </div>
            </div>
            <div className=" xl:w-[23%] flex flex-col text-center gap-8 xl:gap-6">
              <Link to="/shop/product">
                <img className="w-full" src={carditem1} />
              </Link>
              <h4 className="text-textColor font-bold tracking-wider">
                Graphic Design
              </h4>
              <p className="text-secondText font-medium">English Department</p>
              <div className="flex gap-3 xl:gap-5 justify-center">
                <span className="text-mutedColor">$16.48</span>
                <span className="text-secondaryColorGreen font-bold">$6.48</span>
              </div>
              <div className="flex gap-2 justify-center">
                <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
                <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
                <button className="h-5 w-5 bg-alertColor rounded-full"></button>
                <button className="h-5 w-5 bg-darkBg rounded-full"></button>
              </div>
            </div>
            <div className=" xl:w-[23%] flex flex-col text-center gap-8 xl:gap-6">
              <Link to="/shop/product">
                <img className="w-full" src={carditem1} />
              </Link>
              <h4 className="text-textColor font-bold tracking-wider">
                Graphic Design
              </h4>
              <p className="text-secondText font-medium">English Department</p>
              <div className="flex gap-3 xl:gap-5 justify-center">
                <span className="text-mutedColor">$16.48</span>
                <span className="text-secondaryColorGreen font-bold">$6.48</span>
              </div>
              <div className="flex gap-2 justify-center">
                <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
                <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
                <button className="h-5 w-5 bg-alertColor rounded-full"></button>
                <button className="h-5 w-5 bg-darkBg rounded-full"></button>
              </div>
            </div>
            <div className=" xl:w-[23%] flex flex-col text-center gap-8 xl:gap-6">
              <Link to="/shop/product">
                <img className="w-full" src={carditem1} />
              </Link>
              <h4 className="text-textColor font-bold tracking-wider">
                Graphic Design
              </h4>
              <p className="text-secondText font-medium">English Department</p>
              <div className="flex gap-3 xl:gap-5 justify-center">
                <span className="text-mutedColor">$16.48</span>
                <span className="text-secondaryColorGreen font-bold">$6.48</span>
              </div>
              <div className="flex gap-2 justify-center">
                <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
                <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
                <button className="h-5 w-5 bg-alertColor rounded-full"></button>
                <button className="h-5 w-5 bg-darkBg rounded-full"></button>
              </div>
            </div>
            <div className=" xl:w-[23%] flex flex-col text-center gap-8 xl:gap-6">
              <Link to="/shop/product">
                <img className="w-full" src={carditem1} />
              </Link>
              <h4 className="text-textColor font-bold tracking-wider">
                Graphic Design
              </h4>
              <p className="text-secondText font-medium">English Department</p>
              <div className="flex gap-3 xl:gap-5 justify-center">
                <span className="text-mutedColor">$16.48</span>
                <span className="text-secondaryColorGreen font-bold">$6.48</span>
              </div>
              <div className="flex gap-2 justify-center">
                <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
                <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
                <button className="h-5 w-5 bg-alertColor rounded-full"></button>
                <button className="h-5 w-5 bg-darkBg rounded-full"></button>
              </div>
            </div>
          </div>
          <div className=" bg-white border border-zinc rounded-md mt-8">
            <button className="text-sm border border-zinc bg-zinc100 py-6 px-6 text-mutedColor hover:cursor-pointer rounded-l-md ">
              First
            </button>
            <button className="text-sm border border-zinc text-primaryColor py-6 px-6  hover:cursor-pointer  ">
              1
            </button>
            <button className="text-sm border border-zinc py-6 px-6 text-lightText bg-primaryColor hover:cursor-pointer  ">
              2
            </button>
            <button className="text-sm border border-zinc py-6 px-6 text-primaryColor hover:cursor-pointer  ">
              3
            </button>
            <button className="text-sm border border-zinc py-6 px-6 text-primaryColor hover:cursor-pointer rounded-r-md ">
              Next
            </button>
          </div>
          <div className="w-full  flex justify-center bg-lightGray">
        {/* Icon gelecek */}
            </div>
          </div>
        </div>
     
    );
  }
  
  export default Products;