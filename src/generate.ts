import type Recipe from "#Recipe";
import root from "@rcompat/package/root";
import { parse } from "yaml";

const src = (await root()).join("src");
const recipes = src.join("recipe");
const spec = src.join("spec");

if (!await spec.exists()) {
  await spec.create();
}

for (const file of await recipes.collect()) {
  const recipe = await file.import("default") as Recipe;
  const upstream = recipe.upstream!;

  if (upstream === undefined) {
    continue;
  }
  const apispec = src.join(`spec${file.debase(recipes)}`).bare(".json");

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
