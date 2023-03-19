import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React from "react";

export default function returnSortingIcon(directionOfIcon: string) {
    if (directionOfIcon === 'down') {
        return <KeyboardArrowDownIcon/>
    } else if (directionOfIcon === 'default') {
        return <UnfoldMoreIcon/>
    } else if (directionOfIcon === 'up') {
        return <KeyboardArrowUpIcon/>
    }
}
