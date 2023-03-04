import React from 'react'
import Footer from "../../components/Footer";

import styles from './index.module.scss'
import Jobs from "../../components/Jobs";
import JoinUs from "../../components/JoinUs";
import OurBrand from "../../components/OurBrand";
import Banner from "../../components/Banner";
import TextAndImage from "../../components/TextAndImage";
import landingTop from '../../data/landingTop'
import Header from "../../components/Header";

export default function Home() {
    return (
        <div className={styles.home}>
            <Header />
            <TextAndImage data={landingTop}/>
            <Banner />
            <OurBrand />
            <JoinUs />
            <Jobs />
            <Footer />
        </div>
    )
}