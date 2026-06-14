import videoSofa from "@/assets/puma/Софа.webm";
import videoComp4 from "@/assets/puma/Композиция 4.webm";
import videoComp5 from "@/assets/puma/Композиция 5_1.webm";

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[90px] items-center left-[60px] top-[60px]">
      <video
        src={videoSofa}
        autoPlay
        loop
        muted
        playsInline
        controls
        onClick={(e) => { e.currentTarget.muted = false; }}
        className="block h-[960px] w-[540px] object-cover rounded-[30px] shadow-lg border border-black/10 shrink-0 relative"
        data-name="Софа 1"
      />
      <video
        src={videoComp4}
        autoPlay
        loop
        muted
        playsInline
        controls
        onClick={(e) => { e.currentTarget.muted = false; }}
        className="block h-[960px] w-[540px] object-cover rounded-[30px] shadow-lg border border-black/10 shrink-0 relative"
        data-name="Композиция 4"
      />
      <video
        src={videoComp5}
        autoPlay
        loop
        muted
        playsInline
        controls
        onClick={(e) => { e.currentTarget.muted = false; }}
        className="block h-[960px] w-[540px] object-cover rounded-[30px] shadow-lg border border-black/10 shrink-0 relative"
        data-name="Композиция 5_1"
      />
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