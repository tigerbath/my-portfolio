import Grid from "@mui/material/Grid";
import projectList from "./projects";
import ProjectCard from "../ProjectSection/index";

const Content = () => {
  const getProjectCard = (projectObj) => {
    return (
      <Grid item xs={12} sm={4}>
        <ProjectCard {...projectObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {projectList.map((projectObj) => getProjectCard(projectObj))}
    </Grid>
  );
};
export default Content;
