const generatePathToProject = (name: string) => `projects/${name}`;

const projectsPaths = {
  base: 'projects',
  project1: generatePathToProject('project1'),
  project2: generatePathToProject('project2'),
};

const paths = {
  base: '/',
  home: '/',
  about: 'about',
  projectsPaths: projectsPaths,
  contactMe: 'contactMe',
  noRouteMatch: '*',
};

export default paths;
