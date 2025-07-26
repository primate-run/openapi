import type Recipe from "#Recipe";
import root from "@rcompat/package/root";
import type Dict from "@rcompat/type/Dict";
import { parse } from "yaml";

const src = (await root()).join("src");
const recipes = src.join("recipe");
const target = "generated/spec";
const spec = src.join(target);
const manifest = src.join("generated/manifest.json");

if (!await spec.exists()) {
  await spec.create();
}

for (const file of await recipes.collect()) {
  const recipe = await file.import("default") as Recipe;
  const upstream = recipe.upstream!;

  if (recipe.private === true || upstream === undefined) {
    continue;
  }
  const apispec = src.join(`${target}${file.debase(recipes)}`).bare(".json");

  if (await apispec.exists()) {
    continue;
  }

  if (!await apispec.directory.exists()) {
    await apispec.directory.create();
  }

  const response = await fetch(upstream);
  await apispec.write(upstream.endsWith(".yml") || upstream.endsWith(".yaml")
    ? JSON.stringify(parse(await response.text()), null, 2)
    : response);
}

const domain = "https://openapi.primate.run";
const specs: Dict = {};

// create manifest file
for (const collected of await spec.collect()) {
  const debased = collected.debase(spec).path.slice(1);
  const load = await collected.json() as any;

  specs[debased.slice(0, -".json".length)] = {
    url: `${domain}/spec/${debased}`,
    title: load?.info?.title ?? "",
    description: load?.info?.description ?? "",
    servers: load.servers ?? {},
  }
}

await manifest.write(JSON.stringify(specs, null, 2));
