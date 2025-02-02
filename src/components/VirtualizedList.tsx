import React from "react";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";

const VirtualizedList: React.FC = () => {
    const items = Array.from({ length: 1000 }, (_, i) => `アイテム ${i}`);

    return (
        <List height={400} width={300} itemSize={35} itemCount={items.length}>
            {({ index, style }: ListChildComponentProps) => {
                // console.log(`Rendering item: ${index}`);
                return <div style={style}> {items[index]}</div>;
            }}
        </List>
    );
};

export default VirtualizedList;
