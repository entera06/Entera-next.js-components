import styles from './ProfileCard.module.css'; 

function ProfileCard({ children }) { 
  return (

    <div className={styles.card}> 

      {children} 
    </div>
  );
}

export default ProfileCard;