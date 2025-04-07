export const validationRules = {
  email: value => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) return 'Email is required';
    if (!emailRegex.test(value)) return 'Please enter a valid email address';
    return '';
  },

  telegramUsername: value => {
    // const telegramRegex = /^@?[a-zA-Z0-9_]{5,32}$/;
    if (!value) return 'Telegram username is required';
    if (!value.startsWith('@')) return 'Telegram username must start with @';
    // if (!telegramRegex.test(value)) {
    //   return 'Please enter a valid Telegram username (5-32 characters, only letters, numbers, and underscores)';
    // }
    return '';
  },

  linkedinProfile: value => {
    const linkedinRegex = /^https:\/\/[a-z]{2,3}\.linkedin\.com\/.*$/;
    if (!value) return 'LinkedIn profile URL is required';
    if (!value.startsWith('https://')) return 'URL must start with https://';
    if (!linkedinRegex.test(value)) return 'Please enter a valid LinkedIn profile URL';
    return '';
  },

  twitterUsername: value => {
    // const twitterRegex = /^@?[a-zA-Z0-9_]{5,32}$/;
    if (!value) return 'X (Formerly Twitter) username is required';
    if (!value.startsWith('@')) return 'X (Formerly Twitter) username must start with @';
    // if (!twitterRegex.test(value)) {
    //   return 'Please enter a valid Telegram username (5-32 characters, only letters, numbers, and underscores)';
    // }
    return '';
  },

  phone: value => {
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!value) return 'Phone number is required';
    if (!phoneRegex.test(value)) return 'Please enter a valid phone number';
    return '';
  },

  username: value => {
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    if (!value) return 'Username is required';
    if (!usernameRegex.test(value)) {
      return 'Username must be 3-20 characters and can only contain letters, numbers, and underscores';
    }
    return '';
  },

  password: value => {
    if (!value) return 'Password is required';
    if (value.length < 8) return 'Password must be at least 8 characters';
    if (!/[A-Z]/.test(value)) return 'Password must contain at least one uppercase letter';
    if (!/[a-z]/.test(value)) return 'Password must contain at least one lowercase letter';
    if (!/[0-9]/.test(value)) return 'Password must contain at least one number';
    return '';
  },

  // url: value => {
  //   try {
  //     new URL(value);
  //     return '';
  //   } catch {
  //     return 'Please enter a valid URL';
  //   }
  // },

  name: value => {
    if (!value) return 'Name is required';
    if (value.length < 2) return 'Name must be at least 2 characters';
    return '';
  },

  city: value => {
    if (!value) return 'City is required';
    if (value.length < 2) return 'City must be at least 2 characters';
    return '';
  },

  country: value => {
    if (!value) return 'Country is required';
    if (value.length < 2) return 'Country must be at least 2 characters';
    return '';
  }
};

export default validationRules;
