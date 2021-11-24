import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import work1 from "../../static/images/work1.png";
import work2 from "../../static/images/work2.png";
import work3 from "../../static/images/work3.png";
import work4 from "../../static/images/work4.png";
import styles from "./style.module.css";
const Portfolio = () => {
  const works = [
    {
      name: "COVID Data Tracker",
      image: work1,
      github: "https://kbove.github.io/Bootcamp-Project-1/",
    },
    {
      name: "Password Generator",
      image: work2,
      github: "https://lindaluvluv.github.io/PasswordGenerator/",
    },
    {
      name: "Weather Dashboard",
      image: work3,
      github: "https://lindaluvluv.github.io/weather-dashboard/",
    },
    {
      name: "Bebop",
      image: work4,
      heroku: "https://bebopmusic.herokuapp.com/",
    },
  ];
  const renderWorks = () => {
    return works.map((work) => {
      return (
        <Card className={styles.work} key={work.name}>
          <CardMedia component="img" height="200" image={work.image} alt="" />
          <CardContent>
            <Typography variant="h5" gutterBottom component="div">
              {work.name}
            </Typography>
          </CardContent>
          <CardActions>
            {work.github && (
              <Button>
                <a href={work.github} alt="">
                  View
                </a>
              </Button>
            )}
            {work.heroku && (
              <Button>
                <a href={work.heroku} alt="">
                  View
                </a>
              </Button>
            )}
          </CardActions>
        </Card>
      );
    });
  };
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Portfolioes</h2>
      <div className={styles.works}>{renderWorks()}</div>
    </div>
  );
};

export default Portfolio;
