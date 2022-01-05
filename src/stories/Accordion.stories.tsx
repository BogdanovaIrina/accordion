import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from '@storybook/addon-actions'

import {Accordion} from '../components/Accordion';

export default {
    title: 'Example/Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const callback = action('event')

export const CollapsedMode: ComponentStory<typeof Accordion> = () => <Accordion titleValue={"Users"} collapsed={true} onChange={callback} />;
export const UnCollapsedMode: ComponentStory<typeof Accordion> = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback} />;
export const CollapsedChange: ComponentStory<typeof Accordion> = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={"Users"} collapsed={value} onChange={() => setValue(!value)} />
}