import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

const main = () => {
  yargs(hideBin(process.argv))
    .strictCommands()
    .parse();
};

export { main };
