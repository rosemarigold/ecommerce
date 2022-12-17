import Logo from '../components/logo/logo.jsx';
import Menu from '../components/menu/menu.jsx';
import Slider from '../components/slider/slider.jsx';
import Newsletter from '../components/newsletter/newsletter.jsx';
import Footer from '../components/footer/footer.jsx';

import { Helmet } from 'react-helmet-async';

export default function Home(){

    return <main>
        <Helmet>
            <meta name="description" content="Ecommerce website home page" />
            <title>vanillacookiestar</title>
        </Helmet>
            
        <Logo />
        <Menu />
        <Slider />
        <Newsletter />
        <Footer />
    </main>
}