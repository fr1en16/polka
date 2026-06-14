import { useState, useEffect, useRef, useCallback } from "react";

// ── Desktop Frame imports ─────────────────────────────────────────────────────
import HeroFrame from "@/imports/Frame/index";
import AboutFrame from "@/imports/Frame-1/index";
import ValuesFrame from "@/imports/Frame-2/index";
import PortfolioFrame from "@/imports/Frame-3/index";
import LukoilFrame from "@/imports/Frame-4/index";
import LukoilGalleryFrame from "@/imports/Frame-5/index";
import PumaFrame from "@/imports/Frame-6/index";
import PumaGalleryFrame from "@/imports/Frame-7/index";
import PumaGallery2Frame from "@/imports/Frame-8/index";
import PumaGallery3Frame from "@/imports/Frame-9/index";
import PumaVideo1Frame from "@/imports/Frame-16/index";
import PumaVideo2Frame from "@/imports/Frame-17/index";
import DiskokrasFrame from "@/imports/Frame-10/index";
import NscomFrame from "@/imports/Frame-11/index";
import SankariFrame from "@/imports/Frame-12/index";
import MotoFrame from "@/imports/Frame-13/index";
import LogisticFrame from "@/imports/Frame-14/index";
import ContactFrame from "@/imports/Frame-15/index";

// ── Mobile image imports ──────────────────────────────────────────────────────
import imgAboutPhoto from "@/imports/Frame-1/437ba606640120550a74075f9a9db980c195cada.png";
import imgLukoilScreenshot from "@/imports/Frame-4/316f2a05f1b8e51c9eb01203f06930e023dbfe04.png";
import imgPumaLogo from "@/imports/Frame-6/958e63ec4f23278dddfc41ab7dc54938e8103cf6.png";
import imgPumaScreenshot from "@/imports/Frame-6/316f2a05f1b8e51c9eb01203f06930e023dbfe04.png";
import imgPumaG1 from "@/imports/Frame-7/673cc019bebd12261cf643673fe573db9dd637ec.png";
import imgPumaG2 from "@/imports/Frame-7/c7cf3708bd008755fbfb1cd314dbbcfee66823e5.png";
import imgPumaG3 from "@/imports/Frame-7/972cb32632f7d3b20210777fd2046f72e3d2dc55.png";
import imgDiskokrasScreenshot from "@/imports/Frame-10/538283d76957e6dee3d4566f655e9217a8c749de.png";
import imgNscomLogo from "@/imports/Frame-11/044f2528992789c9c5cbafe99f8f4fdebc30e0c6.png";
import imgNscomScreenshot from "@/imports/Frame-11/d15427f5216926d3417cea79cbc91dc877772601.png";
import imgSankariLogo from "@/imports/Frame-12/e6abc99856300b9d7298425d0514afbdc0e8b065.png";
import imgSankariScreenshot from "@/imports/Frame-12/6438b05caee0f7fea82384c1785abe6547b6b3ca.png";
import imgMotoScreenshot from "@/imports/Frame-13/c41dfa21052148252a8632157da032cbf07edf95.png";
import imgLogisticScreenshot from "@/imports/Frame-14/92f39cc0318b0f3ecd44fc6f4ff3cbfe3e07896c.png";

// ── Mobile video imports ──────────────────────────────────────────────────────
import videoLukoilFinal from "@/assets/lukoil/Лукойл Финал.webm";
import videoImg0483 from "@/assets/lukoil/IMG_0483.webm";
import videoImg0080 from "@/assets/lukoil/IMG_0080.webm";
import videoImg0085 from "@/assets/lukoil/IMG_0085.webm";
import videoImg4105 from "@/assets/puma/IMG_4105.webm";
import videoFinal from "@/assets/puma/Финал.webm";
import videoComp2 from "@/assets/puma/Композиция 2.webm";
import videoSofa from "@/assets/puma/Софа.webm";
import videoComp4 from "@/assets/puma/Композиция 4.webm";
import videoComp5 from "@/assets/puma/Композиция 5_1.webm";

// ── Constants ─────────────────────────────────────────────────────────────────
const DESIGN_W = 1920;
const DESIGN_H = 1080;

const IMPACT: React.CSSProperties = { fontFamily: 'Impact, "Arial Narrow", sans-serif' };
const INTER: React.CSSProperties = { fontFamily: "'Inter Tight', sans-serif" };
const STENCIL: React.CSSProperties = { fontFamily: "'Stardos Stencil', serif" };

