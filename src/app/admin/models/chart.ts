export interface StatsData {
    rooms: number;
    facilities: number;
    ads: number;
    bookings: {
      pending: number;
      completed: number;
    };
    users: {
      user: number;
      admin: number;
    };
}
export interface StatsResponse {
    success: boolean;
    message: string;
    data: StatsData;
  }