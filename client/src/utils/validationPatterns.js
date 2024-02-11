// Validation patterns

/**
 * Regular expression pattern for validating aliases.
 * Alias must contain only letters, digits, and underscores.
 * @type {RegExp}
 */
export const aliasPattern = /^[a-zA-Z0-9_]+$/;

/**
 * Regular expression pattern for validating passwords.
 * Password must be at least 8 characters long and contain
 * at least one digit, one lowercase letter, one uppercase letter,
 * and one special character.
 * @type {RegExp}
 */
export const passwordPattern =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
// Password must be at least 8 characters long and contain
// at least one digit, one lowercase letter, one uppercase letter,
// and one special character.
