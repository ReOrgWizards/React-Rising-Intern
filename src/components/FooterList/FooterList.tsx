import { footerLinkItemType } from "../../shared/type";
import FooterListItem from "./FooterListItem";
interface FooterListProps {
  navArr: footerLinkItemType[];
}

function FooterList({ navArr }: FooterListProps) {
  return (
    <ul className="flex flex-col gap-2">
      {navArr.map((link: footerLinkItemType) => (
        <FooterListItem {...link} key={link.id} />
      ))}
    </ul>
  );
}

export default FooterList;
