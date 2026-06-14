import img1 from "./673cc019bebd12261cf643673fe573db9dd637ec.webp";
import img2 from "./c7cf3708bd008755fbfb1cd314dbbcfee66823e5.webp";
import img3 from "./972cb32632f7d3b20210777fd2046f72e3d2dc55.webp";

function Frame1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex h-[960px] items-start justify-between left-1/2 top-1/2 w-[1800px]">
      <div className="h-full relative shrink-0 w-[540px]" data-name="1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
      </div>
      <div className="h-full relative shrink-0 w-[540px]" data-name="2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
      </div>
      <div className="h-full relative shrink-0 w-[540px]" data-name="3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#eafa1b] relative size-full" data-name="Frame">
      <Frame1 />
    </div>
  );
}