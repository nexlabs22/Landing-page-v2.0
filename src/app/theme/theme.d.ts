// src/theme/theme.d.ts
import '@mui/material/styles';
import { Palette, PaletteOptions } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
    interface Theme {
        palette: CustomPalette; // Use the custom palette interface
    }

    interface ThemeOptions {
        palette?: PaletteOptions; // Use the custom palette options interface
    }

    // Extend the Palette interface
    export interface CustomPalette extends Palette {
        // Add your custom properties
        nexCardGradient1_1?: string;
        nexCardGradient1_2?: string;
        nexGradientBorder1_1?: string;
        nexGradientBorder1_2?: string;
        nexArbCardGradient1?: string;
        nexArbCardGradient2?: string;
        nexCardGradient2_1?: string;
        nexCardGradient2_2?: string;
        nexCardGradient3_1?: string;
        nexCardGradient3_2?: string;
        nexOpaqueDot?: string;
    }

    // Extend the PaletteOptions interface
    export interface CustomPaletteOptions extends PaletteOptions {
        // Add your custom properties
        nexCardGradient1_1?: string;
        nexCardGradient1_2?: string;
        nexGradientBorder1_1?: string;
        nexGradientBorder1_2?: string;
        nexArbCardGradient1?: string;
        nexArbCardGradient2?: string;
        nexCardGradient2_1?: string;
        nexCardGradient2_2?: string;
        nexCardGradient3_1?: string;
        nexCardGradient3_2?: string;
        nexOpaqueDot?: string;
    }
}
