
export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  enrollmentDate: string;
  stamps: number;
  redeemedRewards: number;
}

export interface PricingPlan {
  name: string;
  price: string;
  clientLimit: string;
  features: string[];
  highlight?: boolean;
}