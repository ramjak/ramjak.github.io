import React, { useCallback } from "react";
import { Card, CardMedia, Grid } from "@mui/material";
import { IProject } from "../domains/project";
import styles from "./ProjectCard.module.scss";

interface IProjectCard {
  project: IProject;
  onClick(project: IProject): void;
}

const ProjectCard = ({ project, onClick }: IProjectCard) => {
  const onClickThis = useCallback(() => onClick(project), [onClick, project]);
  return (
    <Grid
      className={styles.project}
      item={true}
      md={6}
      component="article"
      aria-label={project.shortDesc || project.name}
      role="button"
      onClick={onClickThis}
    >
      <Card elevation={0} className={styles.card}>
        <CardMedia
          component="img"
          classes={{ img: styles.portfolioImg }}
          image={project.imageUrl}
          height={175}
        />
      </Card>
    </Grid>
  );
};

export default ProjectCard;
