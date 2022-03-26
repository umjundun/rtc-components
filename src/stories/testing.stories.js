import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../components/Button';

const stories = storiesOf("app test", module);

stories.add("App", () => {
    return (
        <div>Hello World!
            <Button label="Button Test"/>;
        </div>
    );
});