// ── Shared mobile primitives ──────────────────────────────────────────────────
function TriIcon() {
  return (
    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" className="shrink-0 mt-[3px]">
      <path d="M9 0L18 16H0Z" fill="#C04277" />
    </svg>
  );
}
function PentIcon() {
  return (
    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" className="shrink-0 mt-[3px]">
      <path d="M10 0L20 7.27L16.18 19H3.82L0 7.27Z" fill="#FF6A3B" />
    </svg>
  );
}

// ── Mobile: Case study slide ──────────────────────────────────────────────────
interface CaseProps {
  outerBg: string;
  innerBg: string;
  handle: string;
  url: string;
  bullet1: string;
  bullet2: string;
  screenshot: string;
  lightText?: boolean;
  dividerColor?: string;
  logo?: React.ReactNode;
}
function MobileCaseSlide({
  outerBg, innerBg, handle, url, bullet1, bullet2,
  screenshot, lightText = true, dividerColor, logo,
}: CaseProps) {
  const fg = lightText ? "#ded8cb" : "#1f1f1f";
  const div = dividerColor ?? (lightText ? "rgba(222,216,203,0.35)" : "rgba(0,0,0,0.18)");
  return (
    <div className="w-full min-h-[100dvh] relative flex flex-col py-5 px-3" style={{ background: outerBg }}>
      <div
        className="flex-1 flex flex-col justify-between overflow-hidden rounded-[28px] p-5 gap-3.5"
        style={{ background: innerBg }}
      >
        {/* Logo */}
        {logo && (
          <div className="shrink-0 animate-fade-in">{logo}</div>
        )}
        {/* Handle */}
        <div className="shrink-0 animate-slide-up delay-75">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline break-all hover:opacity-85 transition-opacity"
            style={{ color: fg, ...INTER, fontWeight: 700, fontSize: "clamp(16px,4.5vw,22px)", letterSpacing: "-0.02em" }}
          >
            @{handle}
          </a>
        </div>
        {/* Bullets */}
        <div className="flex flex-col gap-3.5 shrink-0 animate-slide-up delay-150">
          <div className="w-full h-px" style={{ background: div }} />
          <div className="flex gap-3 items-start">
            <TriIcon />
            <p style={{ color: fg, ...INTER, fontWeight: 500, fontSize: "clamp(13px,3.5vw,16px)", lineHeight: 1.45 }}>
              {bullet1}
            </p>
          </div>
          <div className="w-full h-px" style={{ background: div }} />
          <div className="flex gap-3 items-start">
            <PentIcon />
            <p style={{ color: fg, ...INTER, fontWeight: 500, fontSize: "clamp(13px,3.5vw,16px)", lineHeight: 1.45 }}>
              {bullet2}
            </p>
          </div>
          <div className="w-full h-px" style={{ background: div }} />
        </div>
        {/* Screenshot */}
        <div className="flex-1 flex items-end justify-center min-h-[290px] mt-2 animate-slide-up delay-250">
          <img
            src={screenshot}
            alt="Instagram"
            className="max-h-[450px] w-auto object-contain rounded-[22px] shadow-2xl border border-white/10 hover-grow cursor-pointer"
            style={{ maxWidth: "94%" }}
          />
        </div>
      </div>
    </div>
  );
}

// ── Mobile slide components ────────────────────────────────────────────────────

function MobileHero() {
  return (
    <div className="w-full min-h-[100dvh] bg-black flex flex-col items-center justify-center gap-5">
      <h1
        className="text-[#ded8cb] leading-none uppercase select-none animate-slide-up"
        style={{ ...IMPACT, fontSize: "clamp(80px, 30vw, 200px)" }}
      >
        SMM
      </h1>
      <p
        className="text-[#ded8cb] tracking-[0.12em] uppercase animate-slide-up delay-150"
        style={{ ...INTER, fontWeight: 500, fontSize: "clamp(11px,3vw,16px)" }}
      >
        Аполлинария Пилипюк
      </p>
    </div>
  );
}

