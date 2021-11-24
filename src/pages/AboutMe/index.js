import styles from "./style.module.css";
import photo1 from "../../static/images/photo1.png";
import photo2 from "../../static/images/photo2.jpeg";
const AboutMe = () => {
  return (
    <div className={styles.aboutme}>
      <h2 className={styles.title}>Bio</h2>
      <p>
        2002年、第27回ホリプロタレントスカウトキャラバン『ピュアガール2002』グランプリ受賞を経て[5]本格的に女優活動を始めた[6]。
        同オーディション参加以前にも、現在の所属芸能事務所であるホリプロ系列の俳優養成所であるホリプロ・インプルーブメント・アカデミーに所属（5期生）し、石神
        国子（いしがみ くにこ）
        名義で映画『ホ・ギ・ラ・ラ』『船を降りたら彼女の島』へ出演しており、芸能活動の経験がある[7]（公式には"石原さとみ名義"で初出演した『わたしのグランパ』をもってデビュー作品としている[8]）。
      </p>
      <h2 className={styles.title}>Latest Photos</h2>
      <img src={photo1} alt="" />
      <img src={photo2} alt="" />
    </div>
  );
};

export default AboutMe;
