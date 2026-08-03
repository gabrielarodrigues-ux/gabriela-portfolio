import svgPaths from "./svg-fqmlcnpwtn";
type PaymentMethodMastercardProps = {
  className?: string;
  size?: "48";
};

function PaymentMethodMastercard({ className, size = "48" }: PaymentMethodMastercardProps) {
  return (
    <div className={className || "h-[48px] relative w-[70px]"}>
      <div className="absolute bg-white border border-[#d9d9d9] border-solid inset-0 rounded-[6px]" data-name="BASE" />
      <div className="absolute inset-[20.83%_17.14%_21.64%_18.57%]" data-name="Mastercard">
        <svg className="absolute block inset-0 size-full" fill="none" height="27.6123" preserveAspectRatio="none" viewBox="0 0 45 27.6123" width="45">
          <g id="Mastercard">
            <path d={svgPaths.p29595c00} fill="#ED0006" id="Left" />
            <path d={svgPaths.pe0fc600} fill="#F9A000" id="Right" />
            <path d={svgPaths.p39fae600} fill="#FF5E00" id="Middle" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute left-[49px] top-[34px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[40px] relative shrink-0 text-[26.667px] text-white tracking-[-1.0667px] whitespace-nowrap">Portal do Assinante</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[27px] relative shrink-0 text-[18px] tracking-[-0.54px] w-[840px] whitespace-nowrap">
      <p className="[text-underline-position:from-font] decoration-from-font decoration-solid font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold relative shrink-0 text-white underline">Dashboard</p>
      <p className="font-['Plus_Jakarta_Sans:Light',sans-serif] font-light relative shrink-0 text-[rgba(255,255,255,0.9)]">Assinaturas</p>
      <p className="font-['Plus_Jakarta_Sans:Light',sans-serif] font-light relative shrink-0 text-[rgba(255,255,255,0.9)] text-center">Pagamentos</p>
      <p className="font-['Plus_Jakarta_Sans:Light',sans-serif] font-light relative shrink-0 text-[rgba(255,255,255,0.9)]">Cartões</p>
      <p className="font-['Plus_Jakarta_Sans:Light',sans-serif] font-light relative shrink-0 text-[rgba(255,255,255,0.9)] text-center">Minha Conta</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#e8ebf9] relative rounded-[33554400px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#0c1e69] text-[12px] text-center whitespace-nowrap">JS</p>
      </div>
    </div>
  );
}

function Layout1() {
  return (
    <div className="relative shrink-0" data-name="Layout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-center whitespace-nowrap">João Silva</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function SlotClone() {
  return (
    <div className="relative rounded-[14px] shrink-0" data-name="SlotClone">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pl-[4px] pr-[10px] py-[6px] relative size-full">
        <Text1 />
        <Layout1 />
        <Icon />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <SlotClone />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute left-[740px] top-[34px] w-[1151px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Frame2 />
        <Container />
      </div>
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-[rgba(255,255,255,0.05)] left-[1383px] rounded-[33554400px] size-[297px] top-[108px]" data-name="Container" />;
}

function Container2() {
  return <div className="absolute bg-[rgba(255,255,255,0.05)] left-[1587px] rounded-[33554400px] size-[143px] top-[72px]" data-name="Container" />;
}

function Header() {
  return (
    <div className="bg-[#0c1e69] h-[319px] relative rounded-bl-[120px] rounded-br-[120px] shrink-0 w-full" data-name="Header">
      <div aria-hidden className="absolute border-[rgba(177,183,188,0.3)] border-b border-solid inset-0 pointer-events-none rounded-bl-[120px] rounded-br-[120px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[35px] pt-[34px] px-[32px] relative size-full">
          <Text />
          <Frame3 />
          <Container1 />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Layout2() {
  return <div className="h-[906px] relative shrink-0 w-[1933px]" data-name="Layout" />;
}

function Layout() {
  return (
    <div className="absolute bg-[#f0f2f5] content-stretch flex flex-col items-start left-0 min-h-[944px] top-0" data-name="Layout">
      <Header />
      <Layout2 />
    </div>
  );
}

function FreepikBackgroundSimpleInject() {
  return (
    <div className="absolute inset-[9.37%_21.58%_26.84%_13.2%]" data-name="freepik--background-simple--inject-200">
      <svg className="absolute block inset-0 size-full" fill="none" height="65.0687" preserveAspectRatio="none" viewBox="0 0 66.5195 65.0687" width="66.5195">
        <g id="freepik--background-simple--inject-200">
          <path d={svgPaths.p16558080} fill="#407BFF" id="Vector" />
          <path d={svgPaths.p16558080} fill="#E8EBF9" id="Vector_2" opacity="0.9" />
        </g>
      </svg>
    </div>
  );
}

function FreepikShadowInject() {
  return (
    <div className="absolute inset-[80.98%_11.22%_14.49%_11.22%]" data-name="freepik--Shadow--inject-200">
      <svg className="absolute block inset-0 size-full" fill="none" height="4.61856" preserveAspectRatio="none" viewBox="0 0 79.1071 4.61856" width="79.1071">
        <g id="freepik--Shadow--inject-200">
          <path d={svgPaths.pa9b7f80} fill="#1431AE" id="freepik--path--inject-200" />
        </g>
      </svg>
    </div>
  );
}

function FreepikCharacter1Inject() {
  return (
    <div className="absolute inset-[23.05%_55.42%_16.74%_22.73%]" data-name="freepik--character-1--inject-200">
      <svg className="absolute block inset-0 size-full" fill="none" height="61.4199" preserveAspectRatio="none" viewBox="0 0 22.2876 61.4199" width="22.2876">
        <g id="freepik--character-1--inject-200">
          <path d={svgPaths.p6f3f3c0} fill="black" id="Vector" />
          <path d={svgPaths.p6f4d680} fill="black" id="Vector_2" />
          <path d={svgPaths.p3e2c8570} fill="#FF8B7B" id="Vector_3" />
          <path d={svgPaths.p11da2800} fill="#FF8B7B" id="Vector_4" />
          <path d={svgPaths.p1a23c00} fill="black" id="Vector_5" />
          <path d={svgPaths.p293a9280} fill="#1431AE" id="Vector_6" />
          <path d={svgPaths.p1e395d00} fill="black" id="Vector_7" opacity="0.2" />
          <path d={svgPaths.p2bedaf00} fill="black" id="Vector_8" />
          <path d={svgPaths.p31cae080} fill="#FF8B7B" id="Vector_9" />
          <path d={svgPaths.p34d6eb00} fill="black" id="Vector_10" />
          <path d={svgPaths.p29c3d00} fill="#FF8B7B" id="Vector_11" />
          <path d={svgPaths.p14ca7800} fill="black" id="Vector_12" opacity="0.2" />
          <path d={svgPaths.p3f04edf0} fill="#FF8B7B" id="Vector_13" />
          <path d={svgPaths.p36770900} fill="black" id="Vector_14" opacity="0.2" />
          <path d={svgPaths.p2f21a600} fill="#FF8B7B" id="Vector_15" />
          <path d={svgPaths.p1934ba00} fill="black" id="Vector_16" />
          <path d={svgPaths.p2e698700} fill="black" id="Vector_17" />
          <path d={svgPaths.p54b4700} fill="white" id="Vector_18" />
          <path d={svgPaths.p15a9b980} fill="#FF8B7B" id="Vector_19" />
          <path d={svgPaths.p37b5200} fill="black" id="Vector_20" />
          <path d={svgPaths.p3f4aa200} fill="black" id="Vector_21" />
          <path d={svgPaths.p249b2180} fill="#1431AE" id="Vector_22" />
          <path d={svgPaths.p268a9e30} fill="black" id="Vector_23" />
          <path d={svgPaths.pb9c2d80} fill="black" id="Vector_24" />
          <path d={svgPaths.p2e34ce00} fill="black" id="Vector_25" />
          <path d={svgPaths.p36b84200} fill="#FF5652" id="Vector_26" />
          <path d={svgPaths.pfdc5d00} fill="#FF8B7B" id="Vector_27" />
          <path d={svgPaths.p33894cf2} fill="black" id="Vector_28" />
          <path d={svgPaths.pcc4fd00} fill="black" id="Vector_29" />
          <path d={svgPaths.p3555b100} fill="black" id="Vector_30" />
          <path d={svgPaths.p37476100} fill="#FF8B7B" id="Vector_31" />
          <path d={svgPaths.p2be55ef0} fill="black" id="Vector_32" />
          <path d={svgPaths.p312c7c70} fill="#1431AE" id="Vector_33" />
          <path d={svgPaths.p122a7b00} fill="white" id="Vector_34" />
          <path d={svgPaths.p22b06800} fill="white" id="Vector_35" />
          <path d={svgPaths.p232d4600} fill="white" id="Vector_36" />
          <path d={svgPaths.p8b54a00} fill="white" id="Vector_37" />
          <path d={svgPaths.p38b5df00} fill="white" id="Vector_38" />
          <path d={svgPaths.p36a6d700} fill="white" id="Vector_39" />
          <path d={svgPaths.p3643f0c0} fill="white" id="Vector_40" />
          <path d={svgPaths.p3ec13c40} fill="white" id="Vector_41" />
          <path d={svgPaths.p6cac940} fill="#FF8B7B" id="Vector_42" />
          <path d={svgPaths.p317df480} fill="#1431AE" id="Vector_43" />
          <path d={svgPaths.p129d2100} fill="#FF8B7B" id="Vector_44" />
          <path d={svgPaths.p9910800} fill="#1431AE" id="Vector_45" />
          <path d={svgPaths.p3d4fe00} fill="#1431AE" id="Vector_46" />
          <path d={svgPaths.p29720180} fill="#1431AE" id="Vector_47" />
          <path d={svgPaths.p3869a700} fill="#1431AE" id="Vector_48" />
          <path d={svgPaths.p2e6a5b80} fill="black" id="Vector_49" />
          <path d={svgPaths.p38597e00} fill="#FF8B7B" id="Vector_50" />
        </g>
      </svg>
    </div>
  );
}

function FreepikSpeechBubbleInject() {
  return (
    <div className="absolute inset-[16.34%_72.83%_66.14%_11.06%]" data-name="freepik--speech-bubble--inject-200">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.8662" preserveAspectRatio="none" viewBox="0 0 16.4343 17.8662" width="16.4343">
        <g id="freepik--speech-bubble--inject-200">
          <path d={svgPaths.p1c21d480} fill="#1431AE" id="Vector" />
          <path d={svgPaths.p11731680} fill="#1431AE" id="Vector_2" />
          <path d={svgPaths.p170abe00} fill="#1431AE" id="Vector_3" />
          <path d={svgPaths.pb32c100} fill="white" id="Vector_4" />
          <path d={svgPaths.p1c8bee0} fill="white" id="Vector_5" />
          <path d={svgPaths.p2c9670f0} fill="white" id="Vector_6" />
          <path d={svgPaths.p3bdcca00} fill="white" id="Vector_7" />
          <path d={svgPaths.p11a6d080} fill="white" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function InNoTimeRafiki() {
  return (
    <div className="absolute left-[167.5px] size-[102px] top-[-15px]" data-name="In no time-rafiki 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <FreepikBackgroundSimpleInject />
        <FreepikShadowInject />
        <FreepikCharacter1Inject />
        <FreepikSpeechBubbleInject />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-[918px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[46.8px] relative shrink-0 text-[30px] text-white tracking-[-0.9px] whitespace-nowrap">Olá, João</p>
        <InNoTimeRafiki />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[33px] relative shrink-0 w-[896px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[28.08px] relative shrink-0 text-[18px] text-white tracking-[-0.54px] whitespace-nowrap">Bem-vindo de volta!</p>
      </div>
    </div>
  );
}

function Container4() {
  return <div className="absolute bg-[rgba(255,255,255,0.05)] h-[47px] left-[800px] rounded-[33554400px] top-[36px] w-[55px]" data-name="Container" />;
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[897px]" data-name="Container">
      <Heading />
      <Paragraph />
      <Container4 />
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#1636bf] text-[14px] tracking-[-0.42px] whitespace-nowrap">Assinatura ativa</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_72)" id="Icon">
          <path d={svgPaths.p874e300} id="Vector" stroke="#1431AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 2V4.66667" id="Vector_2" stroke="#1431AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.6667 3.33333H12" id="Vector_3" stroke="#1431AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2.66667 11.3333V12.6667" id="Vector_4" stroke="#1431AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M3.33333 12H2" id="Vector_5" stroke="#1431AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_0_72">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text2 />
        <Icon1 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[27px] relative shrink-0 text-[#0a0a0a] text-[20px] tracking-[-0.54px] whitespace-nowrap">HubPay Pro</p>
    </div>
  );
}

function ParagraphMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[2px] relative size-full">
        <Paragraph1 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-[#e6f9f0] content-stretch flex h-[22px] items-center left-0 px-[8px] py-[2px] rounded-[8px] top-[3px]" data-name="Text">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[18px] relative shrink-0 text-[#03884a] text-[12px] whitespace-nowrap">Plano Pro · Ativa</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[25px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text3 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[79px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[17px] items-start relative size-full">
        <ParagraphMargin />
        <Container8 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[22px] h-[165px] items-start p-[25px] relative rounded-[14px] shrink-0 w-[259px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#1636bf] text-[14px] tracking-[-0.42px] whitespace-nowrap">Próximo pagamento</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="#A7852B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="#A7852B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="#A7852B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="#A7852B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 9.33333H5.34" id="Vector_5" stroke="#A7852B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 9.33333H8.00667" id="Vector_6" stroke="#A7852B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 9.33333H10.6733" id="Vector_7" stroke="#A7852B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 12H5.34" id="Vector_8" stroke="#A7852B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 12H8.00667" id="Vector_9" stroke="#A7852B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 12H10.6733" id="Vector_10" stroke="#A7852B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text4 />
        <Icon2 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[33px] relative shrink-0 text-[#0a0a0a] text-[20px] tracking-[-0.66px] whitespace-nowrap">15/08/2026</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[22px] relative shrink-0 w-[162px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[19.5px] relative shrink-0 text-[#354552] text-[13px] tracking-[-0.39px] whitespace-nowrap">em 31 dias</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[27px] items-start relative size-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] h-[165.5px] items-start p-[25px] relative rounded-[14px] shrink-0 w-[212px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#1636bf] text-[14px] tracking-[-0.42px] whitespace-nowrap">Valor da próxima cobrança</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 14 16" width="14">
        <g id="Icon">
          <path d="M7 2.16667V13.8333" id="Vector" stroke="#03884A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p80eae80} id="Vector_2" stroke="#03884A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-[186px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text5 />
        <Icon3 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[36px] relative shrink-0 text-[#026939] text-[20px] tracking-[-0.72px] whitespace-nowrap">R$ 149,90</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[22px] relative shrink-0 w-[162px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[19.5px] relative shrink-0 text-[#354552] text-[13px] tracking-[-0.39px] whitespace-nowrap">Mensal</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[25px] items-start relative size-full">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[15px] h-[165.5px] items-start p-[25px] relative rounded-[14px] shrink-0 w-[234px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#1636bf] text-[14px] tracking-[-0.42px] whitespace-nowrap">Método de pagamento atual</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[13.141px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 13.1406 16" width="13.1406">
        <g id="Icon">
          <path d={svgPaths.p3ecdad80} id="Vector" stroke="#1431AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09505" />
          <path d="M1.09505 6.90495H12.0455" id="Vector_2" stroke="#1431AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09505" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11px] items-center relative size-full">
        <Text6 />
        <Icon4 />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-[181px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <PaymentMethodMastercard className="h-[48px] relative shrink-0 w-[70px]" />
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[27px] relative shrink-0 text-[#0a0a0a] text-[20px] tracking-[-0.54px] whitespace-nowrap">{` •••• 4242`}</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Frame8 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[22px] relative shrink-0 w-[162px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[19.5px] relative shrink-0 text-[#354552] text-[13px] tracking-[-0.39px] whitespace-nowrap">Válido até 12/27</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7px] items-start relative size-full">
        <Paragraph6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[22px] h-[165px] items-start p-[25px] relative rounded-[14px] shrink-0 w-[267px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container16 />
      <Container17 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Container5 />
      <Container9 />
      <Container12 />
      <Container15 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p35993080} id="Vector" stroke="#354552" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M1.33333 6.66667H14.6667" id="Vector_2" stroke="#354552" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[13px] py-[9px] relative rounded-[14px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Icon5 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#354552] text-[14px] text-center whitespace-nowrap">Atualizar cartão</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_43)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="#354552" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 4V8L10.6667 9.33333" id="Vector_2" stroke="#354552" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[13px] py-[9px] relative rounded-[14px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Icon6 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#354552] text-[14px] text-center whitespace-nowrap">Ver pagamentos</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p19987d80} id="Vector" stroke="#354552" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 2V5.33333H10.6667" id="Vector_2" stroke="#354552" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2a3e9c80} id="Vector_3" stroke="#354552" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 10.6667H2V14" id="Vector_4" stroke="#354552" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[13px] py-[9px] relative rounded-[14px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Icon7 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#354552] text-[14px] text-center whitespace-nowrap">Gerenciar assinatura</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_32)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="#A7852B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 5V10L13.3333 11.6667" id="Vector_2" stroke="#A7852B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_0_32">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#a7852b] text-[14px] tracking-[-0.42px] whitespace-nowrap">Ação Necessária</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pb-[4px] pt-[20px] px-[24px] relative size-full">
          <Icon8 />
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[21px] relative shrink-0 text-[#a7852b] text-[14px] tracking-[-0.42px] whitespace-nowrap">Você tem 1 assinatura(s) com pagamento pendente.</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white content-stretch flex h-[36px] items-center px-[17px] py-px relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[21px] relative shrink-0 text-[#0a0a0a] text-[14px] text-center tracking-[-0.42px] whitespace-nowrap">Ver assinaturas pendentes</p>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="relative shrink-0" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Button3 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] px-[24px] relative size-full">
        <Paragraph8 />
        <ButtonMargin />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#f9eac3] h-[140px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container19 />
        <Container20 />
      </div>
      <div aria-hidden className="absolute border border-[#a7852b] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.42px] whitespace-nowrap">Últimos Pagamentos</p>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[23px] relative shrink-0 w-[170.453px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Arial:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#354552] text-[14px] whitespace-nowrap">Seus pagamentos recentes</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-[170.453px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph9 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Icon">
          <path d="M2.91667 7H11.0833" id="Vector" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pf23dd00} id="Vector_2" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white h-[32px] relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[13px] py-px relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[21px] relative shrink-0 text-[#0a0a0a] text-[14px] text-center tracking-[-0.42px] whitespace-nowrap">Ver todas</p>
        <Icon9 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-px px-[24px] relative size-full">
          <Container23 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d="M10 1.66667V18.3333" id="Vector" stroke="#1431AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3055a600} id="Vector_2" stroke="#1431AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#e8ebf9] relative rounded-[33554400px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#101828] text-[14px] tracking-[-0.42px] whitespace-nowrap">HubPay Pro</p>
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[21px] relative shrink-0 text-[#354552] text-[14px] tracking-[-0.42px] whitespace-nowrap">Visa •••• 4242</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-[87.531px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph11 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container27 />
        <Container28 />
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#101828] text-[14px] text-right tracking-[-0.42px] whitespace-nowrap">R$ 149,90</p>
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[21px] relative shrink-0 text-[#354552] text-[14px] text-right tracking-[-0.42px] whitespace-nowrap">15/07/2026</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 w-[73.391px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph13 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function StatusBadge() {
  return (
    <div className="bg-[#e6f9f0] relative rounded-[10px] shrink-0" data-name="StatusBadge">
      <div aria-hidden className="absolute border border-[#03884a] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[11px] py-[3px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[19.5px] relative shrink-0 text-[#03884a] text-[13px] tracking-[-0.26px] whitespace-nowrap">Aprovado</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[16.173px] relative shrink-0 w-[17.333px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.1731" preserveAspectRatio="none" viewBox="0 0 17.3333 16.1731" width="17.3333">
        <g id="Frame">
          <path d={svgPaths.p1ae5e380} id="Vector" stroke="#354552" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.38845 10.7822H5.77734" id="Vector_2" stroke="#354552" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10.1107 5.39062H5.77734" id="Vector_3" stroke="#354552" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11.5551 8.08691H5.77734" id="Vector_4" stroke="#354552" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[31px]">
      <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
        <Frame />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container30 />
        <StatusBadge />
        <Frame1 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[77px] min-h-[77px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between min-h-[inherit] px-[17px] py-px relative size-full">
          <Container26 />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d="M10 1.66667V18.3333" id="Vector" stroke="#1431AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3055a600} id="Vector_2" stroke="#1431AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#e8ebf9] relative rounded-[33554400px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#101828] text-[14px] tracking-[-0.42px] whitespace-nowrap">HubPay Pro</p>
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[21px] relative shrink-0 text-[#354552] text-[14px] tracking-[-0.42px] whitespace-nowrap">Visa •••• 4242</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-[87.531px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph15 />
        <Paragraph16 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container33 />
        <Container34 />
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#101828] text-[14px] text-right tracking-[-0.42px] whitespace-nowrap">R$ 149,90</p>
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[21px] relative shrink-0 text-[#354552] text-[14px] text-right tracking-[-0.42px] whitespace-nowrap">15/05/2026</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 w-[74.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph17 />
        <Paragraph18 />
      </div>
    </div>
  );
}

function StatusBadge1() {
  return (
    <div className="bg-[#e6f9f0] relative rounded-[10px] shrink-0" data-name="StatusBadge">
      <div aria-hidden className="absolute border border-[#03884a] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[11px] py-[3px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[19.5px] relative shrink-0 text-[#03884a] text-[13px] tracking-[-0.26px] whitespace-nowrap">Aprovado</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container36 />
        <StatusBadge1 />
        <div className="relative shrink-0 size-[18px]" data-name="fi-rr-menu-dots-vertical">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute inset-[0_41.67%_83.33%_41.67%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="3" preserveAspectRatio="none" viewBox="0 0 2.99999 3" width="2.99999">
                <path d={svgPaths.p28e86900} fill="#354552" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[41.67%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="2.99999" preserveAspectRatio="none" viewBox="0 0 2.99999 2.99999" width="2.99999">
                <path d={svgPaths.p285b7b00} fill="#354552" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[83.33%_41.67%_0_41.67%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="3.00002" preserveAspectRatio="none" viewBox="0 0 2.99999 3.00002" width="2.99999">
                <path d={svgPaths.p224c2a00} fill="#354552" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[77px] min-h-[77px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between min-h-[inherit] px-[17px] py-px relative size-full">
          <Container32 />
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Container31 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d="M10 1.66667V18.3333" id="Vector" stroke="#1431AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3055a600} id="Vector_2" stroke="#1431AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[#e8ebf9] relative rounded-[33554400px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#101828] text-[14px] tracking-[-0.42px] whitespace-nowrap">HubPay Pro</p>
      </div>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[21px] relative shrink-0 text-[#354552] text-[14px] tracking-[-0.42px] whitespace-nowrap">Visa •••• 4242</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-[87.531px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph19 />
        <Paragraph20 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container39 />
        <Container40 />
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#101828] text-[14px] text-right tracking-[-0.42px] whitespace-nowrap">R$ 149,90</p>
      </div>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[21px] relative shrink-0 text-[#354552] text-[14px] text-right tracking-[-0.42px] whitespace-nowrap">15/05/2026</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-[74.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph21 />
        <Paragraph22 />
      </div>
    </div>
  );
}

function StatusBadge2() {
  return (
    <div className="bg-[#e6f9f0] relative rounded-[10px] shrink-0" data-name="StatusBadge">
      <div aria-hidden className="absolute border border-[#03884a] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[11px] py-[3px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[19.5px] relative shrink-0 text-[#03884a] text-[13px] tracking-[-0.26px] whitespace-nowrap">Aprovado</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container42 />
        <StatusBadge2 />
        <div className="relative shrink-0 size-[18px]" data-name="fi-rr-menu-dots-vertical">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute inset-[0_41.67%_83.33%_41.67%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="3" preserveAspectRatio="none" viewBox="0 0 2.99999 3" width="2.99999">
                <path d={svgPaths.p28e86900} fill="#354552" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[41.67%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="2.99999" preserveAspectRatio="none" viewBox="0 0 2.99999 2.99999" width="2.99999">
                <path d={svgPaths.p285b7b00} fill="#354552" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[83.33%_41.67%_0_41.67%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="3.00002" preserveAspectRatio="none" viewBox="0 0 2.99999 3.00002" width="2.99999">
                <path d={svgPaths.p224c2a00} fill="#354552" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[77px] min-h-[77px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between min-h-[inherit] px-[17px] py-px relative size-full">
          <Container38 />
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Container37 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d="M10 1.66667V18.3333" id="Vector" stroke="#1431AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3055a600} id="Vector_2" stroke="#1431AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#e8ebf9] relative rounded-[33554400px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#101828] text-[14px] tracking-[-0.42px] whitespace-nowrap">HubPay Pro</p>
      </div>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[21px] relative shrink-0 text-[#354552] text-[14px] tracking-[-0.42px] whitespace-nowrap">Visa •••• 4242</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 w-[87.531px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph23 />
        <Paragraph24 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container45 />
        <Container46 />
      </div>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#101828] text-[14px] text-right tracking-[-0.42px] whitespace-nowrap">R$ 149,90</p>
      </div>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[21px] relative shrink-0 text-[#354552] text-[14px] text-right tracking-[-0.42px] whitespace-nowrap">15/04/2026</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 w-[74.578px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph25 />
        <Paragraph26 />
      </div>
    </div>
  );
}

function StatusBadge3() {
  return (
    <div className="bg-[#ffe2e2] relative rounded-[10px] shrink-0" data-name="StatusBadge">
      <div aria-hidden className="absolute border border-[#ff5a3b] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[11px] py-[3px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[19.5px] relative shrink-0 text-[#e85236] text-[13px] tracking-[-0.26px] whitespace-nowrap">Recusado</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container48 />
        <StatusBadge3 />
        <div className="relative shrink-0 size-[18px]" data-name="fi-rr-menu-dots-vertical">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute inset-[0_41.67%_83.33%_41.67%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="3" preserveAspectRatio="none" viewBox="0 0 2.99999 3" width="2.99999">
                <path d={svgPaths.p28e86900} fill="#354552" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[41.67%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="2.99999" preserveAspectRatio="none" viewBox="0 0 2.99999 2.99999" width="2.99999">
                <path d={svgPaths.p285b7b00} fill="#354552" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[83.33%_41.67%_0_41.67%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="3.00002" preserveAspectRatio="none" viewBox="0 0 2.99999 3.00002" width="2.99999">
                <path d={svgPaths.p224c2a00} fill="#354552" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[77px] min-h-[77px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between min-h-[inherit] px-[17px] py-px relative size-full">
          <Container44 />
          <Container47 />
        </div>
      </div>
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Container43 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d="M10 1.66667V18.3333" id="Vector" stroke="#1431AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3055a600} id="Vector_2" stroke="#1431AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-[#e8ebf9] relative rounded-[33554400px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#101828] text-[14px] tracking-[-0.42px] whitespace-nowrap">HubPay Basic</p>
      </div>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[21px] relative shrink-0 text-[#354552] text-[14px] tracking-[-0.42px] whitespace-nowrap">Visa •••• 4242</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 w-[87.531px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph27 />
        <Paragraph28 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container51 />
        <Container52 />
      </div>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#101828] text-[14px] text-right tracking-[-0.42px] whitespace-nowrap">R$ 89,90</p>
      </div>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[21px] relative shrink-0 text-[#354552] text-[14px] text-right tracking-[-0.42px] whitespace-nowrap">15/03/2026</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 w-[74.391px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph29 />
        <Paragraph30 />
      </div>
    </div>
  );
}

function StatusBadge4() {
  return (
    <div className="bg-[#e6f9f0] relative rounded-[10px] shrink-0" data-name="StatusBadge">
      <div aria-hidden className="absolute border border-[#03884a] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[11px] py-[3px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[19.5px] relative shrink-0 text-[#03884a] text-[13px] tracking-[-0.26px] whitespace-nowrap">Aprovado</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container54 />
        <StatusBadge4 />
        <div className="relative shrink-0 size-[18px]" data-name="fi-rr-menu-dots-vertical">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute inset-[0_41.67%_83.33%_41.67%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="3" preserveAspectRatio="none" viewBox="0 0 2.99999 3" width="2.99999">
                <path d={svgPaths.p28e86900} fill="#354552" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[41.67%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="2.99999" preserveAspectRatio="none" viewBox="0 0 2.99999 2.99999" width="2.99999">
                <path d={svgPaths.p285b7b00} fill="#354552" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[83.33%_41.67%_0_41.67%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="3.00002" preserveAspectRatio="none" viewBox="0 0 2.99999 3.00002" width="2.99999">
                <path d={svgPaths.p224c2a00} fill="#354552" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[77px] min-h-[77px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between min-h-[inherit] px-[17px] py-px relative size-full">
          <Container50 />
          <Container53 />
        </div>
      </div>
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Container49 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Container25 />
        <ContainerMargin />
        <ContainerMargin1 />
        <ContainerMargin2 />
        <ContainerMargin3 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-white h-[547px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container22 />
        <Container24 />
      </div>
      <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] h-[1012px] items-start relative shrink-0 w-[1020px]">
      <Frame4 />
      <Frame5 />
      <Container18 />
      <Container21 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[47px] items-start left-[457px] top-[108px]">
      <Container3 />
      <Frame6 />
    </div>
  );
}

function Body() {
  return (
    <div className="h-[944px] relative shrink-0 w-[1933px]" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Layout />
        <Frame7 />
      </div>
    </div>
  );
}

export default function Document() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Document">
      <Body />
    </div>
  );
}