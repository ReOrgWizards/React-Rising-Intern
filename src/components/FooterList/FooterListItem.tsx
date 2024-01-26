import { footerLinkItemType } from "../../shared/type";

function FooterListItem({ label, icon }: footerLinkItemType) {
  return (
    <li className="text-blue-primary-color-200">
      <span>{label}</span>
      <span>{icon}</span>
    </li>
  );
}

export default FooterListItem;
