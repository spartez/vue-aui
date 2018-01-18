export const createUniqueId = (prefix) => `${prefix || 'id'}-${Math.random().toString(36).substring(2, 10)}`;
