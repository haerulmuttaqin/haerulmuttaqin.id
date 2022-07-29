import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Haerul Muttaqin</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Haerul Muttaqin's Personal Website" />
                <link rel="icon" href="/logo.png" />
                <link href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css" />
            </Head>
            <div className="container-main">
                <header>
                    <div className="container">
                        <nav className="navbar navbar-dark bg-transparenet">
                            <a data-aos="fade-down" data-aos-once="false" data-aos-delay="500" className="navbar-brand" href="#">
                                <img className="navbar-logo" src="/logo.png" />
                            </a>
                            <span data-aos="fade-up" data-aos-once="false" data-aos-delay="600" className="navbar-text ml-auto d-none d-sm-inline-block">
                                www.haerulmuttaqin.id{" "}
                            </span>
                            <span data-aos="fade-up" data-aos-once="false" data-aos-delay="700" className="navbar-text d-none d-sm-inline-block">
                                haerul.muttaqin@gmail.com
                            </span>
                        </nav>
                    </div>
                </header>
                <main className="my-auto">
                    <div className="container">

                        <Image src="/profile-pic.png" width={200} height={200} data-aos="flip-left" />

                        <h1 className="page-title" data-aos="fade-up" data-aos-once="false">We're coming soon</h1>
                        <p className="page-description" data-aos="fade-up" data-aos-once="false" data-aos-delay="300">
                            <b>Haerul Muttaqin</b> 🇮🇩
                            <br />
                            My journey as a programmer, and a creative person.
                            <br />
                            👩‍💻 Learn // Coding // Programming // Sharing // ..
                            <br />
                            Part of @codeglity @pasbe.id @dev.pasbe.id
                            <br />
                            <a href="#/">www.haerulmuttaqin.id</a>
                        </p>
                        <p data-aos="fade-up" data-aos-once="false" data-aos-delay="400">Stay connected</p>
                        <nav className="footer-social-links" data-aos="fade-up" data-aos-once="false" data-aos-delay="500">
                            <a href="https://web.facebook.com/muttaqinhaerul/" className="social-link" target={'_blank'}>
                                <i className="mdi mdi-facebook-box" />
                            </a>
                            <a href="https://www.instagram.com/haerulmuttaqin.id/" target={'_blank'} className="social-link">
                                <i className="mdi mdi-instagram" />
                            </a>
                            <a href="https://www.twitter.com/muttaqinhaerul/" className="social-link" target={'_blank'}>
                                <i className="mdi mdi-twitter" />
                            </a>
                            <a href="mailto:hareul.muttaqin@gmail.com" className="social-link" target={'_blank'}>
                                <i className="mdi mdi-email" />
                            </a>
                            <a href="https://g.dev/haerul" className="social-link" target={'_blank'}>
                                <i className="mdi mdi-google" />
                            </a>
                        </nav>
                    </div>
                </main>
            </div>
        </div>
    )
}
