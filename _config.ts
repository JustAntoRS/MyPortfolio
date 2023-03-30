import lume from "lume/mod.ts";
import relativeUrls from "lume/plugins/relative_urls.ts";

const site = lume({});

site
.ignore("README.md")
.copy("static", ".")
.use(relativeUrls())

export default site;
