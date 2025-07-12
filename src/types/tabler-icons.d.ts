declare module '@tabler/icons-react' {
  import { FC, SVGProps } from 'react';
  
  export interface TablerIconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    stroke?: number | string;
  }
  
  export const IconArrowLeft: FC<TablerIconProps>;
  export const IconArrowRight: FC<TablerIconProps>;
  // Add other icons as needed
} 