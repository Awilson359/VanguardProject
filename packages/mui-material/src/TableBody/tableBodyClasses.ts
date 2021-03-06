import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export interface TableBodyClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type TableBodyClassKey = keyof TableBodyClasses;

export function getTableBodyUtilityClass(slot: string): string {
  return generateUtilityClass('MuiTableBody', slot);
}

const tableBodyClasses: TableBodyClasses = generateUtilityClasses('MuiTableBody', ['root']);

export default tableBodyClasses;
