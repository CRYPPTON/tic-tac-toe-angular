import { GameSymbol } from "@app-enums";

export interface Score {
  [GameSymbol.X]: number;
  [GameSymbol.O]: number;
}
