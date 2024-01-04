import { FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="mx-53 my-11 sm:mx-20 sm:my-8 sm:gap-1 ">
      <div className="flex justify-between items-center text-center">
        <h2 className="text-2xl text-slate-800 font-bold leading-loose tracking-tight">
          Bandage
        </h2>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagramSquare />
          </a>
          <a href="https://www.twitter.com/">
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className="flex text-start justify-between mt-8 text-sm">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold">Company Info</h2>
          <div className="flex flex-col gap-1.5">
            <a href="#">About Us</a>
            <a href="#">Carrier</a>
            <a href="#">We are hiring</a>
            <a href="#">Blog</a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold">Legal</h2>
          <div className="flex flex-col gap-1.5">
            <a href="#">About Us</a>
            <a href="#">Carrier</a>
            <a href="#">We are hiring</a>
            <a href="#">Blog</a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold">Features</h2>
          <div className="flex flex-col gap-1.5">
            <a href="#">About Us</a>
            <a href="#">Carrier</a>
            <a href="#">We are hiring</a>
            <a href="#">Blog</a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold">Resources</h2>
          <div className="flex flex-col gap-1.5">
            <a href="#">About Us</a>
            <a href="#">Carrier</a>
            <a href="#">We are hiring</a>
            <a href="#">Blog</a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-slate-800 text-base font-bold leading-normal tracking-tight">
            Get in Touch
          </h5>
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Your Email"
                className="p-3 border rounded-l-md text-neutral-500 bg-stone-50 "
              />
              <button className="py-3 px-6 border border-neutral-200 bg-[#23A6F0] text-white rounded-r-md">
                Subscribe
              </button>
            </div>
            <p className="text-neutral-500 text-xs ">Lore imp sum dolor Amit</p>
          </div>
        </div>
      </div>
      <div className="mt-14 flex items-center">
        <p className="text-neutral-500 text-sm font-bold">
          Made With Love By Finland All Right Reserved
        </p>
      </div>
    </div>
  );
}
