// // types/model-viewer.d.ts

// declare namespace JSX {
//     interface IntrinsicElements {
//       "model-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
//         src?: string;
//         alt?: string;
//         ar?: boolean;
//         environmentImage?: string;
//         poster?: string;
//         shadowIntensity?: string | number;
//         cameraControls?: boolean;
//         touchAction?: string;
//       };
//     }
//   }
  
declare module '@google/model-viewer' 
declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<React.HTMLProps<HTMLElement>, HTMLElement>;
  }
}

// {
//   import { HTMLAttributes } from 'react';

//   interface ModelViewerProps extends HTMLAttributes<HTMLElement> {
//     src: string;
//     'ios-src'?: string;
//     poster?: string;
//     alt?: string;
//     'shadow-intensity'?: string;
//     'camera-controls'?: boolean;
//     'auto-rotate'?: boolean;
//     style?: React.CSSProperties;
//   }

//   const ModelViewer: React.FC<ModelViewerProps>;
//   export default ModelViewer;
// }

