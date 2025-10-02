import ProfileCard from './components/ProfileCard'; 
import SkillsList from './components/SkillsList';
import Footer from './components/Footer'; 

import styles from './Home.module.css'; 

export default function Home() {
  return (
    
    <div className={styles.mainContainer}> 
      
      <ProfileCard> 
        <h1>Hello, I'm Vince Laurence</h1>
        <p>Welcome to my Next.js profile page project!</p>
        <SkillsList /> 
      </ProfileCard>
      
      <Footer /> 
    </div>
  );
}