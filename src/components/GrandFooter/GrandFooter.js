import React from 'react';
import Media from '../Media/Media';
import Newsletter from '../Newsletter/Newsletter';
import Footer from '../Footer/Footer';

class GrandFooter extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <>
            <Media />
            <Newsletter />
            <Footer />
        </>
    }
}

export default GrandFooter;