import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../components/Button';
import Card from '../components/Card';

const stories = storiesOf("app test", module);

stories.add("App", () => {
    return (
        <div>
        <Button label="Button Test"
        />
        <br />
        <Card title="Card Test" />
        </div>
    );
});