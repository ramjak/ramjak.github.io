import type { GetStaticProps, NextPage } from "next";
import { Button, Fade, Grid, Modal, Pagination } from "@mui/material";
import { ArrowDownward, Close } from "@mui/icons-material";
import { useCallback, useEffect, useMemo, useState } from "react";
import ReactPageScroller from "react-page-scroller";
import styles from "../styles/Home.module.scss";
import { getYearDiff } from "../utils/date";
import { IProject } from "../domains/project";
import ProjectCard from "../components/ProjectCard";
import ProjectRepository from "../repositories/ProjectRepository";
import { ISkill } from "../domains/skill";
import SkillRepository from "../repositories/SkillRepository";
import SkillArticle from "../components/SkillArticle";
import { groupArr } from "../utils/array";
import Intro from "../components/Intro";

interface IHome {
  projects: IProject[];
  skills: ISkill[];
}

export const getStaticProps: GetStaticProps<IHome> = async () => {
  const projectRepo = new ProjectRepository();
  const projects = await projectRepo.getAll();

  const skillRepo = new SkillRepository();
  const skills = await skillRepo.getAll();

  return {
    props: { projects, skills },
  };
};

const Home: NextPage<IHome> = ({ projects, skills }) => {
  const [highlighted, setHighlighted] = useState<IProject | null>(null);
  const closeModal = useCallback(() => {
    setHighlighted(null);
  }, []);

  const [highlightedSkill, setHighlightedSkill] = useState("");

  const [page, setPage] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);
  const isFullWidthMode = useMemo(() => screenWidth < 900, [screenWidth]);

  const goToAboutMe = useCallback(
    () => setPage(isFullWidthMode ? 1 : 0),
    [isFullWidthMode]
  );
  const goToExperience = useCallback(
    () => setPage(isFullWidthMode ? 2 : 1),
    [isFullWidthMode]
  );
  const goToPortfolio = useCallback(
    () => setPage(isFullWidthMode ? 3 : 2),
    [isFullWidthMode]
  );

  const [projectPage, setProjectPage] = useState(1);
  const handleProjectPageChange = useCallback((e, value) => {
    setProjectPage(value);
  }, []);

  return (
    <Grid container={true} className={styles.container}>
      {!isFullWidthMode && (
        <Grid item={true} md={6} component="header">
          <Intro
            goToAboutMe={goToAboutMe}
            goToExperience={goToExperience}
            goToPortfolio={goToPortfolio}
          />
        </Grid>
      )}
      <Grid item md={6} component="main" className={styles.main}>
        <ReactPageScroller
          pageOnChange={setPage}
          containerWidth={!isFullWidthMode ? screenWidth / 2 : screenWidth}
          customPageNumber={page}
        >
          {isFullWidthMode && (
            <section aria-label="intro">
              <Intro
                goToAboutMe={goToAboutMe}
                goToExperience={goToExperience}
                goToPortfolio={goToPortfolio}
              />
            </section>
          )}
          <Grid
            className={`${styles.aboutMe} ${styles.page}`}
            id="aboutMe"
            aria-label="about me"
            container={true}
            component="section"
            alignItems="center"
            justifyContent="center"
            direction="column"
          >
            <div className={styles.imgContainer}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/photo.jpeg" alt="" width="200" height="200" />
            </div>
            <p className={styles.greetings}>Hello, there! 👋</p>
            <p className={styles.desc}>
              I&apos;m a Web developer based in Jakarta with more than{" "}
              {getYearDiff("1 April 2016")} years of experience in front-end and
              back-end.
            </p>
            <Button onClick={goToExperience}>
              <p>Scroll to see more about me</p>
              <ArrowDownward />
            </Button>
          </Grid>
          <Grid
            className={`${styles.skills} ${styles.page}`}
            container={true}
            component="section"
            justifyContent="center"
            direction="column"
            id="skills"
          >
            <h2 className={styles.title}>Experience</h2>
            {skills.map((s) => (
              <SkillArticle
                key={s.name}
                isShowCert={s.name === highlightedSkill}
                skill={s}
                onDetailClick={setHighlightedSkill}
              />
            ))}
          </Grid>
          <Grid
            component="section"
            className={`${styles.portfolio} ${styles.page}`}
            container={true}
            alignItems="center"
            justifyContent="center"
            direction="column"
            spacing={4}
            id="portfolio"
          >
            <Grid item={true} component="h2" className={styles.title}>
              Portfolio
            </Grid>
            <Grid item={true} className={styles.group}>
              <div
                className={styles.slider}
                style={{ left: `${(projectPage - 1) * -100}%` }}
              >
                {groupArr(projects, 4).map((group) => (
                  <Grid
                    key={group[0].name}
                    className={styles.projectsPage}
                    container={true}
                    spacing={4}
                  >
                    {group.map((p) => (
                      <ProjectCard
                        key={p.name}
                        project={p}
                        onClick={setHighlighted}
                      />
                    ))}
                  </Grid>
                ))}
              </div>
            </Grid>
            <Pagination
              className={styles.pagination}
              count={2}
              boundaryCount={0}
              page={projectPage}
              onChange={handleProjectPageChange}
            />
          </Grid>
        </ReactPageScroller>
      </Grid>
      <Modal
        open={!!highlighted}
        onClose={closeModal}
        className={styles.highlight}
        aria-label="Project highlight"
      >
        <Fade in={!!highlighted} timeout={100}>
          <Grid
            container={true}
            justifyContent="center"
            spacing={4}
            onClick={closeModal}
          >
            <Grid item={true} lg={5} className={styles.meta}>
              <h2>{highlighted?.name}</h2>
              {highlighted?.date && (
                <p className={styles.date}>created: {highlighted.date}</p>
              )}
              <p className={styles.desc}>{highlighted?.description}</p>
            </Grid>
            <Grid item={true} lg={7}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={highlighted?.imageUrl || ""} alt="" />
            </Grid>
            <Button
              className={styles.closeButton}
              onClick={closeModal}
              aria-label="close modal"
            >
              <Close fontSize="large" />
            </Button>
          </Grid>
        </Fade>
      </Modal>
    </Grid>
  );
};

export default Home;
