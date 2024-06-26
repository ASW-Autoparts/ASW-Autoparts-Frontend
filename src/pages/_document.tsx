// react
import React from 'react';
// third-party
import Document, {
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document';
// application
import { baseUrl } from '~/services/utils';
import { getDefaultLanguage, getLanguageByPath } from '~/services/i18n/utils';

class MyDocument extends Document {
    render() {
        const language = getLanguageByPath(this.props.canonicalBase) || getDefaultLanguage();
        const lang = language.locale;
        const dir = language.direction;

        // noinspection HtmlRequiredTitleElement
        return (
            <Html lang={lang} dir={dir}>
                <Head>
                    <link rel="shortcut icon" href={baseUrl('/images/favicon.png')} />

                    {/* fonts */}
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i" />
                </Head>
                <body>
                    <div className="site-preloader">
                        <style
                            dangerouslySetInnerHTML={{
                                __html: `
                                        #__next *,
                                        #__next *:before,
                                        #__next *:after {
                                            transition-duration: 0s !important;
                                        }

                                        body {
                                            overflow: hidden !important;
                                            overflow-y: scroll !important;
                                            height: 100% !important;
                                        }
                                    `,
                            }}
                        />
                    </div>

                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
