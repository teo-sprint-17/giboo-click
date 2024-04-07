type Props = {
  isSelected: boolean;
  name: string;
};

const Category = ({ isSelected, name }: Props) => {
  return (
    <div
      className={`whitespace-nowrap text-center text-base font-normal leading-5 py-[6px] px-[10px] rounded-[30px] cursor-pointer mb-[38px]${
        isSelected ? ' bg-[#FF6A6A] text-[#FFFFFF]' : ' bg-[#FFFFFF] text-[#000000]'
      }`}
    >
      {name}
    </div>
  );
};

export default Category;
