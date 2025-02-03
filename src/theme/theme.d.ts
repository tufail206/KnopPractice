import {
  PaletteOptions as PaletteOptionsMUI,
  SimplePaletteColorOptions as SimplePaletteColorOptionsMUI,
  ThemeOptions as ThemeOptionsMUI,
  TypeText as TypeTextMUI,
  useColorScheme as UseColorSchemeMUI,
  TypeBackground as TypeBackgroundMUI
} from '@mui/material';

PaletteOptions;
declare module '@mui/material/styles' {
  interface PaletteOptions extends PaletteOptionsMUI {
    mainBg: string;
    sidebarBg: string;

    button: {
      primary: string;
    };

    border: {
      primary: string;
    };

    text: {
      primary: string;
      tertiary: string;
    };
  }

  interface Palette extends PaletteOptions {}

  interface SimplePaletteColorOptions extends SimplePaletteColorOptionsMUI {
    shade1?: string;
 
  }

  interface TypeText extends TypeTextMUI {
    main: string;
    shade1: string;
    tertiary?: string;
    shade2: string;
    linkColor:string;
  }

  interface Shape {
    borderRadius: number;
    borderRadiusSmall: number;
    borderRadiusMedium: number;
    borderRadiusLarge: number;
    borderRadiusRound: number;
  }
  interface ColorScheme {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
  }

  interface ThemeOptions extends ThemeOptionsMUI {
    shape?: Partial<Shape>;
    shadow?: string[];
    colorScheme?: Partial<ColorScheme>;
  }

  interface Theme {
    shape: Shape;
    colorScheme: ColorScheme;
  }

}