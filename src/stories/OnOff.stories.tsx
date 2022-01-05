import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from '@storybook/addon-actions'

import {OnOff} from '../components/OnOff';

export default {
    title: 'Example/OnOff',
    component: OnOff,
} as ComponentMeta<typeof OnOff>;

const callback = action('event')

export const OnMode: ComponentStory<typeof OnOff> = () => <OnOff on={true} onChange={callback} />;
export const OffMode: ComponentStory<typeof OnOff> = () => <OnOff on={false} onChange={callback} />;
export const ModeChange: ComponentStory<typeof OnOff> = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff on={value} onChange={setValue} />
}