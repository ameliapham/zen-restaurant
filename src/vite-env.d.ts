/// <reference types="vite/client" />

// Extend imports for SVGs with `?component` suffix
declare module "*.svg?react" {
    import * as React from "react";
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}
