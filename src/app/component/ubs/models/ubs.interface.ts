export interface Bag {
  id: number;
  name?: string;
  capacity?: number;
  price?: number;
  quantity?: number;
}

export interface orderBag {
  amount: number;
  id: number;
}

export interface OrderDetails {
  bags: Bag[];
  points: number;
}

export interface WorkingData {
  bags: Bag[];
  points: number;

}

export interface FinalOrder {
  bags: Bag[];
  pointsToUse?: number;
  cerfiticates?: any;
  additionalOrders?: any;
  orderComment?: string;
  personalData?: PersonalData;
  points?: number;
}

// export interface IOrder {
//   allBags: Bag[];
//   points: number;
//   pointsToUse?: number;
//   certificates: any;
//   additionalOrders: any;
//   orderComment: string;
// }



export interface ICertificate {
  certificatePoints: number;
  certificateStatus: string;
  // certificateDate: any
}

// export interface IUserOrder {
//   bags: Bag[];
//   pointsToUse: number;
//   certificates: any;
//   additionalOrders: any;
//   orderComment: string;
// }

export interface PersonalData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  addressComment: string;
  city: string;
  district: string;
  street: string;
  houseCorpus: string;
  entranceNumber: string;
  houseNumber: string;
  longitude?: number;
  latitude?: number;
}

export interface Address{
  city: string;
  district: string;
  street: string;
  houseCorpus: string;
  entranceNumber: string;
  houseNumber: string;
  longitude?: number;
  latitude?: number;
}

