import { createMakeAndWithStyles } from "tss-react";
import createCache from "@emotion/cache";

// export const { makeStyles, useStyles, withStyles } = ((useTheme: any) => 
// {
//   return createMakeAndWithStyles({ useTheme })
// })(useTheme);

export const muiCache = createCache({
  key: "mui",
  prepend: true
});

