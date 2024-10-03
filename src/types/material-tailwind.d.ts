declare module "@material-tailwind/react" {
    import { FC, ReactNode } from "react";
  
    export interface ButtonProps {
      variant?: "text" | "outlined" | "gradient";
      size?: "sm" | "md" | "lg";
      color?: string;
      className?: string;
      children?: ReactNode;
      onClick?: () => void;
    }
  
    export const Button: FC<ButtonProps>;
  
    export interface InputProps {
      label?: string;
      icon?: ReactNode;
      className?: string;
      [key: string]: any; // Allow any other props
    }
  
    export const Input: FC<InputProps>;
  
    export interface MenuProps {
      open?: boolean;
      handler?: (open: boolean) => void;
      offset?: { mainAxis: number };
      placement?: string;
      allowHover?: boolean;
      children: ReactNode;
    }
  
    export const Menu: FC<MenuProps>;
  
    export const MenuHandler: FC<{ children: ReactNode }>;
    export const MenuList: FC<{ children: ReactNode }>;
    export const MenuItem: FC<{ children: ReactNode; className?: string; color?: string }>;
  
    export const Navbar: FC<{ className?: string; children: ReactNode }>;
    export const Collapse: FC<{ open: boolean; children: ReactNode }>;
    export const Typography: FC<{ as?: React.ElementType; variant?: string; className?: string; children: ReactNode }>;
    export const List: FC<{ className?: string; children: ReactNode }>;
    export const ListItem: FC<{ className?: string; children: ReactNode; selected?: boolean }>;
    export const IconButton: FC<{ variant?: string; color?: string; className?: string; onClick?: () => void; children: ReactNode }>;
  
    // Add other components as necessary
  }
  