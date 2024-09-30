import { StaticImageData } from "next/image";

export type MockProductType = {
  name: string;
  upload: StaticImageData;
  slug: string;
  price: string;
  description: string;
};
