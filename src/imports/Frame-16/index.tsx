import videoImg4105 from "@/assets/puma/IMG_4105.webm";
import videoFinal from "@/assets/puma/Финал.webm";
import videoComp2 from "@/assets/puma/Композиция 2.webm";

function Frame1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-between left-1/2 top-1/2 w-[1800px]">
      <video
        src={videoImg4105}
        autoPlay
        loop
        muted
        playsInline
        controls
        onClick={(e) => { e.currentTarget.muted = false; }}
        className="block h-[960px] w-[540px] object-cover rounded-[30px] shadow-lg border border-black/10 shrink-0 relative"
        data-name="IMG_4105 1"
      />
      <video
        src={videoFinal}
        autoPlay
        loop
        muted
        playsInline
        controls
        onClick={(e) => { e.currentTarget.muted = false; }}
        className="block h-[960px] w-[540px] object-cover rounded-[30px] shadow-lg border border-black/10 shrink-0 relative"
        data-name="Финал 1"
      />
      <video
        src={videoComp2}
        autoPlay
        loop
        muted
        playsInline
        controls
        onClick={(e) => { e.currentTarget.muted = false; }}
        className="block h-[960px] w-[540px] object-cover rounded-[30px] shadow-lg border border-black/10 shrink-0 relative"
        data-name="Композиция 2"
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