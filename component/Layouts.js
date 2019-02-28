import Head from 'next/head'
import '../app/style/global.scss'

export default ({ children, title = 'This is the default title' }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <link rel='icon' type='image/png' href='https://files.fm/thumb_show.php?i=7dfurh9j' />
        </Head>
        <header className="textTengah">
            <img src="https://files.fm/thumb_show.php?i=7dfurh9j" alt="my image" width='200' height='200' />
        </header>
        {children}

    </div>
)