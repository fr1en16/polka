function WhatsAppIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="mr-4 shrink-0">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.81 9.81 0 0012.04 2zm5.8 14.19c-.24.67-1.19 1.23-1.63 1.28-.43.05-.86.27-2.79-.49-2.47-.97-4.05-3.48-4.17-3.65-.12-.17-1.02-1.36-1.02-2.59 0-1.23.64-1.83.87-2.08.23-.25.5-.31.67-.31.17 0 .34.01.48.01.15.01.35-.06.55.42.2.49.69 1.68.75 1.8.06.12.1.27.02.43-.08.17-.17.27-.3.42-.12.14-.26.32-.37.43-.12.12-.25.26-.11.5.14.24.63 1.03 1.35 1.67.93.83 1.71 1.08 1.95 1.2.24.12.38.1.52-.06.14-.17.61-.71.77-.95.16-.24.33-.2.55-.12.23.08 1.45.68 1.7.8.25.12.42.18.48.29.06.11.06.64-.18 1.31z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="mr-4 shrink-0">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-.97.53-1.33.52-.4-.01-1.18-.23-1.76-.42-.71-.23-1.27-.35-1.22-.75.02-.2.29-.41.81-.62 3.19-1.39 5.32-2.3 6.38-2.73 3.03-1.23 3.66-1.45 4.07-1.46.09 0 .29.02.42.13.11.09.14.21.15.3.01.06.02.2-.01.35z" />
    </svg>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[30px] items-center left-1/2 text-[#ded8cb] top-1/2 w-[330px]">
      <p
        className="leading-[0.85] relative shrink-0 text-[65px] uppercase whitespace-nowrap animate-slide-up"
        style={{ fontFamily: "Impact, sans-serif" }}
      >
        Связаться
        <br aria-hidden />
        со мной
      </p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="[word-break:break-word] bg-black not-italic relative size-full text-center" data-name="Frame">
      {/* WhatsApp Button */}
      <a
        href="http://wa.me/+77478831903"
        target="_blank"
        rel="noopener noreferrer"
        className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center bg-[#25D366] text-white font-bold rounded-[32px] hover:scale-105 transition-transform duration-300 left-[450px] top-1/2 w-[380px] h-[120px] shadow-lg animate-slide-up delay-75"
        style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: "32px" }}
      >
        <WhatsAppIcon />
        WhatsApp
      </a>

      {/* Telegram Button */}
      <a
        href="http://t.me/le_eon"
        target="_blank"
        rel="noopener noreferrer"
        className="translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center bg-[#0088cc] text-white font-bold rounded-[32px] hover:scale-105 transition-transform duration-300 right-[450px] top-1/2 w-[380px] h-[120px] shadow-lg animate-slide-up delay-150"
        style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: "32px" }}
      >
        <TelegramIcon />
        Telegram
      </a>

      <Frame1 />
    </div>
  );
}