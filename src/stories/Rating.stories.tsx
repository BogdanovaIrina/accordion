import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from '@storybook/addon-actions'

import {HelpType, Rating} from '../components/Rating';

export default {
    title: 'Example/Rating',
    component: Rating,
} as ComponentMeta<typeof Rating>;

const callback = action('event')

export const EmptyRating: ComponentStory<typeof Rating> = () => <Rating value={0} onClick={callback} />;
export const Rating1: ComponentStory<typeof Rating> = () => <Rating value={1} onClick={callback} />;
export const Rating2: ComponentStory<typeof Rating> = () => <Rating value={2} onClick={callback} />;
export const Rating3: ComponentStory<typeof Rating> = () => <Rating value={3} onClick={callback} />;
export const Rating4: ComponentStory<typeof Rating> = () => <Rating value={4} onClick={callback} />;
export const Rating5: ComponentStory<typeof Rating> = () => <Rating value={5} onClick={callback} />;
export const RatingChange: ComponentStory<typeof Rating> = () => {
    const [rating, setRating]=useState<HelpType>(0)
    return <Rating value={rating} onClick={setRating} />
}