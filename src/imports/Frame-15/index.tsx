function Frame1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[30px] items-center left-1/2 text-[#ded8cb] top-1/2 w-[330px]">
      <p className="font-['Impact:Regular',sans-serif] leading-[0.85] relative shrink-0 text-[65px] uppercase whitespace-nowrap">
        Связаться
        <br aria-hidden />
        со мной
      </p>
      <p className="font-['Inter_Tight:Medium',sans-serif] leading-none min-w-full relative shrink-0 text-[28px] tracking-[-0.56px] w-[min-content]">
        Вы можете
        <br aria-hidden />
        кликнуть надписи,
        <br aria-hidden />
        чтобы написать
      </p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="[word-break:break-word] bg-black not-italic relative size-full text-center" data-name="Frame">
      <a className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter_Tight:Bold',sans-serif] justify-center leading-[0] left-[309.5px] text-[240px] text-white top-1/2 tracking-[24px] uppercase whitespace-nowrap" href="http://wa.me/+77478831903" target="_blank">
        <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[183.711px] underline">wa</p>
      </a>
      <a className="-translate-y-1/2 absolute flex flex-col font-['Inter_Tight:Bold',sans-serif] justify-center leading-[0] right-[318px] text-[240px] text-white top-1/2 tracking-[24px] translate-x-1/2 uppercase w-[436px]" href="http://t.me/le_eon" target="_blank">
        <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[227.134px] underline">tg</p>
      </a>
      <Frame1 />
    </div>
  );
}