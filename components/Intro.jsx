import React from 'react'
import styles from '../styles/Intro.module.css'
import Image from 'next/image'
import Circle from './Circle';

function Intro() {
  return (
		<div className={styles.container}>
			<Circle backgroundColor="pink" top="-50vh" left="-50vh" />
			<Circle backgroundColor="pink"  right="-40vh" />
			<div className={styles.card}>
				<h1 className={styles.title}>
					<span className={styles.brand}>Kefa </span>DIGITAL PRODUCT AGENCY
				</h1>
				<p className={styles.desc}>
					Personal/Agency Website | SEO Optimized Responsive Portfolio Website
					Using Next.js
				</p>
				<button className={styles.button}>Discover</button>
			</div>
			<div className={styles.card}>
				<Image
					src="/img/Avocado.png"
					width="100%"
					height="100%"
					layout="fill"
					objectFit="cover"
					alt=""
				/>
			</div>
		</div>
	);
}

export default Intro