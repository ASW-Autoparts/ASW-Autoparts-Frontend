// react
import React from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import AppLink from '~/components/shared/AppLink';
import url from '~/services/url';



interface Props extends React.HTMLAttributes<HTMLElement> {}

function Logo(props: Props) {
    return (
        <div {...props}>
            <AppLink href={url.home()} className="logo">
                {/* <div className="logo__slogan">
                    <FormattedMessage id="TEXT_SLOGAN" />
                </div> */}
                <div className="logo__image">
                    {/* logo */}
                    <img src="/images/awsLogo.svg" alt="AWS Logo" />
                    {/* logo / end */}
                </div>
            </AppLink>
        </div>
    );
}

export default Logo;
