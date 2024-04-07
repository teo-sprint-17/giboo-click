export type DonationFoundation = {
  id: number;
  name: string;
  foundationUrl: string | null;
  category: string;
  title: string;
  mainImage: string;
  bodyImage: string;
  donationPeriod: { start: string; end: string };
  donationCount: number;
  description: string;
  donationGoal: number;
  comments: DonationComment[];
  createdAt: string;
};

export type DonationComment = {
  id: number;
  name: string;
  content: string;
  createdAt: string;
};

export type CertificationCard = {
  id: number;
  donationCount: number;
  donatorName: string;
  createdAt: string;
};

export type User = {
  username: string;
  issueDate: Date;
  totalDonationCount: number;
  foundationDonation: number[];
};
