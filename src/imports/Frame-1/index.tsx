import imgVector from "./437ba606640120550a74075f9a9db980c195cada.png";

export default function Frame() {
  return (
    <div className="bg-black relative size-full" data-name="Frame">
      <div className="absolute bottom-[40px] h-[990px] left-[1152px] right-[70px]" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="990" src={imgVector} width="698" />
      </div>
      <p className="[word-break:break-word] absolute font-['Impact:Regular',sans-serif] leading-[1.2] left-[calc(50%-890px)] not-italic text-[#ded8cb] text-[65px] top-[40px] uppercase whitespace-nowrap">Обо мне</p>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter_Tight:Medium',sans-serif] justify-center leading-[0] left-[calc(50%-890px)] not-italic text-[#ded8cb] text-[42px] top-[840px] tracking-[-0.84px] w-[1018px] whitespace-pre-wrap">
        <p className="leading-[1.2] mb-0">
          Я — SMM-специалист с опытом работы
          <br aria-hidden />в продвижении брендов в разных сферах:
          <br aria-hidden />
          от нефтегазовой отрасли и IT-инфраструктуры
          <br aria-hidden />
          до автосервиса, детейлинга, моды и образования.
        </p>
        <p className="leading-[1.2] mb-0">​</p>
        <p className="leading-[1.2]">
          Моя задача — создавать контент, который
          <br aria-hidden />
          работает на результат: формирует доверие к бренду, увеличивает охваты и привлекает клиентов.
        </p>
      </div>
    </div>
  );
}