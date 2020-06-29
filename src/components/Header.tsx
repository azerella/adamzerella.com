import { h, Fragment } from 'preact';

import './Header.scss';

export interface Props {
    text: string;
    subHeading: string;
}

export default function Header(props: Props) {
    return (
        <Fragment>
            <h1>{props.text}</h1>
            <h2>{props.subHeading}</h2>
        </Fragment>
    );
}