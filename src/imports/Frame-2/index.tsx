function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Inter_Tight:Medium',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[42px] text-black text-center tracking-[-0.84px] w-full">
        <p className="leading-[1.2]">Разные ниши: от тяжёлой техники и масел до моды и спорта.</p>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-[#a97c50] flex-[1_0_0] h-[800px] min-w-px relative rounded-[100px]" data-name="Card 3">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-between px-[32px] py-[68px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Stardos_Stencil:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[375px] text-black text-center uppercase w-full">
            <p className="leading-[375px]">1</p>
          </div>
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Inter_Tight:Medium',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[42px] text-black text-center tracking-[-0.84px] w-full">
        <p className="leading-[1.2]">Контент под каждую аудиторию: экспертный, дружеский, lifestyle или технический.</p>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#c04277] flex-[1_0_0] h-[800px] min-w-px relative rounded-[100px]" data-name="Card 1">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-between px-[32px] py-[68px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Stardos_Stencil:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[375px] text-black text-center uppercase w-full">
            <p className="leading-[375px]">2</p>
          </div>
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Inter_Tight:Medium',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[42px] text-black text-center tracking-[-0.84px] w-full">
        <p className="leading-[1.2]">
          Упор на результат: рост вовлечённости, доверия
          <br aria-hidden />и узнаваемости бренда.
        </p>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[#ff6a3b] flex-[1_0_0] h-[800px] min-w-px relative rounded-[100px]" data-name="Card 5">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-between px-[32px] py-[68px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Stardos_Stencil:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[375px] text-black text-center uppercase w-full">
            <p className="leading-[375px]">3</p>
          </div>
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bottom-[40px] content-stretch flex gap-[40px] items-center left-[70px] w-[1780px]">
      <Card1 />
      <Card />
      <Card2 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-black relative size-full" data-name="Frame">
      <Frame4 />
      <p className="[word-break:break-word] absolute font-['Impact:Regular',sans-serif] leading-[1.2] left-[calc(50%-890px)] not-italic text-[#ded8cb] text-[65px] top-[40px] uppercase whitespace-nowrap">Итоги и ценность моей работы</p>
    </div>
  );
}