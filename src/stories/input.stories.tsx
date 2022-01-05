import React, {useRef, useState} from 'react';
import {action} from '@storybook/addon-actions'

export default {
    title: 'Example/Input'
}

export const UnControlledInput = () => <input />;

export const TrackValue = () => {
    const [value, setValue] = useState('')
    return <><input onChange={(event) => {
                    setValue(event.currentTarget.value)}}
    /> - {value}</>
}

export const TrackValueByButton = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    return <><input ref={inputRef} /><button onClick={() => {
        const el =  inputRef.current as HTMLInputElement
        setValue(el.value)}}>add</button> - {value}</>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    return <input value={parentValue} onChange={(event) => {
        setParentValue(event.currentTarget.value)}}
    />
}

export const ControlledChekBox = () => {
    const [parentValue, setParentValue] = useState(true)
    return <input type='checkbox' checked={parentValue} onChange={(event) => {
        setParentValue(event.currentTarget.checked)}}
    />
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string|undefined>('2')
    return <select value={parentValue} onChange={(event) => setParentValue(event.currentTarget.value)}>
        <option >none</option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Kiev</option>
    </select>
}