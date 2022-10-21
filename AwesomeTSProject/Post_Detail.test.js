import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Post_Detail from './src/screens/Post_Detail';

describe('Post_Detail', () => {

        it('should render without throwing an error', () => {
            const component = shallow(<Post_Detail/>).contains(<Text style={styles.sender}>{title}</Text>)
            expect(component).toBe(true)
        });

});