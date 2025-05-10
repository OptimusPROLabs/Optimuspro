import { MdEmail } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaTelegram } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import ToastNotification from '../../components/hooks/ToastNotification'; // Import reusable Toast component
import useFormValidation from '../hooks/useFormValidation';
import validationRules from '../utils/validationRules';
import InputField from '../custom/InputField';
import SubmitButton from '../custom/SubmitButton';
import { useForm, ValidationError } from '@formspree/react';

function LetBuildForm() {

  const [state, handleSubmit ] = useForm("mldbeoqr");

  const initialState = { 
    email: '',
    telegramUsername: '',
    linkedinProfile: ''
  };

  const { formData, errors, loading, setLoading, handleChange, validateForm, resetForm } = useFormValidation(initialState, {
    email: validationRules.email,
    telegramUsername: validationRules.telegramUsername,
    linkedinProfile: validationRules.linkedinProfile
  });

  const handleForm = async e => {
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

  if(state.succeeded){
    return <SubmitButton onSubmit={handleForm} />
  }
 
  return (
    <div>
      {/* Toast Container to show notifications */}
      <ToastContainer />

      <h2 className="text-center font-['BoxedRound'] text-3xl">Let's Build</h2>
      <p className="text-gray-700 text-center !text-lg mt-3 sub-heading mb-4">Founders, join the waitlist for exclusive updates on co-building opportunities, events, and networking.</p>

      <form className="space-y-2" onSubmit={handleSubmit}>
        <InputField label="Email" type="email" placeholder="Enter email address" icon={MdEmail} value={formData.email} onChange={handleChange} name="email"  />
        <ValidationError
      prefix='Email'
      field='email'
      error={state.errors}
      />

        <InputField
          label="Telegram Username"
          type="text"
          placeholder="Enter telegram username"
          icon={FaTelegram}
          value={formData.telegramUsername}
          onChange={handleChange}
          name="telegramUsername"
          error={errors.telegramUsername}
        />
         <ValidationError
      prefix='TelegramUsername'
      field='telegramUsername'
      error={state.errors}
      />

        <InputField
          label="LinkedIn Profile"
          type="text"
          placeholder="Enter linkedin profile"
          icon={FaLinkedinIn}
          value={formData.linkedinProfile}
          onChange={handleChange}
          name="linkedinProfile"
          error={errors.linkedinProfile}
        />
         <ValidationError
      prefix='LinkedinProfile'
      field='linkedinProfile'
      error={state.errors}
      />

        <div className="w-full pt-5">
          <SubmitButton label="Let's Build" loading={loading} />
        </div>
      </form>
    </div>
  );
}

function App(){
  return(
    <LetBuildForm />
  )
}

export default App;