function MobileAbout() {
  return (
    <div className="w-full min-h-[100dvh] relative flex flex-col justify-end py-12 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={imgAboutPhoto}
          alt="Аполлинария Пилипюк"
          className="w-full h-full object-cover object-top brightness-[0.35]"
        />
      </div>
      
      {/* Text Content Overlay */}
      <div className="relative z-10 flex flex-col gap-4">
        <p
          className="text-[#ded8cb] uppercase pb-2 animate-slide-up"
          style={{ ...IMPACT, fontSize: "clamp(32px,8vw,48px)" }}
        >
          Обо мне
        </p>
        <div className="flex flex-col gap-4">
          <p className="animate-slide-up delay-100" style={{ color: "#ded8cb", ...INTER, fontWeight: 500, fontSize: "clamp(14px,4vw,18px)", lineHeight: 1.6 }}>
            Я — SMM-специалист с опытом работы в продвижении брендов в разных сферах: от нефтегазовой отрасли и IT-инфраструктуры до автосервиса, детейлинга, моды и образования.
          </p>
          <p className="animate-slide-up delay-200" style={{ color: "#ded8cb", ...INTER, fontWeight: 500, fontSize: "clamp(14px,4vw,18px)", lineHeight: 1.6 }}>
            Моя задача — создавать контент, который работает на результат: формирует доверие к бренду, увеличивает охваты и привлекает клиентов.
          </p>
        </div>
      </div>
    </div>
  );
}

