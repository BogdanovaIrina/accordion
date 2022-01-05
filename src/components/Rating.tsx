import React from "react";


export type HelpType = 0|1|2|3|4|5

type RatingPropsType = {
    value: HelpType
    onClick: (value:HelpType) => void
}

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1} />
            <Star selected={props.value > 1} onClick={props.onClick} value={2} />
            <Star selected={props.value > 2} onClick={props.onClick} value={3} />
            <Star selected={props.value > 3} onClick={props.onClick} value={4} />
            <Star selected={props.value > 4} onClick={props.onClick} value={5} />
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    onClick: (value:HelpType) => void
    value: HelpType
}

function Star(props: StarPropsType) {
   return props.selected? <span onClick={() => props.onClick(props.value)}><b>star </b></span> : <span onClick={() => props.onClick(props.value)}>star </span>
}