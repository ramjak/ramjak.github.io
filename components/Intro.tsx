import React, {useCallback} from "react";
import { Button, Grid } from "@mui/material";
import { Download, Email, GitHub, LinkedIn } from "@mui/icons-material";
import styles from "./Intro.module.scss";

interface IIntro {
  goToAboutMe(): void;
  goToExperience(): void;
  goToPortfolio(): void;
}

const Intro = (props: IIntro) => {
  const downloadResume = useCallback(() => {
    window.open('/Resume - Rama Jakaria.pdf', '_blank');
  }, [])

  return (
    <Grid
      className={styles.intro}
      container={true}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <nav className={styles.nav}>
        <ul>
          <li>
            <Button onClick={props.goToAboutMe}># about me</Button>
          </li>
          <li>
            <Button onClick={props.goToExperience}># experience</Button>
          </li>
          <li>
            <Button onClick={props.goToPortfolio}># portfolio</Button>
          </li>
        </ul>
      </nav>
      <Grid item={true} className={styles.headline}>
        <h1>&lt; Rama Jakaria /&gt;</h1>
        <p>A Web Developer</p>
        <Button variant="outlined" className={styles.download} onClick={downloadResume}>
          Resume &nbsp; <Download />
        </Button>
      </Grid>
      <section className={styles.contacts} aria-label="contacts">
        <a
          href="https://www.linkedin.com/in/ramjak/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn /> ramjak
        </a>
        <a href="https://github.com/ramjak" target="_blank" rel="noreferrer">
          <GitHub /> ramjak
        </a>
        <a
          href="mailto:rama.jakaria@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Email /> rama.jakaria@gmail.com
        </a>
      </section>
    </Grid>
  );
};

export default Intro;
