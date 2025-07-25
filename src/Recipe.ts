export default interface Recipe {
  description: string;
  reference: string;
  upstream?: string;
  sources?: string[];
  aliases?: string[];
}
