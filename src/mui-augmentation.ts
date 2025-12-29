// Arquivo "ponte": força o TS a emitir .d.ts no dist
// garantindo que o augmentation seja aplicado quando o pacote for importado.
import "./types/mui";
export {};
