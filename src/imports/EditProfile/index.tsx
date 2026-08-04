import svgPaths from "./svg-ommuowwjlu";
import imgRectangle from "./a8a249df953ec2ffbc736694a0eb57eb4618649b.png";
import imgImageWithFallback from "./21ca11bde29e0f9c436a6b5c8a7e61c81651904d.png";
import imgRectangle1 from "./7357ce90f95eb8fe8b265017caf3a6deecadc7b6.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="19.9947" preserveAspectRatio="none" viewBox="0 0 19.9947 19.9947" width="19.9947">
        <g id="Icon">
          <path d={svgPaths.p571e900} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66623" />
          <path d="M15.8291 9.99735H4.16556" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66623" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <a className="bg-[rgba(255,255,255,0.25)] cursor-pointer relative rounded-[25139500px] shrink-0 size-[39.989px]" data-name="Button">
      <div aria-hidden className="absolute border-[0.749px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[25139500px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.749px] relative size-full">
        <Icon />
      </div>
    </a>
  );
}

function Heading() {
  return (
    <div className="h-[23.998px] relative shrink-0 w-[79.932px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['London_Bridge:Black',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-white top-[-1.5px] whitespace-nowrap">Editar Perfil</p>
      </div>
    </div>
  );
}

function Container2() {
  return <div className="h-0 relative shrink-0 w-[39.989px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="h-[39.989px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Button />
          <Heading />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute left-0 overflow-clip size-[163.813px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
      <div className="absolute left-[0.48px] rounded-[86.999px] size-[163.124px] top-[0.35px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[86.999px] size-full" src={imgRectangle1} />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] border-[5.092px] border-solid border-white left-0 overflow-clip rounded-[34173752px] shadow-[0px_27.187px_33.984px_-6.797px_rgba(0,0,0,0.1),0px_10.875px_13.594px_-8.156px_rgba(0,0,0,0.1)] size-[173.997px] top-0" data-name="Container">
      <ImageWithFallback />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[12.33px] size-[19.995px] top-[12.33px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="19.9947" preserveAspectRatio="none" viewBox="0 0 19.9947 19.9947" width="19.9947">
        <g clipPath="url(#clip0_0_34)" id="Icon">
          <path d={svgPaths.p6747e00} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66623" />
          <path d={svgPaths.p246b180} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66623" />
        </g>
        <defs>
          <clipPath id="clip0_0_34">
            <rect fill="white" height="19.9947" width="19.9947" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-gradient-to-r border-[2.037px] border-solid border-white drop-shadow-[0px_13.594px_10.195px_rgba(0,0,0,0.1),0px_5.437px_4.078px_rgba(0,0,0,0.1)] from-[#c42981] left-[119.64px] rounded-[34173752px] size-[48.934px] to-[#55305c] top-[119.64px]" data-name="Button">
      <Icon1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 size-[173.997px]" data-name="Container">
      <Container4 />
      <Button1 />
    </div>
  );
}

function Container5() {
  return <div className="absolute left-[123.28px] size-[127.999px] top-[71.98px]" data-name="Container" />;
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-center left-[24px] top-[78px] w-[374.561px]">
      <Container1 />
      <Container3 />
      <Container5 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-gradient-to-b from-[#fccee8] h-[409px] left-0 to-[#c800de] top-0 via-1/2 via-[#fb64b6] w-[423px]" data-name="Container">
      <div className="absolute h-[404px] left-0 top-[6px] w-[423px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle} />
      </div>
      <div className="absolute backdrop-blur-[58.473px] bg-[rgba(217,217,217,0.02)] h-[410px] left-0 top-0 w-[423px]" />
      <Frame3 />
    </div>
  );
}

function Container9() {
  return <div className="bg-gradient-to-r from-[#c42981] h-[23.998px] relative rounded-[25139500px] shrink-0 to-[#55305c] w-[5.994px]" data-name="Container" />;
}

function Heading1() {
  return (
    <div className="h-[27.007px] relative shrink-0 w-[173.549px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['London_Bridge:Black',sans-serif] leading-[27px] left-0 not-italic text-[#55305c] text-[18px] top-[-1.5px] whitespace-nowrap">Informações Pessoais</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[7.996px] h-[27.007px] items-center relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Heading1 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex h-[19.995px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] flex-[1_0_0] font-['London_Bridge:Black',sans-serif] leading-[20px] min-w-px not-italic relative text-[#55305c] text-[14px]">Nome Completo</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[#fdf2f8] h-[50.982px] relative rounded-[14px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Kinetika:Light',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">Marina Silva</p>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#fce7f3] border-[1.498px] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.996px] h-[78.972px] items-start left-0 top-0 w-[325.066px]" data-name="Container">
      <Label />
      <TextInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex h-[19.995px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] flex-[1_0_0] font-['London_Bridge:Black',sans-serif] leading-[20px] min-w-px not-italic relative text-[#55305c] text-[14px]">Nome de Usuário</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="bg-[#fdf2f8] h-[50.982px] relative rounded-[14px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Kinetika:Light',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">marinatravel</p>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#fce7f3] border-[1.498px] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.996px] h-[78.972px] items-start left-0 top-[94.96px] w-[325.066px]" data-name="Container">
      <Label1 />
      <TextInput1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex h-[19.995px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] flex-[1_0_0] font-['London_Bridge:Black',sans-serif] leading-[20px] min-w-px not-italic relative text-[#55305c] text-[14px]">Bio</p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="bg-[#fdf2f8] h-[122.942px] relative rounded-[14px] shrink-0 w-full" data-name="Text Area">
      <div className="[word-break:break-word] leading-[24px] not-italic overflow-clip relative rounded-[inherit] size-full text-[16px]">
        <p className="absolute font-['Arial:Regular',sans-serif] left-[-48.75px] text-[#0a0a0a] top-[-552.63px] w-0">Apaixonada por conhecer novos lugares e culturas. Acredito que viajar é a melhor forma de crescer! 🌍✨</p>
        <p className="absolute font-['Kinetika:Light',sans-serif] left-[13.25px] text-black top-[14.37px] w-[292px]">Apaixonada por conhecer novos lugares e culturas. Acredito que viajar é a melhor forma de crescer! 🌍✨</p>
      </div>
      <div aria-hidden className="absolute border-[#fce7f3] border-[1.498px] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[15.991px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Kinetika:Light',sans-serif] leading-[16px] left-0 not-italic text-[#99a1af] text-[12px] top-[-1px] whitespace-nowrap">102/200 caracteres</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.996px] h-[176.183px] items-start left-0 top-[189.93px] w-[325.066px]" data-name="Container">
      <Label2 />
      <TextArea />
      <Paragraph />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex h-[19.995px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] flex-[1_0_0] font-['London_Bridge:Black',sans-serif] leading-[20px] min-w-px not-italic relative text-[#55305c] text-[14px]">Localização</p>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="absolute bg-[#fdf2f8] h-[50.982px] left-0 rounded-[14px] top-0 w-[325.066px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pl-[48px] pr-[16px] py-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Kinetika:Light',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">São Paulo, Brasil</p>
      </div>
      <div aria-hidden className="absolute border-[#fce7f3] border-[1.498px] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[15.99px] size-[19.995px] top-[15.49px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="19.9947" preserveAspectRatio="none" viewBox="0 0 19.9947 19.9947" width="19.9947">
        <g clipPath="url(#clip0_0_28)" id="Icon">
          <path d={svgPaths.p1413b180} id="Vector" stroke="#F6339A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66623" />
          <path d={svgPaths.p3aed4480} id="Vector_2" stroke="#F6339A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66623" />
        </g>
        <defs>
          <clipPath id="clip0_0_28">
            <rect fill="white" height="19.9947" width="19.9947" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[50.982px] relative shrink-0 w-full" data-name="Container">
      <TextInput2 />
      <Icon2 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.996px] h-[78.972px] items-start left-0 top-[382.1px] w-[325.066px]" data-name="Container">
      <Label3 />
      <Container15 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex h-[19.995px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] flex-[1_0_0] font-['London_Bridge:Black',sans-serif] leading-[20px] min-w-px not-italic relative text-[#55305c] text-[14px]">Data de Nascimento</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute left-[2.5px] size-[14.996px] top-[3.33px]">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" height="16.6623" preserveAspectRatio="none" viewBox="0 0 16.6623 16.6623" width="16.6623">
          <g id="Group 240">
            <path d={svgPaths.p1cad5380} id="Vector" stroke="#55305C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66623" />
            <line id="Line 3" stroke="#55305C" strokeWidth="4" x1="1.3336" x2="15.3336" y1="3.50072" y2="3.50072" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[19.995px]" data-name="Icon">
      <div className="absolute bottom-3/4 left-[33.33%] right-[66.67%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.83px]">
          <svg className="block size-full" fill="none" height="4.99868" preserveAspectRatio="none" viewBox="0 0 1.66623 4.99868" width="1.66623">
            <path d="M0.833113 0.833113V4.16556" id="Vector" stroke="#55305C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66623" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[66.67%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.83px]">
          <svg className="block size-full" fill="none" height="4.99868" preserveAspectRatio="none" viewBox="0 0 1.66623 4.99868" width="1.66623">
            <path d="M0.833113 0.833113V4.16556" id="Vector" stroke="#55305C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66623" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-0.83px_-5.56%]">
          <svg className="block size-full" fill="none" height="1.66623" preserveAspectRatio="none" viewBox="0 0 16.6623 1.66623" width="16.6623">
            <path d="M0.833113 0.833113H15.8291" id="Vector" stroke="#55305C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66623" />
          </svg>
        </div>
      </div>
      <Frame1 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Icon3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[49.76px] top-[11.73px] w-[251.995px]">
      <p className="[word-break:break-word] font-['Kinetika:Light',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">11/12/2025</p>
      <Group />
    </div>
  );
}

function DatePicker() {
  return (
    <div className="absolute bg-[#fdf2f8] border-[#fce7f3] border-[1.498px] border-solid h-[50.994px] left-0 overflow-clip rounded-[14px] top-0 w-[325.066px]" data-name="Date Picker">
      <Frame2 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[15.99px] size-[19.995px] top-[15.5px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="19.9947" preserveAspectRatio="none" viewBox="0 0 19.9947 19.9947" width="19.9947">
        <g clipPath="url(#clip0_0_19)" id="Icon">
          <path d="M6.6649 1.66623V4.99868" id="Vector" stroke="#F6339A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66623" />
          <path d="M13.3298 1.66623V4.99868" id="Vector_2" stroke="#F6339A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66623" />
          <path d={svgPaths.p22325000} id="Vector_3" stroke="#F6339A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66623" />
          <path d="M2.49934 8.33113H17.4954" id="Vector_4" stroke="#F6339A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66623" />
        </g>
        <defs>
          <clipPath id="clip0_0_19">
            <rect fill="white" height="19.9947" width="19.9947" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[50.994px] relative shrink-0 w-full" data-name="Container">
      <DatePicker />
      <Icon4 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.996px] h-[78.984px] items-start left-0 top-[477.06px] w-[325.066px]" data-name="Container">
      <Label4 />
      <Container17 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[556.047px] relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
      <Container16 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.991px] h-[599.045px] items-start left-[24px] top-[24px] w-[325.066px]" data-name="Container">
      <Container8 />
      <Container10 />
    </div>
  );
}

function Container20() {
  return <div className="bg-gradient-to-r from-[#c42981] h-[23.998px] relative rounded-[25139500px] shrink-0 to-[#55305c] w-[5.994px]" data-name="Container" />;
}

function Heading2() {
  return (
    <div className="h-[27.007px] relative shrink-0 w-[65.474px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['London_Bridge:Black',sans-serif] leading-[27px] left-0 not-italic text-[#55305c] text-[18px] top-[-1.5px] whitespace-nowrap">Contato</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[7.996px] h-[27.007px] items-center relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Heading2 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex h-[19.995px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] flex-[1_0_0] font-['London_Bridge:Black',sans-serif] leading-[20px] min-w-px not-italic relative text-[#55305c] text-[14px]">E-mail</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="absolute bg-[#fdf2f8] h-[50.982px] left-0 rounded-[14px] top-0 w-[325.066px]" data-name="Email Input">
      <div className="content-stretch flex items-center overflow-clip pl-[48px] pr-[16px] py-[12px] relative rounded-[inherit] size-full">
        <a className="[word-break:break-word] block font-['Kinetika:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap" href="mailto:marina.silva@email.com" target="_blank">
          <p className="cursor-pointer leading-[24px]">marina.silva@email.com</p>
        </a>
      </div>
      <div aria-hidden className="absolute border-[#fce7f3] border-[1.498px] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[15.99px] size-[19.995px] top-[15.49px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="19.9947" preserveAspectRatio="none" viewBox="0 0 19.9947 19.9947" width="19.9947">
        <g clipPath="url(#clip0_0_16)" id="Icon">
          <path d={svgPaths.p2d0fcf80} id="Vector" stroke="#F6339A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66623" />
          <path d={svgPaths.p35fec026} id="Vector_2" stroke="#F6339A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66623" />
        </g>
        <defs>
          <clipPath id="clip0_0_16">
            <rect fill="white" height="19.9947" width="19.9947" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[50.982px] relative shrink-0 w-full" data-name="Container">
      <EmailInput />
      <Icon5 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[7.996px] h-[78.972px] items-start relative shrink-0 w-full" data-name="Container">
      <Label5 />
      <Container23 />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex h-[19.995px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] flex-[1_0_0] font-['London_Bridge:Black',sans-serif] leading-[20px] min-w-px not-italic relative text-[#55305c] text-[14px]">Telefone</p>
    </div>
  );
}

function PhoneInput() {
  return (
    <div className="absolute bg-[#fdf2f8] h-[50.982px] left-0 rounded-[14px] top-0 w-[325.066px]" data-name="Phone Input">
      <div className="content-stretch flex items-center overflow-clip pl-[48px] pr-[16px] py-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Kinetika:Light',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">+55 11 98765-4321</p>
      </div>
      <div aria-hidden className="absolute border-[#fce7f3] border-[1.498px] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[15.99px] size-[19.995px] top-[15.49px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="19.9947" preserveAspectRatio="none" viewBox="0 0 19.9947 19.9947" width="19.9947">
        <g clipPath="url(#clip0_0_24)" id="Icon">
          <path d={svgPaths.p837ec00} id="Vector" stroke="#F6339A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66623" />
        </g>
        <defs>
          <clipPath id="clip0_0_24">
            <rect fill="white" height="19.9947" width="19.9947" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[50.982px] relative shrink-0 w-full" data-name="Container">
      <PhoneInput />
      <Icon6 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[7.996px] h-[78.972px] items-start relative shrink-0 w-full" data-name="Container">
      <Label6 />
      <Container25 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[15.991px] h-[173.935px] items-start relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container24 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.991px] h-[216.933px] items-start left-[24px] top-[647.04px] w-[325.066px]" data-name="Container">
      <Container19 />
      <Container21 />
    </div>
  );
}

function Container28() {
  return <div className="bg-gradient-to-r from-[#c42981] h-[23.998px] relative rounded-[25139500px] shrink-0 to-[#55305c] w-[5.994px]" data-name="Container" />;
}

function Heading3() {
  return (
    <div className="h-[27.007px] relative shrink-0 w-[108.964px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['London_Bridge:Black',sans-serif] leading-[27px] left-0 not-italic text-[#55305c] text-[18px] top-[-1.5px] whitespace-nowrap">Redes Sociais</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[7.996px] h-[27.007px] items-center relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Heading3 />
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex h-[19.995px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] flex-[1_0_0] font-['London_Bridge:Black',sans-serif] leading-[20px] min-w-px not-italic relative text-[#55305c] text-[14px]">Instagram</p>
    </div>
  );
}

function TextInput3() {
  return (
    <div className="absolute bg-[#fdf2f8] h-[50.982px] left-0 rounded-[14px] top-0 w-[325.066px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pl-[48px] pr-[16px] py-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Kinetika:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">@marinatravel</p>
      </div>
      <div aria-hidden className="absolute border-[#fce7f3] border-[1.498px] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[15.99px] size-[19.995px] top-[15.49px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="19.9947" preserveAspectRatio="none" viewBox="0 0 19.9947 19.9947" width="19.9947">
        <g clipPath="url(#clip0_0_12)" id="Icon">
          <path d={svgPaths.p24d33900} id="Vector" stroke="#F6339A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66623" />
          <path d={svgPaths.p3913c800} id="Vector_2" stroke="#F6339A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66623" />
          <path d="M14.5795 5.41523H14.5878" id="Vector_3" stroke="#F6339A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66623" />
        </g>
        <defs>
          <clipPath id="clip0_0_12">
            <rect fill="white" height="19.9947" width="19.9947" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[50.982px] relative shrink-0 w-full" data-name="Container">
      <TextInput3 />
      <Icon7 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[7.996px] h-[78.972px] items-start relative shrink-0 w-full" data-name="Container">
      <Label7 />
      <Container31 />
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex h-[19.995px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] flex-[1_0_0] font-['London_Bridge:Black',sans-serif] leading-[20px] min-w-px not-italic relative text-[#55305c] text-[14px]">Website</p>
    </div>
  );
}

function TextInput4() {
  return (
    <div className="absolute bg-[#fdf2f8] h-[50.982px] left-0 rounded-[14px] top-0 w-[325.066px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pl-[48px] pr-[16px] py-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Kinetika:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">marinatravel.com</p>
      </div>
      <div aria-hidden className="absolute border-[#fce7f3] border-[1.498px] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[15.99px] size-[19.995px] top-[15.49px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="19.9947" preserveAspectRatio="none" viewBox="0 0 19.9947 19.9947" width="19.9947">
        <g clipPath="url(#clip0_0_8)" id="Icon">
          <path d={svgPaths.p39b56a00} id="Vector" stroke="#F6339A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66623" />
          <path d={svgPaths.p3f22380} id="Vector_2" stroke="#F6339A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66623" />
          <path d="M1.66623 9.99735H18.3285" id="Vector_3" stroke="#F6339A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66623" />
        </g>
        <defs>
          <clipPath id="clip0_0_8">
            <rect fill="white" height="19.9947" width="19.9947" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[50.982px] relative shrink-0 w-full" data-name="Container">
      <TextInput4 />
      <Icon8 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[7.996px] h-[78.972px] items-start relative shrink-0 w-full" data-name="Container">
      <Label8 />
      <Container33 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[15.991px] h-[173.935px] items-start relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Container32 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.991px] h-[216.933px] items-start left-[24px] top-[887.97px] w-[325.066px]" data-name="Container">
      <Container27 />
      <Container29 />
    </div>
  );
}

function Container36() {
  return <div className="bg-gradient-to-r from-[#c42981] h-[23.998px] relative rounded-[25139500px] shrink-0 to-[#55305c] w-[5.994px]" data-name="Container" />;
}

function Heading4() {
  return (
    <div className="h-[27.007px] relative shrink-0 w-[172.893px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['London_Bridge:Black',sans-serif] leading-[27px] left-0 not-italic text-[#55305c] text-[18px] top-[-1.5px] whitespace-nowrap">Interesses de Viagem</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[7.996px] h-[27.007px] items-center relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Heading4 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch drop-shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex from-[#c42981] items-center justify-center left-0 px-[12px] py-[6px] rounded-[25139500px] to-[#55305c] top-0" data-name="Button">
      <p className="[word-break:break-word] font-['London_Bridge:Semi_Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Praias</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch drop-shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex from-[#c42981] items-center justify-center left-[76.26px] px-[10px] py-[6px] rounded-[25139500px] to-[#55305c] top-0" data-name="Button">
      <p className="[word-break:break-word] font-['London_Bridge:Semi_Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Montanhas</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch drop-shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex from-[#c42981] items-center justify-center left-[185.69px] px-[12px] py-[6px] rounded-[25139500px] to-[#55305c] top-0" data-name="Button">
      <p className="[word-break:break-word] font-['London_Bridge:Semi_Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Cidades</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch drop-shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex from-[#c42981] items-center justify-center left-0 px-[12px] py-[7px] rounded-[25139500px] to-[#55305c] top-[43.98px]" data-name="Button">
      <p className="[word-break:break-word] font-['London_Bridge:Semi_Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Cultura</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[#fce7f3] content-stretch flex items-center justify-center left-[84.6px] px-[11px] py-[7px] rounded-[25139500px] top-[43.98px]" data-name="Button">
      <div aria-hidden className="absolute border-[#fccee8] border-[1.498px] border-solid inset-0 pointer-events-none rounded-[25139500px]" />
      <p className="[word-break:break-word] font-['London_Bridge:Semi_Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#55305c] text-[14px] text-center whitespace-nowrap">Gastronomia</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch drop-shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex from-[#c42981] items-center justify-center left-[206.74px] px-[11px] py-[7px] rounded-[25139500px] to-[#55305c] top-[43.98px]" data-name="Button">
      <p className="[word-break:break-word] font-['London_Bridge:Semi_Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Aventura</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-[#fce7f3] content-stretch flex items-center justify-center left-0 px-[10px] py-[7px] rounded-[25139500px] top-[90.96px]" data-name="Button">
      <div aria-hidden className="absolute border-[#fccee8] border-[1.498px] border-solid inset-0 pointer-events-none rounded-[25139500px]" />
      <p className="[word-break:break-word] font-['London_Bridge:Semi_Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#55305c] text-[14px] text-center whitespace-nowrap">Relaxamento</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch drop-shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex from-[#c42981] items-center justify-center left-[122.56px] px-[11px] py-[7px] rounded-[25139500px] to-[#55305c] top-[90.96px]" data-name="Button">
      <p className="[word-break:break-word] font-['London_Bridge:Semi_Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Fotografia</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[129.942px] relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.991px] h-[172.94px] items-start left-[24px] top-[1128.91px] w-[325.066px]" data-name="Container">
      <Container35 />
      <Container37 />
    </div>
  );
}

function Container40() {
  return <div className="bg-gradient-to-r from-[#c42981] h-[23.998px] relative rounded-[25139500px] shrink-0 to-[#55305c] w-[5.994px]" data-name="Container" />;
}

function Heading5() {
  return (
    <div className="h-[27.007px] relative shrink-0 w-[93.91px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['London_Bridge:Black',sans-serif] leading-[27px] left-0 not-italic text-[#55305c] text-[18px] top-[-1.5px] whitespace-nowrap">Privacidade</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[7.996px] h-[27.007px] items-center relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Heading5 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[19.995px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] flex-[1_0_0] font-['London_Bridge:Black',sans-serif] leading-[20px] min-w-px not-italic relative text-[#55305c] text-[14px]">Perfil Público</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[15.991px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Kinetika:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Qualquer pessoa pode ver seu perfil</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.992px] h-[39.978px] items-start left-[17.49px] top-[17.49px] w-[191.015px]" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Container45() {
  return <div className="bg-white h-[23.998px] relative rounded-[25139500px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container" />;
}

function Container44() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#c42981] h-[27.99px] items-start left-[259.58px] pl-[22.008px] pr-[1.99px] pt-[1.99px] rounded-[25139500px] to-[#55305c] top-[23.48px] w-[47.997px]" data-name="Container">
      <Container45 />
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-[#fdf2f8] h-[74.957px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#fce7f3] border-[1.498px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container43 />
      <Container44 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[19.995px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] flex-[1_0_0] font-['London_Bridge:Black',sans-serif] leading-[20px] min-w-px not-italic relative text-[#55305c] text-[14px]">Mostrar Localização</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[15.991px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Kinetika:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Exibir sua cidade nos posts</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.992px] h-[39.978px] items-start left-[17.49px] top-[17.49px] w-[141.918px]" data-name="Container">
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Container49() {
  return <div className="bg-white h-[23.998px] relative rounded-[25139500px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container" />;
}

function Container48() {
  return (
    <div className="absolute bg-[#d1d5dc] content-stretch flex flex-col h-[27.99px] items-start left-[259.58px] pl-[1.99px] pr-[22.008px] pt-[1.99px] rounded-[25139500px] top-[23.48px] w-[47.997px]" data-name="Container">
      <Container49 />
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-[#fdf2f8] h-[74.957px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#fce7f3] border-[1.498px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col gap-[11.999px] h-[161.913px] items-start relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Container46 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.991px] h-[204.911px] items-start left-[24px] top-[1325.84px] w-[325.066px]" data-name="Container">
      <Container39 />
      <Container41 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="19.9947" preserveAspectRatio="none" viewBox="0 0 19.9947 19.9947" width="19.9947">
        <g id="Icon">
          <path d={svgPaths.p1df32e00} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66623" />
          <path d={svgPaths.p8337000} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66623" />
          <path d={svgPaths.p330fc680} id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66623" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[169.995px]">
      <Icon9 />
      <p className="[word-break:break-word] font-['London_Bridge:Black',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Salvar Alterações</p>
    </div>
  );
}

function Button10() {
  return (
    <a className="bg-gradient-to-r from-[#c42981] relative rounded-[25139500px] shrink-0 to-[#55305c] w-full" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[66px] py-[12px] relative size-full">
          <Frame />
        </div>
      </div>
    </a>
  );
}

function Button11() {
  return (
    <a className="bg-white relative rounded-[25139500px] shrink-0 w-full" data-name="Button">
      <div aria-hidden className="absolute border-[#ed82b9] border-[1.498px] border-solid inset-0 pointer-events-none rounded-[25139500px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[127px] py-[14px] relative size-full">
          <p className="[word-break:break-word] font-['London_Bridge:Black',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#55305c] text-[16px] text-center whitespace-nowrap">Cancelar</p>
        </div>
      </div>
    </a>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch cursor-pointer flex flex-col gap-[11.999px] h-[118.95px] items-start left-[24px] top-[1554.75px] w-[325.066px]" data-name="Container">
      <Button10 />
      <Button11 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-white border-[#fce7f3] border-[0.749px] border-solid drop-shadow-[0px_25px_25px_rgba(0,0,0,0.25)] h-[1699.199px] left-[24px] rounded-[24px] top-[336.97px] w-[374.561px]" data-name="Container">
      <Container7 />
      <Container18 />
      <Container26 />
      <Container34 />
      <Container38 />
      <Container50 />
    </div>
  );
}

export default function EditProfile() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(180deg, rgb(253, 242, 248) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Edit Profile">
      <Container />
      <Container6 />
    </div>
  );
}