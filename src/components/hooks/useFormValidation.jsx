import { useState, useCallback } from 'react';

export default function useFormValidation(initialState, validationRules) {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(Object.keys(initialState).reduce((acc, key) => ({ ...acc, [key]: '' }), {}));
  const [loading, setLoading] = useState(false);

  const handleChange = useCallback(e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));

    // Handle special cases like Telegram @ prefix
    if (name === 'telegramUsername' && value && !value.startsWith('@')) {
      setFormData(prev => ({
        ...prev,
        [name]: '@' + value
      }));
    }

    // Handle special cases like Twitter @ prefix
    if (name === 'twitterUsername' && value && !value.startsWith('@')) {
      setFormData(prev => ({
        ...prev,
        [name]: '@' + value
      }));
    }
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (validationRules[key]) {
        newErrors[key] = validationRules[key](formData[key]);
      }
    });

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  }, [formData, validationRules]);

  const resetForm = useCallback(() => {
    setFormData(initialState);
    setErrors(Object.keys(initialState).reduce((acc, key) => ({ ...acc, [key]: '' }), {}));
  }, [initialState]);

  return { formData, errors, loading, setLoading, handleChange, validateForm, resetForm, setFormData };
}
