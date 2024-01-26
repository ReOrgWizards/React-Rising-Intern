import Logo from "../assets/icons/Logo";
import FooterList from "../components/FooterList/FooterList";
import { footerLinkItemType } from "../shared/type";

const footerLinkItem: footerLinkItemType[] = [
  {
    id: 1,
    label: "Home",
  },
  {
    id: 2,
    label: "About Us",
  },
  {
    id: 3,
    label: "Services",
  },
  {
    id: 4,
    label: "Recent Activities",
  },
];

export default function Footer() {
  return (
    <footer className=" flex flex-col justify-center bg-blue-primary-color-400">
      <div className="flex items-center justify-between border-b-2 border-grey-primary-color-200/40 px-12 py-20">
        <div className="flex w-[42rem] items-center justify-start gap-8">
          <Logo width={112} height={112} />
          <h2 className="font-comfortaa text-5xl font-bold text-blue-primary-color-300">
            Channakya Software Nepal
          </h2>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h3 className="font-lato text-2xl font-bold text-grey-primary-color-100">
            Useful Links
          </h3>
          <FooterList navArr={footerLinkItem} />
        </div>
        <div className="flex flex-col items-start gap-4">
          <h3 className="font-lato text-2xl font-bold text-grey-primary-color-100">
            Contact Info
          </h3>
          <FooterList navArr={footerLinkItem} />
        </div>
      </div>
      <p className="px-12 py-6 text-center text-blue-primary-color-300">
        &copy; 2024 Channakya Software Nepal. All Rights Reserved.
      </p>
    </footer>
  );
}
