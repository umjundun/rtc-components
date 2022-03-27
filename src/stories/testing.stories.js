import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../components/Button';
import Card from '../components/Card';

const stories = storiesOf("app test", module);

stories.add("App", () => {
    return (
    <div>
        <Button 
            label="Button Test"
            onClick={() => console.log("You Clicked a button!")}
        />
        <br />
        <Card image="https://cdn.rapidrtc.com/wp-content/uploads/2021/03/Training-Logo-1.png" text_column="You and your dealership move fast, so you need to learn fast, and we get that."/>
        <Card image="https://cdn.rapidrtc.com/wp-content/uploads/2021/03/DealerCare-Logo-1.png" text_column="When it comes to service, you want to talk to someone and we want to talk to you." />
    </div>
    );
});