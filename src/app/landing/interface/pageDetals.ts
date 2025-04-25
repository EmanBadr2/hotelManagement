import {  User } from "./curd";

export interface pageDetailsRes {
  success : boolean ,
  message :string ,
  data : Room ,
}

export interface Room {
  _id: string;
  roomNumber: string;
  price: number;
  capacity: number;
  discount: number;
  facilities:  User [];
  createdBy:  User
  images: string[];
  createdAt: string;
  updatedAt: string;
}

