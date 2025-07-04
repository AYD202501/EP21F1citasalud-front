import Image from "next/image";

type FooterProps = {
  setPopupTerms: React.Dispatch<React.SetStateAction<boolean>>;
  setPopupOpenPrivacy: React.Dispatch<React.SetStateAction<boolean>>;
};

const Footer = ({ setPopupTerms, setPopupOpenPrivacy }: FooterProps) => (
  <footer className="flex flex-row justify-around items-center w-full bg-[#90AFB3] text-black border-t-1 py-4 shadow-inner h-20">
    <div className="flex flex-row items-center justify-center gap-20">
      <div className="">
        <Image src="/citasaludlogo.png" alt="logo" width={170} height={100} />
      </div>
      <button
        type="button"
        onClick={() => setPopupTerms(true)}
        className="h-20 flex justify-center text-bank3 items-center text-sm font-normal hover:font-bold hover:text-bank2 cursor-pointer bg-transparent border-none"
      >
        Términos y condiciones
      </button>
      <button
        type="button"
        onClick={() => setPopupOpenPrivacy(true)}
        className="h-20 flex justify-center text-bank3 items-center text-sm font-normal hover:font-bold hover:text-bank2 cursor-pointer bg-transparent border-none"
      >
        Política de privacidad
      </button>
    </div>
  </footer>
);

export default Footer;
