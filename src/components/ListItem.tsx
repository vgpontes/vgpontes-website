import React from "react";

export interface ListItemProps {
    items : string[];

}
function ListItem(props: ListItemProps) {
    const listItems = props.items.map(item => <li>{item}</li>);
    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default ListItem;