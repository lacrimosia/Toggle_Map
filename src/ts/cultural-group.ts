export interface CulturalGroup {

  name: string;
  image: string;
  imageAlt: string;
  description: string;
  tabOrder: number;
  point: {"x": number, "y": number};
  boxPosition: { "x": number, "y": number };
  color: string;
  className: string;
}
