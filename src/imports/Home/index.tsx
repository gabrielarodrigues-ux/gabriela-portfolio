import svgPaths from "./svg-1ifffpha7h";
import imgRectangle from "./a8a249df953ec2ffbc736694a0eb57eb4618649b.png";
import imgImageWithFallback from "./21ca11bde29e0f9c436a6b5c8a7e61c81651904d.png";
import imgRectangle1 from "./7357ce90f95eb8fe8b265017caf3a6deecadc7b6.png";
import imgImageWithFallback1 from "./dc63ab32b188e60cdd2d62e993cec9e2ba8343fc.png";
import imgImageWithFallback2 from "./4e424d30342ee98d9b37baa6311ee94efd822d31.png";
import imgImageWithFallback3 from "./db419aa03689e047f39b3f9cbf8f89baca3dcf25.png";
import imgImageWithFallback4 from "./7fe1e4b2772b41261685cae420bca5ba8fddd5ed.png";

function Frame() {
  return (
    <div className="absolute h-[434px] left-0 top-0 w-[440px]">
      <div className="absolute h-[434px] left-0 top-0 w-[439px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle} />
      </div>
      <div className="absolute backdrop-blur-[53px] bg-[rgba(217,217,217,0.02)] h-[434px] left-0 top-0 w-[440px]" />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[23.998px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="[word-break:break-word] absolute font-['London_Bridge:Black',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-white top-[-1.5px] whitespace-nowrap">GO GIRL</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[19.995px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Gilroy-Regular:☞',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">Travel Club</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[43.993px] relative shrink-0 w-[67.558px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[14px] size-[19.992px] top-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="19.9917" preserveAspectRatio="none" viewBox="0 0 19.9917 19.9917" width="19.9917">
        <g clipPath="url(#clip0_0_82)" id="Icon">
          <path d={svgPaths.pbe5e180} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66597" />
          <path d={svgPaths.p18776180} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66597" />
        </g>
        <defs>
          <clipPath id="clip0_0_82">
            <rect fill="white" height="19.9917" width="19.9917" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[15.993px] relative shrink-0 w-[6.473px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['London_Bridge:Black',sans-serif] leading-[16px] left-[2.88px] not-italic text-[12px] text-center text-white top-[0.97px] whitespace-nowrap">3</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] flex from-[#ff8904] items-center justify-center left-[26.9px] p-[1.108px] rounded-[37170400px] size-[23.99px] to-[#f6339a] top-[-2.89px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.108px] border-solid border-white inset-0 pointer-events-none rounded-[37170400px]" />
      <Text />
    </div>
  );
}

function NotificationBell() {
  return (
    <div className="bg-[rgba(255,255,255,0.25)] h-[46px] relative rounded-[16px] shrink-0 w-[48px]" data-name="NotificationBell">
      <div aria-hidden className="absolute border-[1.108px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon />
      <Container3 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute left-[1.28px] overflow-clip size-[41.28px] top-[1.28px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
      <div className="absolute left-[0.12px] rounded-[21.923px] size-[41.107px] top-[0.09px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[21.923px] size-full" src={imgRectangle1} />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[8611568px] shrink-0 size-[43.847px]" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback />
      </div>
      <div aria-hidden className="absolute border-[1.283px] border-solid border-white inset-0 pointer-events-none rounded-[8611568px] shadow-[0px_6.851px_8.564px_-1.713px_rgba(0,0,0,0.1),0px_2.74px_3.426px_-2.055px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-[103px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <NotificationBell />
        <Container4 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-between relative shrink-0 w-[383px]" data-name="Container">
      <Container2 />
      <Frame6 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[383px]" data-name="Heading 2">
      <p className="[word-break:break-word] absolute font-['London_Bridge:Black',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-white top-[-1.5px] whitespace-nowrap">Olá, Marina! ✈️</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-[383px]" data-name="Paragraph">
      <p className="[word-break:break-word] flex-[1_0_0] font-['London_Bridge:Black',sans-serif] leading-[20px] min-w-px not-italic relative text-[14px] text-[rgba(255,255,255,0.9)]">Para onde vamos hoje?</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] h-[63.407px] left-0 rounded-[17px] top-0 w-[382.913px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pl-[56.927px] pr-[18.976px] py-[16.604px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Kinetika:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18.976px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">Buscar destinos...</p>
      </div>
      <div aria-hidden className="absolute border-[0.889px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[17px] shadow-[0px_11.86px_17.79px_-3.558px_rgba(0,0,0,0.1),0px_4.744px_7.116px_-4.744px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[18.97px] size-[23.713px] top-[19.84px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="23.7134" preserveAspectRatio="none" viewBox="0 0 23.7134 23.7134" width="23.7134">
        <g id="Icon">
          <path d={svgPaths.p1a76fc70} id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.97612" />
          <path d={svgPaths.p22290380} id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.97612" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[63.407px] relative shrink-0 w-full" data-name="Container">
      <TextInput />
      <Icon1 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[382.983px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[37.944px] items-start pt-[56.923px] px-[28.462px] relative size-full">
        <Container1 />
        <Heading1 />
        <Paragraph1 />
        <Container5 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[33.196px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="33.196" preserveAspectRatio="none" viewBox="0 0 33.196 33.196" width="33.196">
        <g id="Icon">
          <path d={svgPaths.p4312e80} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.76633" />
          <path d={svgPaths.p2e0e0b00} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.76633" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-gradient-to-r drop-shadow-[0px_11.86px_8.895px_rgba(0,0,0,0.1),0px_4.744px_3.558px_rgba(0,0,0,0.1)] from-[#c42981] relative rounded-[29815042px] shrink-0 size-[75.902px] to-[#55305c]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[18.965px] relative shrink-0 w-[51.009px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="[word-break:break-word] font-['London_Bridge:Semi_Bold',sans-serif] leading-[18.976px] not-italic relative shrink-0 text-[#55305c] text-[14.232px] text-center whitespace-nowrap">Explorar</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.857px] h-[106.724px] items-center left-0 top-0 w-[81.497px]" data-name="Button">
      <Container8 />
      <Text1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[33.196px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="33.196" preserveAspectRatio="none" viewBox="0 0 33.196 33.196" width="33.196">
        <g id="Icon">
          <path d={svgPaths.p39381700} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.76633" />
          <path d={svgPaths.p20154000} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.76633" />
          <path d={svgPaths.p2abeff20} id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.76633" />
          <path d={svgPaths.p2284f300} id="Vector_4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.76633" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-gradient-to-r drop-shadow-[0px_11.86px_8.895px_rgba(0,0,0,0.1),0px_4.744px_3.558px_rgba(0,0,0,0.1)] from-[#c42981] relative rounded-[29815042px] shrink-0 size-[75.902px] to-[#55305c]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[18.965px] relative shrink-0 w-[45.497px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="[word-break:break-word] font-['London_Bridge:Semi_Bold',sans-serif] leading-[18.976px] not-italic relative shrink-0 text-[#55305c] text-[14.232px] text-center whitespace-nowrap">Grupos</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.857px] h-[106.724px] items-center left-[100.46px] top-0 w-[81.511px]" data-name="Button">
      <Container9 />
      <Text2 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[33.196px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="33.196" preserveAspectRatio="none" viewBox="0 0 33.196 33.196" width="33.196">
        <g id="Icon">
          <path d={svgPaths.p2276be80} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.76633" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-gradient-to-r drop-shadow-[0px_11.86px_8.895px_rgba(0,0,0,0.1),0px_4.744px_3.558px_rgba(0,0,0,0.1)] from-[#c42981] relative rounded-[29815042px] shrink-0 size-[75.902px] to-[#55305c]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[18.965px] relative shrink-0 w-[56.437px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="[word-break:break-word] font-['London_Bridge:Semi_Bold',sans-serif] leading-[18.976px] not-italic relative shrink-0 text-[#55305c] text-[14.232px] text-center whitespace-nowrap">Favoritos</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.857px] h-[106.724px] items-center left-[200.94px] top-0 w-[81.497px]" data-name="Button">
      <Container10 />
      <Text3 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[33.196px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="33.196" preserveAspectRatio="none" viewBox="0 0 33.196 33.196" width="33.196">
        <g id="Icon">
          <path d={svgPaths.p20f86580} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.76633" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-gradient-to-r drop-shadow-[0px_11.86px_8.895px_rgba(0,0,0,0.1),0px_4.744px_3.558px_rgba(0,0,0,0.1)] from-[#c42981] relative rounded-[29815042px] shrink-0 size-[75.902px] to-[#55305c]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[18.965px] relative shrink-0 w-[49.426px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="[word-break:break-word] font-['London_Bridge:Semi_Bold',sans-serif] leading-[18.976px] not-italic relative shrink-0 text-[#55305c] text-[14.232px] text-center whitespace-nowrap">Viagens</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.857px] h-[106.724px] items-center left-[301.4px] top-0 w-[81.511px]" data-name="Button">
      <Container11 />
      <Text4 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[106.724px] left-[28.46px] top-[37.94px] w-[382.913px]" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container15() {
  return <div className="bg-gradient-to-r from-[#c42981] h-[28.462px] relative rounded-[29815042px] shrink-0 to-[#55305c] w-[7.108px]" data-name="Container" />;
}

function Heading2() {
  return (
    <div className="flex-[1_0_0] h-[32.03px] min-w-px relative" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['London_Bridge:Black',sans-serif] leading-[32.022px] left-0 not-italic text-[#55305c] text-[21.348px] top-[-1.78px] whitespace-nowrap">Destinos em Alta</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[32.03px] relative shrink-0 w-[180.877px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9.483px] items-center relative size-full">
        <Container15 />
        <Heading2 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[23.713px] relative shrink-0 w-[89.022px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="[word-break:break-word] font-['London_Bridge:Semi_Bold',sans-serif] leading-[23.72px] not-italic relative shrink-0 text-[#f6329a] text-[16.604px] text-center whitespace-nowrap">Ver todos →</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[32.03px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[28.462px] relative size-full">
          <Container14 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute h-[246.672px] left-0 top-0 w-[382.913px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container18() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.6)] h-[246.672px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0)] w-[382.913px]" data-name="Container" />;
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[23.713px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="23.7134" preserveAspectRatio="none" viewBox="0 0 23.7134 23.7134" width="23.7134">
        <g id="Icon">
          <path d={svgPaths.p2dead600} fill="#F6339A" id="Vector" stroke="#F6339A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.97612" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] content-stretch flex items-center justify-center left-[316.52px] rounded-[29815042px] shadow-[0px_11.86px_17.79px_0px_rgba(0,0,0,0.1),0px_4.744px_7.116px_0px_rgba(0,0,0,0.1)] size-[47.427px] top-[18.97px]" data-name="Button">
      <Icon6 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[28.462px] left-[23.71px] top-[23.71px] w-[335.486px]" data-name="Heading 4">
      <p className="[word-break:break-word] absolute font-['London_Bridge:Black',sans-serif] leading-[28.464px] left-0 not-italic text-[18.976px] text-white top-[-1.78px] whitespace-nowrap">Paris</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute content-stretch flex h-[23.713px] items-start left-[23.71px] top-[59.28px] w-[335.486px]" data-name="Paragraph">
      <p className="[word-break:break-word] flex-[1_0_0] font-['London_Bridge:Semi_Bold',sans-serif] leading-[23.72px] min-w-px not-italic relative text-[16.604px] text-[rgba(255,255,255,0.7)]">França</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[18.965px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18.9652" preserveAspectRatio="none" viewBox="0 0 18.9652 18.9652" width="18.9652">
        <g clipPath="url(#clip0_0_75)" id="Icon">
          <path d={svgPaths.p32f89480} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58043" />
          <path d={svgPaths.p234b3300} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58043" />
          <path d={svgPaths.p377e3000} id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58043" />
          <path d={svgPaths.p2bfbf482} id="Vector_4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58043" />
        </g>
        <defs>
          <clipPath id="clip0_0_75">
            <rect fill="white" height="18.9652" width="18.9652" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-start left-[-0.41px] top-[2.52px]">
      <Icon7 />
      <p className="[word-break:break-word] font-['London_Bridge:Black',sans-serif] leading-[23.72px] not-italic relative shrink-0 text-[16.604px] text-white whitespace-nowrap">156 viajantes</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="flex-[1_0_0] h-[23.713px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Frame1 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex h-[38px] items-center left-[23.54px] px-[14.231px] rounded-[29815042px] top-[96.86px] w-[170px]" data-name="Container">
      <Text5 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[158.871px] left-0 top-[87.8px] w-[382.913px]" data-name="Container">
      <Heading3 />
      <Paragraph2 />
      <Container20 />
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[246.672px] overflow-clip relative rounded-[28.464px] shadow-[0px_23.72px_29.65px_-5.93px_rgba(0,0,0,0.1),0px_9.488px_11.86px_-7.116px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <ImageWithFallback1 />
      <Container18 />
      <Button5 />
      <Container19 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="absolute h-[246.672px] left-0 top-0 w-[382.913px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Container22() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.6)] h-[246.672px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0)] w-[382.913px]" data-name="Container" />;
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[23.713px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="23.7134" preserveAspectRatio="none" viewBox="0 0 23.7134 23.7134" width="23.7134">
        <g id="Icon">
          <path d={svgPaths.p2d7a7500} id="Vector" stroke="#55305C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.97612" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] content-stretch flex items-center justify-center left-[316.52px] rounded-[29815042px] shadow-[0px_11.86px_17.79px_0px_rgba(0,0,0,0.1),0px_4.744px_7.116px_0px_rgba(0,0,0,0.1)] size-[47.427px] top-[18.97px]" data-name="Button">
      <Icon8 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[28.462px] left-[23.71px] top-[23.71px] w-[335.486px]" data-name="Heading 4">
      <p className="[word-break:break-word] absolute font-['London_Bridge:Black',sans-serif] leading-[28.464px] left-0 not-italic text-[18.976px] text-white top-[-1.78px] whitespace-nowrap">Santorini</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex h-[23.713px] items-start left-[23.71px] top-[59.28px] w-[335.486px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['London_Bridge:Semi_Bold',sans-serif] leading-[23.72px] not-italic relative shrink-0 text-[16.604px] text-[rgba(255,255,255,0.7)] whitespace-nowrap">Grécia</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[18.965px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18.9652" preserveAspectRatio="none" viewBox="0 0 18.9652 18.9652" width="18.9652">
        <g clipPath="url(#clip0_0_57)" id="Icon">
          <path d={svgPaths.p32f89480} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58043" />
          <path d={svgPaths.p4cf8200} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58043" />
          <path d={svgPaths.p2d0f3e00} id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58043" />
          <path d={svgPaths.p2bc7a00} id="Vector_4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58043" />
        </g>
        <defs>
          <clipPath id="clip0_0_57">
            <rect fill="white" height="18.9652" width="18.9652" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[-0.23px] top-[-0.14px] w-[139.965px]">
      <Icon9 />
      <p className="[word-break:break-word] font-['London_Bridge:Semi_Bold',sans-serif] leading-[23.72px] not-italic relative shrink-0 text-[16.604px] text-white whitespace-nowrap">203 viajantes</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="flex-[1_0_0] h-[23.713px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Frame2 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex h-[38px] items-center justify-center left-[23.54px] px-[14.231px] rounded-[29815042px] top-[97.22px] w-[171px]" data-name="Container">
      <Text6 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[158.871px] left-0 top-[87.8px] w-[382.913px]" data-name="Container">
      <Heading4 />
      <Paragraph3 />
      <Container24 />
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[246.672px] overflow-clip relative rounded-[28.464px] shadow-[0px_23.72px_29.65px_-5.93px_rgba(0,0,0,0.1),0px_9.488px_11.86px_-7.116px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <ImageWithFallback2 />
      <Container22 />
      <Button6 />
      <Container23 />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="absolute h-[246.672px] left-0 top-0 w-[382.913px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback3} />
    </div>
  );
}

function Container26() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.6)] h-[246.672px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0)] w-[382.913px]" data-name="Container" />;
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[23.713px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="23.7134" preserveAspectRatio="none" viewBox="0 0 23.7134 23.7134" width="23.7134">
        <g id="Icon">
          <path d={svgPaths.p1a5adb00} id="Vector" stroke="#55305C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.97612" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] content-stretch flex items-center justify-center left-[316.52px] rounded-[29815042px] shadow-[0px_11.86px_17.79px_0px_rgba(0,0,0,0.1),0px_4.744px_7.116px_0px_rgba(0,0,0,0.1)] size-[47.427px] top-[18.97px]" data-name="Button">
      <Icon10 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[28.462px] left-[23.71px] top-[23.71px] w-[335.486px]" data-name="Heading 4">
      <p className="[word-break:break-word] absolute font-['London_Bridge:Black',sans-serif] leading-[28.464px] left-0 not-italic text-[18.976px] text-white top-[-1.78px] whitespace-nowrap">Bali</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute content-stretch flex h-[23.713px] items-start left-[23.71px] top-[59.28px] w-[335.486px]" data-name="Paragraph">
      <p className="[word-break:break-word] flex-[1_0_0] font-['London_Bridge:Semi_Bold',sans-serif] leading-[23.72px] min-w-px not-italic relative text-[16.604px] text-[rgba(255,255,255,0.7)]">Indonésia</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[18.965px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18.9652" preserveAspectRatio="none" viewBox="0 0 18.9652 18.9652" width="18.9652">
        <g clipPath="url(#clip0_0_92)" id="Icon">
          <path d={svgPaths.p32f89480} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58043" />
          <path d={svgPaths.p4cf8200} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58043" />
          <path d={svgPaths.p2d0f3e00} id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58043" />
          <path d={svgPaths.p24053a00} id="Vector_4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58043" />
        </g>
        <defs>
          <clipPath id="clip0_0_92">
            <rect fill="white" height="18.9652" width="18.9652" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-center justify-center left-[-0.41px] top-[-0.75px]">
      <Icon11 />
      <p className="[word-break:break-word] font-['London_Bridge:Semi_Bold',sans-serif] leading-[23.72px] not-italic relative shrink-0 text-[16.604px] text-white whitespace-nowrap">189 viajantes</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="flex-[1_0_0] h-[23.713px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Frame3 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex h-[38px] items-center left-[23.54px] px-[14.231px] rounded-[29815042px] top-[97.59px] w-[166px]" data-name="Container">
      <Text7 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[158.871px] left-0 top-[87.8px] w-[382.913px]" data-name="Container">
      <Heading5 />
      <Paragraph4 />
      <Container28 />
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[246.672px] overflow-clip relative rounded-[28.464px] shadow-[0px_23.72px_29.65px_-5.93px_rgba(0,0,0,0.1),0px_9.488px_11.86px_-7.116px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <ImageWithFallback3 />
      <Container26 />
      <Button7 />
      <Container27 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[777.947px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[18.965px] items-start px-[28.462px] relative size-full">
        <Container17 />
        <Container21 />
        <Container25 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.713px] h-[833.69px] items-start left-0 top-[182.61px] w-[439.836px]" data-name="Container">
      <Container13 />
      <Container16 />
    </div>
  );
}

function Container32() {
  return <div className="h-[28.462px] relative rounded-[29815042px] shrink-0 w-[7.108px]" style={{ backgroundImage: "linear-gradient(104.02309029401378deg, rgb(230, 0, 118) 0%, rgb(168, 0, 183) 100%)" }} data-name="Container" />;
}

function Heading6() {
  return (
    <div className="flex-[1_0_0] h-[32.03px] min-w-px relative" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['London_Bridge:Black',sans-serif] leading-[32.022px] left-0 not-italic text-[#55305c] text-[21.348px] top-[-1.78px] whitespace-nowrap">Grupos Abertos</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[32.03px] relative shrink-0 w-[169.09px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9.483px] items-center relative size-full">
        <Container32 />
        <Heading6 />
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[23.713px] relative shrink-0 w-[89.022px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="[word-break:break-word] font-['London_Bridge:Semi_Bold',sans-serif] leading-[23.72px] not-italic relative shrink-0 text-[#f6329a] text-[16.604px] text-center whitespace-nowrap">Ver todos →</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[32.03px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container31 />
          <Button8 />
        </div>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[28.462px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="[word-break:break-word] absolute font-['London_Bridge:Black',sans-serif] leading-[28.464px] left-0 not-italic text-[#55305c] text-[18.976px] top-[-1.78px] whitespace-nowrap">Viagem Paris - Março 2025</p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[18.965px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18.9652" preserveAspectRatio="none" viewBox="0 0 18.9652 18.9652" width="18.9652">
        <g clipPath="url(#clip0_0_52)" id="Icon">
          <path d={svgPaths.p2b770900} id="Vector" stroke="#F6339A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58043" />
          <path d={svgPaths.p12f77980} id="Vector_2" stroke="#F6339A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58043" />
        </g>
        <defs>
          <clipPath id="clip0_0_52">
            <rect fill="white" height="18.9652" width="18.9652" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[23.713px] relative shrink-0 w-[93.493px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="[word-break:break-word] font-['London_Bridge:Semi_Bold',sans-serif] leading-[23.72px] not-italic relative shrink-0 text-[#6a7282] text-[16.604px] whitespace-nowrap">15-22 Março</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[9.483px] h-[23.713px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon12 />
      <Text8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="bg-gradient-to-r from-[#fdf2f8] h-[34.959px] relative rounded-[29815042px] shrink-0 to-[#fdf4ff] w-[103.142px]" data-name="Text">
      <div aria-hidden className="absolute border-[#dd519d] border-[0.889px] border-solid inset-0 pointer-events-none rounded-[29815042px]" />
      <p className="[word-break:break-word] absolute font-['Kinetika:Light',sans-serif] leading-[18.976px] left-[17.48px] not-italic text-[#f6329a] text-[14.232px] top-[6.81px] whitespace-nowrap">8/10 vagas</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[9.482px] items-start relative size-full">
        <Heading7 />
        <Container37 />
        <Text9 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container36 />
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-gradient-to-r from-[#c42981] h-[56.923px] relative rounded-[29815042px] shrink-0 to-[#55305c] w-full" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['London_Bridge:Semi_Bold',sans-serif] leading-[28.464px] left-[167.7px] not-italic text-[18.976px] text-center text-white top-[12.45px] whitespace-nowrap">Participar do Grupo</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-white drop-shadow-[0px_11.86px_8.895px_rgba(0,0,0,0.1),0px_4.744px_3.558px_rgba(0,0,0,0.1)] h-[226px] relative rounded-[28.464px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e87db4] border-[0.889px] border-solid inset-0 pointer-events-none rounded-[28.464px]" />
      <div className="content-stretch flex flex-col gap-[18.965px] items-start pb-[0.889px] pt-[24.602px] px-[24.602px] relative size-full">
        <Container35 />
        <Button9 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[28.462px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="[word-break:break-word] absolute font-['London_Bridge:Black',sans-serif] leading-[28.464px] left-0 not-italic text-[#55305c] text-[18.976px] top-[-1.78px] whitespace-nowrap">Aventura Bali - Abril 2025</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[18.965px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18.9652" preserveAspectRatio="none" viewBox="0 0 18.9652 18.9652" width="18.9652">
        <g clipPath="url(#clip0_0_49)" id="Icon">
          <path d={svgPaths.p2dbe8c00} id="Vector" stroke="#F6339A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58043" />
          <path d={svgPaths.p12f77980} id="Vector_2" stroke="#F6339A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58043" />
        </g>
        <defs>
          <clipPath id="clip0_0_49">
            <rect fill="white" height="18.9652" width="18.9652" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[23.713px] relative shrink-0 w-[81.261px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="[word-break:break-word] font-['London_Bridge:Semi_Bold',sans-serif] leading-[23.72px] not-italic relative shrink-0 text-[#6a7282] text-[16.604px] whitespace-nowrap">10-20 Abril</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex gap-[9.483px] h-[23.713px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon13 />
      <Text10 />
    </div>
  );
}

function Text11() {
  return (
    <div className="bg-gradient-to-r from-[#fdf2f8] h-[34.959px] relative rounded-[29815042px] shrink-0 to-[#fdf4ff] w-[95.478px]" data-name="Text">
      <div aria-hidden className="absolute border-[#dd519d] border-[0.889px] border-solid inset-0 pointer-events-none rounded-[29815042px]" />
      <p className="[word-break:break-word] absolute font-['Kinetika:Light',sans-serif] leading-[18.976px] left-[17.48px] not-italic text-[#f6329a] text-[14.232px] top-[6.81px] whitespace-nowrap">5/8 vagas</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[9.483px] items-start relative size-full">
        <Heading8 />
        <Container41 />
        <Text11 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container40 />
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-gradient-to-r from-[#c42981] h-[56.923px] relative rounded-[29815042px] shrink-0 to-[#55305c] w-full" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['London_Bridge:Semi_Bold',sans-serif] leading-[28.464px] left-[167.7px] not-italic text-[18.976px] text-center text-white top-[12.45px] whitespace-nowrap">Participar do Grupo</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-white drop-shadow-[0px_11.86px_8.895px_rgba(0,0,0,0.1),0px_4.744px_3.558px_rgba(0,0,0,0.1)] h-[226px] relative rounded-[28.464px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e87db4] border-[0.889px] border-solid inset-0 pointer-events-none rounded-[28.464px]" />
      <div className="content-stretch flex flex-col gap-[18.965px] items-start pb-[0.889px] pt-[24.602px] px-[24.602px] relative size-full">
        <Container39 />
        <Button10 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[18.965px] h-[392.465px] items-start relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <Container38 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.713px] h-[448.208px] items-start left-0 px-[28.462px] top-[1054.25px] w-[439.836px]" data-name="Container">
      <Container30 />
      <Container33 />
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="absolute h-[227.707px] left-0 top-0 w-[382.913px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback4} />
    </div>
  );
}

function Container43() {
  return <div className="absolute bg-gradient-to-r from-[rgba(114,19,120,0.85)] h-[227.707px] left-0 to-[rgba(114,19,120,0.85)] top-0 via-1/2 via-[rgba(134,16,67,0.75)] w-[382.913px]" data-name="Container" />;
}

function Heading9() {
  return (
    <div className="h-[28.462px] relative shrink-0 w-[245.964px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['London_Bridge:Black',sans-serif] leading-[28.464px] left-[123.19px] not-italic text-[18.976px] text-center text-white top-[-1.78px] whitespace-nowrap">Juntas somos mais fortes! 💪</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-white drop-shadow-[0px_11.86px_8.895px_rgba(0,0,0,0.1),0px_4.744px_3.558px_rgba(0,0,0,0.1)] h-[47.427px] relative rounded-[29815042px] shrink-0 w-[206.034px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Kinetika:Light',sans-serif] leading-[23.72px] left-[102.82px] not-italic text-[#f6339a] text-[16.604px] text-center top-[9.48px] whitespace-nowrap">Encontrar Grupo →</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9.483px] h-[227.707px] items-center justify-center left-0 pb-[0.014px] top-0 w-[382.913px]" data-name="Container">
      <Heading9 />
      <p className="[word-break:break-word] font-['London_Bridge:Semi_Bold',sans-serif] leading-[26.981px] not-italic relative shrink-0 text-[16.604px] text-[rgba(255,255,255,0.9)] text-center w-[296px]">Conecte-se com mulheres que amam viajar</p>
      <Button11 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[227.707px] left-[27px] overflow-clip rounded-[28.464px] shadow-[0px_23.72px_29.65px_-5.93px_rgba(0,0,0,0.1),0px_9.488px_11.86px_-7.116px_rgba(0,0,0,0.1)] top-[1606.02px] w-[382.913px]" data-name="Container">
      <ImageWithFallback4 />
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-gradient-to-b drop-shadow-[0px_29.65px_29.65px_rgba(0,0,0,0.25)] from-[#fdf2f8] h-[2046px] relative rounded-tl-[47.439px] rounded-tr-[47.439px] shrink-0 to-white w-full" data-name="Container">
      <Container7 />
      <Container12 />
      <Container29 />
      <Container42 />
    </div>
  );
}

function Home1() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#fb64b6] from-[14.423%] h-[2383px] items-start left-0 to-[#c800de] to-[98.558%] top-0 via-[#fccee8] via-[52.885%] w-[440px]" data-name="Home">
      <Frame />
      <Container />
      <Container6 />
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute h-[18.965px] left-[5.71px] top-[64.03px] w-[45.497px]" data-name="Text">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['London_Bridge:Black',sans-serif] leading-[18.976px] left-[22.79px] not-italic text-[#f6339a] text-[14.232px] text-center top-[-0.03px] w-[45px]">Início</p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[28.46px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="28.46" preserveAspectRatio="none" viewBox="0 0 28.46 28.46" width="28.46">
        <g id="Icon">
          <path d={svgPaths.p2497e980} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66623" />
          <path d={svgPaths.p485ce80} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66623" />
        </g>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[#c42981] items-center justify-center left-[4px] rounded-[37px] size-[47.997px] to-[#55305c] top-[5px]" data-name="Container">
      <Icon14 />
    </div>
  );
}

function Button12() {
  return (
    <div className="h-[82.997px] relative shrink-0 w-[56.923px]" data-name="Button">
      <Text12 />
      <Container45 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[14.23px] size-[28.462px] top-[14.23px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="28.4616" preserveAspectRatio="none" viewBox="0 0 28.4616 28.4616" width="28.4616">
        <g id="Icon">
          <path d={svgPaths.p3ac36200} id="Vector" stroke="#989FAD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3718" />
          <path d={svgPaths.p18ff2980} id="Vector_2" stroke="#989FAD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3718" />
        </g>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute left-0 rounded-[29815042px] size-[56.923px] top-0" data-name="Container">
      <Icon15 />
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute h-[18.965px] left-[-1.54px] top-[63.92px] w-[60px]" data-name="Text">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['London_Bridge:Semi_Bold',sans-serif] leading-[18.976px] left-[30px] not-italic text-[#99a1af] text-[14.232px] text-center top-0 whitespace-nowrap">Explorar</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="h-[82.997px] relative shrink-0 w-[56.923px]" data-name="Button">
      <Container46 />
      <Text13 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-[14.23px] size-[28.462px] top-[14.23px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="28.4616" preserveAspectRatio="none" viewBox="0 0 28.4616 28.4616" width="28.4616">
        <g id="Icon">
          <path d={svgPaths.p16b0a804} id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3718" />
          <path d={svgPaths.p236ba500} id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3718" />
          <path d={svgPaths.p78ac7c0} id="Vector_3" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3718" />
          <path d={svgPaths.p35113300} id="Vector_4" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3718" />
        </g>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute left-0 rounded-[29815042px] size-[56.923px] top-0" data-name="Container">
      <Icon16 />
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute h-[18.965px] left-[5.71px] top-[64.03px] w-[45.497px]" data-name="Text">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['London_Bridge:Semi_Bold',sans-serif] leading-[18.976px] left-[26.5px] not-italic text-[#99a1af] text-[14.232px] text-center top-0 whitespace-nowrap">Grupos</p>
    </div>
  );
}

function Button14() {
  return (
    <div className="h-[82.997px] relative shrink-0 w-[56.923px]" data-name="Button">
      <Container47 />
      <Text14 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-[14.23px] size-[28.462px] top-[14.23px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="28.4616" preserveAspectRatio="none" viewBox="0 0 28.4616 28.4616" width="28.4616">
        <g id="Icon">
          <path d={svgPaths.p3b0b2a0} id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3718" />
        </g>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute left-0 rounded-[29815042px] size-[56.923px] top-0" data-name="Container">
      <Icon17 />
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute h-[18.965px] left-[0.24px] top-[64.03px] w-[56.437px]" data-name="Text">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['London_Bridge:Semi_Bold',sans-serif] leading-[18.976px] left-[32px] not-italic text-[#99a1af] text-[14.232px] text-center top-0 whitespace-nowrap">Favoritos</p>
    </div>
  );
}

function Button15() {
  return (
    <div className="h-[82.997px] relative shrink-0 w-[56.923px]" data-name="Button">
      <Container48 />
      <Text15 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-[14.23px] size-[28.462px] top-[14.23px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="28.4616" preserveAspectRatio="none" viewBox="0 0 28.4616 28.4616" width="28.4616">
        <g id="Icon">
          <path d={svgPaths.p36491280} id="Vector" stroke="#959DAB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3718" />
          <path d={svgPaths.p3a184e80} id="Vector_2" stroke="#959DAB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3718" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute left-0 rounded-[29815042px] size-[56.923px] top-0" data-name="Container">
      <Icon18 />
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute h-[18.965px] left-[12.88px] top-[64.03px] w-[31.169px]" data-name="Text">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['London_Bridge:Semi_Bold',sans-serif] leading-[18.976px] left-[18px] not-italic text-[#959dab] text-[14.232px] text-center top-0 whitespace-nowrap">Perfil</p>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute h-[82.997px] left-0 top-0 w-[56.923px]" data-name="Button">
      <Container49 />
      <Text16 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[82.997px] relative shrink-0 w-[56.923px]">
      <Button16 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[27px] items-center relative shrink-0 w-full">
      <Button12 />
      <Button13 />
      <Button14 />
      <Button15 />
      <Frame4 />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white relative size-full" data-name="Home">
      <Home1 />
      <div className="absolute bg-[rgba(255,255,255,0.95)] left-0 top-[836px] w-[440px]" data-name="Home">
        <div aria-hidden className="absolute border-[#e87db4] border-solid border-t-[0.889px] inset-0 pointer-events-none shadow-[0px_29.65px_59.299px_0px_rgba(0,0,0,0.25)]" />
        <div className="content-stretch flex flex-col items-start px-[18px] py-[19px] relative size-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}