function MobileValues() {
  const cards = [
    { num: "1", bg: "#a97c50", text: "Разные ниши: от тяжёлой техники и масел до моды и спорта." },
    { num: "2", bg: "#c04277", text: "Контент под каждую аудиторию: экспертный, дружеский, lifestyle или технический." },
    { num: "3", bg: "#ff6a3b", text: "Упор на результат: рост вовлечённости, доверия и узнаваемости бренда." },
  ];
  return (
    <div className="w-full min-h-[100dvh] bg-black flex flex-col py-12 px-6 gap-6 justify-center">
      <p
        className="text-[#ded8cb] uppercase text-left animate-slide-up"
        style={{ ...IMPACT, fontSize: "clamp(24px,6vw,36px)" }}
      >
        Итоги и ценность моей работы
      </p>
      <div className="flex flex-col gap-4">
        {cards.map(({ num, bg, text }, idx) => (
          <div
            key={num}
            className={`rounded-[24px] flex flex-col items-center justify-between px-6 py-6 min-h-[160px] gap-4 animate-slide-up delay-${(idx + 1) * 100} hover-grow`}
            style={{ background: bg }}
          >
            <p
              className="text-black leading-none"
              style={{ ...STENCIL, fontSize: "clamp(48px,12vw,72px)" }}
            >
              {num}
            </p>
            <p
              className="text-black text-center"
              style={{ ...INTER, fontWeight: 600, fontSize: "clamp(13px,3.8vw,16px)", lineHeight: 1.4 }}
            >
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobilePortfolioTitle() {
  return (
    <div className="w-full min-h-[100dvh] bg-[#baff3b] flex items-center justify-center">
      <h2
        className="text-[#6a8537] leading-[0.85] uppercase text-center px-4 animate-slide-up"
        style={{ ...IMPACT, fontSize: "clamp(64px,20vw,140px)" }}
      >
        порт<br />фолио
      </h2>
    </div>
  );
}

function MobileLukoilCase() {
  return (
    <MobileCaseSlide
      outerBg="#ded8cb"
      innerBg="#CE0E2D"
      handle="lukoil.lubricants.kz"
      url="http://instagram.com/lukoil.lubricants.kz"
      bullet1="Фирменные масла и смазочные материалы для легковых, грузовых авто и спецтехники."
      bullet2="Фокус: надёжность продукции, новинки масел, акции и открытие новых ПЗМ (пунктов замены масел)."
      screenshot={imgLukoilScreenshot}
      logo={
        <span
          className="text-white font-bold tracking-wider"
          style={{ ...INTER, fontSize: "clamp(16px,5vw,24px)" }}
        >
          LUKOIL
        </span>
      }
    />
  );
}

function MobileLukoilGallery() {
  const videos = [videoImg0483, videoLukoilFinal, videoImg0080, videoImg0085];
  return (
    <div className="w-full min-h-[100dvh] bg-[#850217] flex flex-col justify-center py-12">
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 py-4 no-scrollbar animate-slide-up">
        {videos.map((vid, idx) => (
          <div key={idx} className="snap-center shrink-0 w-[280px] aspect-[9/16] rounded-2xl overflow-hidden bg-black/30 border border-[#ded8cb]/10 hover-grow">
            <video
              src={vid}
              autoPlay
              loop
              muted
              playsInline
              controls
              onClick={(e) => { e.currentTarget.muted = false; }}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function MobilePumaCase() {
  return (
    <MobileCaseSlide
      outerBg="#ded8cb"
      innerBg="#E7F254"
      handle="puma_fam_kz"
      url="https://www.instagram.com/puma_fam_kz"
      bullet1="Международный спортивный бренд."
      bullet2="Фокус: спортивная экипировка, локальные кампании и коллаборации в Казахстане."
      screenshot={imgPumaScreenshot}
      lightText={false}
      dividerColor="rgba(0,0,0,0.15)"
      logo={
        <img src={imgPumaLogo} alt="PUMA" className="object-contain animate-pulse" style={{ height: "clamp(32px,8vw,52px)" }} />
      }
    />
  );
}

function MobilePumaGallery() {
  const photos = [imgPumaG1, imgPumaG2, imgPumaG3];
  const videos = [videoImg4105, videoFinal, videoComp2, videoSofa, videoComp4, videoComp5];
  return (
    <div className="w-full bg-[#eafa1b] flex flex-col justify-center py-12 gap-8">
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 py-4 no-scrollbar animate-slide-up">
        {photos.map((img, idx) => (
          <div key={idx} className="snap-center shrink-0 w-[280px] aspect-[9/16] rounded-2xl overflow-hidden bg-black/10 border border-black/5 hover-grow">
            <img src={img} alt={`Puma пост ${idx + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 py-4 no-scrollbar animate-slide-up delay-150">
        {videos.map((vid, idx) => (
          <div key={idx} className="snap-center shrink-0 w-[280px] aspect-[9/16] rounded-2xl overflow-hidden bg-black/10 border border-black/5 hover-grow">
            <video src={vid} autoPlay loop muted playsInline controls onClick={(e) => { e.currentTarget.muted = false; }} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}


function MobileDiskokrasCase() {
  return (
    <MobileCaseSlide
      outerBg="#ded8cb"
      innerBg="#1a1a1a"
      handle="Diskokras.kz"
      url="https://www.instagram.com/Diskokras.kz"
      bullet1="Ремонт, покраска и восстановление автомобильных дисков, а также шины."
      bullet2="Фокус: до/после, уникальные технологии реставрации, практические советы по уходу."
      screenshot={imgDiskokrasScreenshot}
      logo={
        <span
          className="text-white font-bold tracking-wider uppercase"
          style={{ ...INTER, fontSize: "clamp(14px,4.5vw,20px)" }}
        >
          DISKOKRAS
        </span>
      }
    />
  );
}

function MobileNscomCase() {
  return (
    <MobileCaseSlide
      outerBg="#ded8cb"
      innerBg="#E4B808"
      handle="nscom.kz"
      url="http://instagram.com/nscom.kz"
      bullet1="IT-интегратор и дата-центр."
      bullet2="Фокус: цифровая трансформация, кибербезопасность, облачные решения и инфраструктура для бизнеса."
      screenshot={imgNscomScreenshot}
      lightText={false}
      dividerColor="rgba(0,0,0,0.18)"
      logo={
        <img src={imgNscomLogo} alt="NSCom" className="object-contain" style={{ height: "clamp(36px,9vw,56px)" }} />
      }
    />
  );
}

// ── Mobile slide components 3 ──────────────────────────────────────────────────

function MobileSankariCase() {
  return (
    <MobileCaseSlide
      outerBg="#ded8cb"
      innerBg="#F1D937"
      handle="sankarimotors"
      url="https://www.instagram.com/sankarimotors"
      bullet1="Официальный дистрибьютор японской спецтехники и погрузчиков в Казахстане."
      bullet2="Фокус: надёжность японской техники, выгода для бизнеса, наличие на складе."
      screenshot={imgSankariScreenshot}
      lightText={false}
      dividerColor="rgba(0,0,0,0.15)"
      logo={
        <img src={imgSankariLogo} alt="Sankari Motors" className="object-contain" style={{ height: "clamp(32px,8vw,50px)" }} />
      }
    />
  );
}

function MobileMotoCase() {
  return (
    <MobileCaseSlide
      outerBg="#ded8cb"
      innerBg="#BF1518"
      handle="Klimakin_motoschool"
      url="https://www.instagram.com/Klimakin_motoschool"
      bullet1="Мотошкола: обучение вождению мотоциклов."
      bullet2="Фокус: безопасность, опыт инструкторов, комьюнити байкеров."
      screenshot={imgMotoScreenshot}
    />
  );
}

function MobileLogisticCase() {
  return (
    <MobileCaseSlide
      outerBg="#ded8cb"
      innerBg="#1553BF"
      handle="Alexandr.kuguyenko"
      url="https://www.instagram.com/Alexandr.kuguyenko"
      bullet1="Личный бренд в логистике: продвижение услуг, экспертный имидж."
      bullet2="Фокус: деловой стиль, экспертность, клиентские кейсы."
      screenshot={imgLogisticScreenshot}
    />
  );
}

function MobileContact() {
  return (
    <div className="w-full min-h-[100dvh] bg-black flex flex-col items-center justify-center gap-10 px-6 py-12">
      <div className="text-center flex flex-col gap-3 animate-slide-up">
        <p
          className="text-[#ded8cb] uppercase leading-none"
          style={{ ...IMPACT, fontSize: "clamp(32px,9vw,56px)" }}
        >
          Связаться<br />со мной
        </p>
        <p
          className="text-[#ded8cb]/50 leading-relaxed"
          style={{ ...INTER, fontWeight: 500, fontSize: "clamp(12px,3.2vw,15px)" }}
        >
          Вы можете кликнуть надписи,<br />чтобы написать
        </p>
      </div>
      <div className="flex gap-10 items-baseline animate-slide-up delay-150">
        <a
          href="http://wa.me/+77478831903"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline uppercase hover:opacity-80 transition-opacity"
          style={{ ...INTER, fontWeight: 700, fontSize: "clamp(56px,20vw,120px)", letterSpacing: "0.04em", lineHeight: 1 }}
        >
          WA
        </a>
        <a
          href="http://t.me/le_eon"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline uppercase hover:opacity-80 transition-opacity"
          style={{ ...INTER, fontWeight: 700, fontSize: "clamp(56px,20vw,120px)", letterSpacing: "0.04em", lineHeight: 1 }}
        >
          TG
        </a>
      </div>
    </div>
  );
}

// ── Slide registries ──────────────────────────────────────────────────────────
const desktopSlides = [
  { id: "hero",           Component: HeroFrame,          label: "Главная", bg: "#000000" },
  { id: "about",          Component: AboutFrame,         label: "Обо мне", bg: "#000000" },
  { id: "values",         Component: ValuesFrame,        label: "Ценность", bg: "#000000" },
  { id: "portfolio",      Component: PortfolioFrame,     label: "Портфолио", bg: "#baff3b" },
  { id: "lukoil",         Component: LukoilFrame,        label: "Лукойл", bg: "#ded8cb" },
  { id: "lukoil-g",       Component: LukoilGalleryFrame, label: "Лукойл — посты", bg: "#850217" },
  { id: "puma",           Component: PumaFrame,          label: "Puma", bg: "#ded8cb" },
  { id: "puma-g1",        Component: PumaGalleryFrame,   label: "Puma — посты", bg: "#eafa1b" },
  { id: "puma-g2",        Component: PumaGallery2Frame,  label: "Puma — видео 1", bg: "#eafa1b" },
  { id: "puma-g3",        Component: PumaGallery3Frame,  label: "Puma — видео 2", bg: "#eafa1b" },
  { id: "diskokras",      Component: DiskokrasFrame,     label: "Diskokras", bg: "#ded8cb" },
  { id: "nscom",          Component: NscomFrame,         label: "NSCOM", bg: "#ded8cb" },
  { id: "sankari",        Component: SankariFrame,       label: "Sankari Motors", bg: "#ded8cb" },
  { id: "moto",           Component: MotoFrame,          label: "Мотошкола", bg: "#ded8cb" },
  { id: "logistic",       Component: LogisticFrame,      label: "Логистика", bg: "#ded8cb" },
  { id: "contact",        Component: ContactFrame,       label: "Контакты", bg: "#000000" },
];

const mobileSlides = [
  { id: "hero",      Component: MobileHero },
  { id: "about",     Component: MobileAbout },
  { id: "values",    Component: MobileValues },
  { id: "portfolio", Component: MobilePortfolioTitle },
  { id: "lukoil",    Component: MobileLukoilCase },
  { id: "lukoil-g",  Component: MobileLukoilGallery },
  { id: "puma",      Component: MobilePumaCase },
  { id: "puma-g",    Component: MobilePumaGallery },
  { id: "diskokras", Component: MobileDiskokrasCase },
  { id: "nscom",     Component: MobileNscomCase },
  { id: "sankari",   Component: MobileSankariCase },
  { id: "moto",      Component: MobileMotoCase },
  { id: "logistic",  Component: MobileLogisticCase },
  { id: "contact",   Component: MobileContact },
];

// ── Reveal Observer Hook ──────────────────────────────────────────────────────
function useRevealObserver(slideIds: string[]) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
          } else {
            entry.target.classList.remove("reveal");
          }
        });
      },
      {
        root: null,
        rootMargin: "-8% 0px -8% 0px", // Trigger when slide starts entering
        threshold: 0.12,
      }
    );

    slideIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [slideIds]);
}

// ── Viewport hook ─────────────────────────────────────────────────────────────
function useViewport() {
  const [w, setW] = useState(() => (typeof window !== "undefined" ? window.innerWidth : 1280));
  useEffect(() => {
    const update = () => setW(window.innerWidth);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return w;
}

// ── Desktop: scaled slide ─────────────────────────────────────────────────────
function DesktopSlide({ children, bg = "#000000" }: { children: React.ReactNode; bg?: string }) {
  const [dims, setDims] = useState({
    w: typeof window !== "undefined" ? window.innerWidth : DESIGN_W,
    h: typeof window !== "undefined" ? window.innerHeight : DESIGN_H,
  });
  useEffect(() => {
    const update = () => setDims({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const scale = dims.w / DESIGN_W;
  const scaledHeight = DESIGN_H * scale;
  const containerHeight = Math.max(dims.h, scaledHeight);
  const oy = (containerHeight - scaledHeight) / 2;

  return (
    <div 
      className="w-full relative shrink-0 overflow-hidden" 
      style={{ height: containerHeight, backgroundColor: bg }}
    >
      <div style={{ width: DESIGN_W, height: DESIGN_H, transform: `scale(${scale})`, transformOrigin: "top left", position: "absolute", top: oy, left: 0 }}>
        {children}
      </div>
    </div>
  );
}

// ── Desktop app ───────────────────────────────────────────────────────────────
function DesktopApp() {
  const [current, setCurrent] = useState(0);
  const n = desktopSlides.length;

  useRevealObserver(desktopSlides.map((s) => s.id));

  const goTo = useCallback((i: number) => {
    const slide = desktopSlides[i];
    if (slide) {
      const el = document.getElementById(slide.id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Intersection Observer to track scroll position and highlight current dot
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = desktopSlides.findIndex((s) => s.id === entry.target.id);
            if (index !== -1) {
              setCurrent(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-49% 0px -49% 0px",
        threshold: 0,
      }
    );

    desktopSlides.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-black min-h-screen">
      <div className="flex flex-col w-full">
        {desktopSlides.map(({ id, Component, bg }) => (
          <div id={id} key={id} className="w-full">
            <DesktopSlide bg={bg}><Component /></DesktopSlide>
          </div>
        ))}
      </div>

      {/* Dots */}
      <nav className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-[7px]">
        {desktopSlides.map((s, i) => (
          <button key={s.id} onClick={() => goTo(i)} title={s.label} className="group relative flex items-center justify-end">
            <span className="absolute right-5 whitespace-nowrap text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none px-2 py-1 rounded bg-black/70 text-white" style={INTER}>
              {s.label}
            </span>
            <span className={`block rounded-full transition-all duration-300 ${i === current ? "w-[10px] h-[10px] bg-white" : "w-[6px] h-[6px] bg-white/35 hover:bg-white/60"}`} />
          </button>
        ))}
      </nav>

      {/* Counter */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 text-white/35 text-xs tracking-widest select-none bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md" style={INTER}>
        {String(current + 1).padStart(2, "0")}&nbsp;/&nbsp;{String(n).padStart(2, "0")}
      </div>

      {/* Arrows */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {current > 0 && (
          <button onClick={prev} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 transition-colors text-white backdrop-blur-sm" aria-label="Назад">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 11L7 3M3 6l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        )}
        {current < n - 1 && (
          <button onClick={next} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 transition-colors text-white backdrop-blur-sm" aria-label="Далее">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 3L7 11M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        )}
      </div>
    </div>
  );
}

// ── Mobile app: continuous scroll ─────────────────────────────────────────────
function MobileApp() {
  useRevealObserver(mobileSlides.map((s) => s.id));
  return (
    <div className="w-full bg-black min-h-screen flex flex-col">
      {mobileSlides.map(({ id, Component }) => (
        <div
          id={id}
          key={id}
          className="w-full relative overflow-hidden min-h-[100dvh] flex flex-col justify-center"
        >
          <Component />
        </div>
      ))}
    </div>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────
export default function App() {
  const w = useViewport();
  return w < 768 ? <MobileApp /> : <DesktopApp />;
}
