import Image from 'next/image'
import styles from './page.module.css'
import './global.css';

const Home = () => {

  return (

    <main className={styles.mainx}>
        
      <h1>זה עובד</h1>

      <h2>אנחנו כאן הם שם</h2>
      <h1>זה קשה. אבל אני חושב שאני מוכן להמבכן הזה</h1>

      <div style={{width: 200, height:120, backgroundColor: 'coral'}}>
          כן
      </div>

    </main>
  )
}

export default Home;