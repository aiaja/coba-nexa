/// <reference types="vite/client" />

// Type declaration untuk import SVG files sebagai React components atau sebagai URL string

declare module '*.svg' {
  import * as React from 'react';
  
  // SVG bisa di-import sebagai React component
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  // Atau sebagai URL string (default export)
  const src: string;
  export default src;
}

declare module '*.svg?react' {
  import * as React from 'react';
  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default ReactComponent;
}

declare module '*.svg?url' {
  const src: string;
  export default src;
}