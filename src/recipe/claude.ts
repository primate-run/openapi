import type Recipe from "#Recipe";

const docs = "https://docs.anthropic.com/en";
const reference = `${docs}/api`;

const recipe: Recipe = {
  description: "Anthropic",
  aliases: ["claude"],
  reference,
  sources: [
    "messages",
    "models-list",
    "creating-message-batches",
    "files-create",
  ].map(path => `${reference}/${path}`),
};

export default recipe;
