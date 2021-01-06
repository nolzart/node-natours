import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel='shortcut icon'
                        type='image/png'
                        href='/img/favicon.png'
                    />
                    <link
                        href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css'
                        rel='stylesheet'
                    />
                    <link
                        href='https://fonts.googleapis.com/css?family=Lato:300,300i,700'
                        rel='stylesheet'
                    />
                    <link href='styles.css' rel='stylesheet' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
