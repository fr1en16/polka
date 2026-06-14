import videoLukoilFinal from "@/assets/lukoil/Лукойл Финал.webm";
import videoImg0085 from "@/assets/lukoil/IMG_0085.webm";
import videoImg0080 from "@/assets/lukoil/IMG_0080.webm";
import videoImg0483 from "@/assets/lukoil/IMG_0483.webm";

export default function Frame() {
  return (
    <div className="bg-[#850217] relative size-full animate-fade-in" data-name="Frame">
      <video
        src={videoImg0483}
        autoPlay
        loop
        muted
        playsInline
        controls
        onClick={(e) => { e.currentTarget.muted = false; }}
        className="absolute block h-[961px] left-[60px] top-[60px] w-[540px] object-cover rounded-[30px] shadow-lg border border-[#ded8cb]/10"
        data-name="IMG_0483"
      />
      <video
        src={videoLukoilFinal}
        autoPlay
        loop
        muted
        playsInline
        controls
        onClick={(e) => { e.currentTarget.muted = false; }}
        className="absolute block h-[959px] left-[682px] top-[60px] w-[540px] object-cover rounded-[30px] shadow-lg border border-[#ded8cb]/10"
        data-name="Лукойл Финал"
      />
      <video
        src={videoImg0080}
        autoPlay
        loop
        muted
        playsInline
        controls
        onClick={(e) => { e.currentTarget.muted = false; }}
        className="absolute block h-[529.32px] left-[1309px] top-[63px] w-[297.743px] object-cover rounded-[20px] shadow-lg border border-[#ded8cb]/10"
        data-name="IMG_0080"
      />
      <video
        src={videoImg0085}
        autoPlay
        loop
        muted
        playsInline
        controls
        onClick={(e) => { e.currentTarget.muted = false; }}
        className="absolute block h-[529.32px] left-[1559px] top-[488px] w-[297.743px] object-cover rounded-[20px] shadow-lg border border-[#ded8cb]/10"
        data-name="IMG_0085"
      />
    </div>
  );
}