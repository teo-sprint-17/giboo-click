type DonationParagraphType = {
  paragraphs: string[];
};

const DonationDescription = ({ paragraphs }: DonationParagraphType) => {
  return (
    <>
      {paragraphs.map((paragraph, idx) => (
        <p key={idx} className="text-[16px] whitespace-pre-line">
          {paragraph}
        </p>
      ))}
    </>
  );
};

export default DonationDescription;
