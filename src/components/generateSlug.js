export const generateSlug = title => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '') // Remove special characters
    .replace(/\s+/g, '-'); // Replace spaces with hyphens
};
