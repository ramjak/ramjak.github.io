import React, { useCallback } from "react";
import { Button, Collapse, Grid, LinearProgress } from "@mui/material";
import { Class, Link as LinkIcon } from "@mui/icons-material";
import { ISkill } from "../domains/skill";
import styles from "./SkillArticle.module.scss";

interface ISkillArticle {
  skill: ISkill;
  isShowCert: boolean;
  onDetailClick(id: string): void;
}

const SkillArticle = ({ skill, isShowCert, onDetailClick }: ISkillArticle) => {
  const detailClickHandler = useCallback(() => {
    if (isShowCert) {
      onDetailClick("");
    } else {
      onDetailClick(skill.name);
    }
  }, [isShowCert, onDetailClick, skill.name]);

  return (
    <article className={styles.skill}>
      <Grid container={true} spacing={1}>
        <Grid item={true} flexGrow={1}>
          <div className={styles.skillDesc}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/${skill.logoUrl}`} alt="" />
            {skill.name}
          </div>
          <div className={styles.years}>{skill.experience} years</div>
          <div className={styles.clearfix} />
          <LinearProgress
            variant="determinate"
            value={Math.min((skill.experience / 4) * 100, 100)}
          />
        </Grid>
        <Grid className={styles.actionContainer} item={true}>
          <Button className={styles.neutralBtn} onClick={detailClickHandler}>
            <Class titleAccess="tests and certifications" />
          </Button>
        </Grid>
      </Grid>
      <Collapse in={isShowCert} className={styles.certList}>
        <div className={styles.container}>
          {skill.tests.map((t) => (
            <a key={t.name} href={t.url} target="_blank" rel="noreferrer">
              <LinkIcon />
              <span className={styles.testName}>{t.name}</span>
            </a>
          ))}
        </div>
      </Collapse>
    </article>
  );
};

export default SkillArticle;
