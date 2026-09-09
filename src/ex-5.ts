// Create a function 'parseQueryParams' that converts a URL query string into a typed object.

interface SearchFilters {
  search: string;
  page: number;
  isActive: boolean;
}