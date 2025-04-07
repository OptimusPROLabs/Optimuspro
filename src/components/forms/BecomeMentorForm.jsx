import { MdEmail } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa6';
import InputField from '../custom/InputField';
import SubmitButton from '../custom/SubmitButton';
import validationRules from '../utils/validationRules';
import useFormValidation from '../hooks/useFormValidation';
import ToastNotification from '../../components/hooks/ToastNotification'; // Import reusable Toast component
import { ToastContainer } from 'react-toastify';

export default function BecomeMentorForm() {
  const initialState = {
    email: '',
    linkedinProfile: ''
  };

  const { formData, errors, loading, setLoading, handleChange, validateForm, resetForm } = useFormValidation(initialState, {
    email: validationRules.email,
    linkedinProfile: validationRules.linkedinProfile
  });

  const handleSubmit = async e => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Use reusable Toast component for success message
      ToastNotification.success('Form submitted successfully!');

      resetForm();
    } catch (error) {
      // Use reusable Toast component for error message
      ToastNotification.error('Error submitting form. Please try again.');
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <ToastContainer />

      <h2 className="text-center font-['BoxedRound'] text-3xl">Become a Mentor</h2>
      <p className="text-gray-700 text-center !text-lg mt-3 sub-heading mb-4">Join our waitlist to share your expertise and guide the next generation of innovators.</p>
      <form className="space-y-2" onSubmit={handleSubmit}>
        <InputField label="Email" type="email" placeholder="Enter email address" icon={MdEmail} value={formData.email} onChange={handleChange} name="email" error={errors.email} />

        <InputField
          label="LinkedIn Profile"
          type="url"
          placeholder="Enter linkedin profile"
          icon={FaLinkedinIn}
          value={formData.linkedinProfile}
          onChange={handleChange}
          name="linkedinProfile"
          error={errors.linkedinProfile}
        />

        <div className="w-full pt-5">
          <SubmitButton label="Sign Me Up" loading={loading} />
        </div>
      </form>
    </div>
  );
}
