declare module "react-window" {
    import * as React from "react";

    export interface ListChildComponentProps {
        index: number;
        style: React.CSSProperties;
    }

    export const FixedSizeList: React.ComponentType<{
        height: number;
        width: number;
        itemSize: number;
        itemCount: number;
        children: (props: ListChildComponentProps) => JSX.Element;
    }>;
}
