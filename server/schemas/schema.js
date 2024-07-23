// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then import schema types from any plugins that might expose them
import abouts from "./abouts";
import brands from "./brands";
import certifications from "./certifications";
import contact from "./contact";
import portfolio from "./portfolio";
import skills from "./skills";
import testimonials from "./testimonials";
import workExperience from "./workExperience";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    abouts,
    brands,
    certifications,
    contact,
    portfolio,
    skills,
    testimonials,
    workExperience,
    /* Your types here! */
  ]),
});
