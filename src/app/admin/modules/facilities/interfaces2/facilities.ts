export interface Facility {
    _id: string;
    name: string;
    createdBy: {
      _id: string;
      userName: string;
    };
    createdAt: string;
    updatedAt: string;
  }
  
  export interface FacilitiesResponseData {
    facilities: Facility[];
    totalCount: number;
  }  

  export interface FacilitiesApiResponse {
    success: boolean;
    message: string;
    data: FacilitiesResponseData;
  }
  