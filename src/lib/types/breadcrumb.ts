/**
 * Breadcrumb types for navigation breadcrumbs
 */

export interface Breadcrumb {
  href: string;
  label: string;
  segment: string;
}

export type SegmentNameMap = Record<string, string>;
