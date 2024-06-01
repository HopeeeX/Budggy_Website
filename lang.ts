import { Inter, Noto_Naskh_Arabic } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const noto = Noto_Naskh_Arabic({subsets: ["arabic"], fallback: ["Inter"]})