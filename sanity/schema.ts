import { type SchemaTypeDefinition } from "sanity";
import pageInfo from "./schemas/pageInfo";
import social from "./schemas/social";
import projects from "./schemas/projects";
import experience from "./schemas/experience";
import skill from "./schemas/skill";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, social, projects, experience, skill],
};
