import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume({});

site
.use(postcss())
.copy("static", ".");

export default site;
