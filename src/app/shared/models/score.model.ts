import { GameSymbol } from "@app-enums";

export type Score = {
  [k in GameSymbol]: number;
};
