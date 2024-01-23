type Props = {
  icon?: string;
  label: string;
  btnType: string;
  labelType: string;
};

type StyleProp = {
  primary: string;
  secondary: string;
  tertiary?: string;
};

export const Button = ({ icon, label, btnType, labelType }: Props) => {
  const base =
    "flex justify-center items-center gap-8 rounded-btn px-[80px] py-5 ";

  const btnStyle: StyleProp = {
    primary: base + "bg-blue-primary-color-400",
    secondary:
      base +
      "border-blue-primary-color-400 border-2 border-blue-primary-color-400",
    tertiary: base + "bg-blue-primary-color-400 py-[10px] px-6",
  };

  const textStyle: StyleProp = {
    primary: "text-blue-primary-color-400",
    secondary: "text-grey-primary-color-100",
  };

  return (
    <button className={btnStyle[btnType]}>
      <img src={icon} alt="" />
      <span className={`${textStyle[labelType]} text-xl`}>{label}</span>
    </button>
  );
};
