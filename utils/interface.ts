export type NavigationProps = {
  Home: undefined;
  Cart: undefined;
  Menu: undefined;
  Account: undefined;
  ProductDetails: {
    id: string;
  };
  Bottom: undefined;
};

export type ChildrenProps = {
  children: React.ReactNode;
};

export interface ScreenOptionsProps {
  tabBarShowLabel: boolean;
  tabBarHideOnKeyboard: boolean;
  headerShown: boolean;
  tabBarStyle: {
    position: "absolute";
    bottom: number;
    right: number;
    left: number;
    height: number;
  };
}

export interface ProductProps {
  id: string;
  name: string;
  url: string;
  price: string;
  description: string;
  ingredients: string;
  nutritionalInformation: {
    name: string;
    details: {
      name: string;
      value: string;
    }[];
  };
  info: string;
  prepare: string[];
  dietaryInformation: string[];
  storageInformation: string;
  extra: string[];
}

export interface SingleProps {
  dataObj: ProductProps;
}

export interface HeaderProps {
  onSearch: (value: string) => void;
}

export interface RouteParams {
  id: string; // or number, depending on what type your id is
}
