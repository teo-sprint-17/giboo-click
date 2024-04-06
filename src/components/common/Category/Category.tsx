type Props = {
  isSelected: boolean;
  name: string;
};

const Category = ({ isSelected, name }: Props) => {
  return (
    <div
      className={`font-['SUITE-Variable'] text-center text-base font-normal leading-5 py-[6px] px-[10px] rounded-[30px] cursor-pointer mb-[38px]${
        isSelected ? ' bg-[#565656] text-[#EBEBEB]' : ' bg-[#D7D7CE] text-[#000000]'
      }`}
    >
      {name}
    </div>
  );
};

export default Category;
