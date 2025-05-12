import { MdEmail } from 'react-icons/md';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import { FaTelegram } from 'react-icons/fa';
import InputField from '../custom/InputField';
import SubmitButton from '../custom/SubmitButton';
import validationRules from '../utils/validationRules';
import useFormValidation from '../hooks/useFormValidation';
import ToastNotification from '../../components/hooks/ToastNotification'; // Import reusable Toast component
import { ToastContainer } from 'react-toastify';
import { useForm, ValidationError } from '@formspree/react';

function JoinOurTeamForm() {

  const [state, handleSubmit] = useForm("xdkgoprv");
  
  const initialState = {
    email: '',
    telegramUsername: '',
    linkedinProfile: '',
    twitterUsername: ''
  };

  const { formData, errors, loading, setLoading, handleChange, validateForm, resetForm } = useFormValidation(initialState, {
    email: validationRules.email,
    telegramUsername: validationRules.telegramUsername,
    linkedinProfile: validationRules.linkedinProfile,
    twitterUsername: validationRules.twitterUsername
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

  if (state.succeeded){
    return (
      <div>
        <p> Your Submission has been recieved </p> <SubmitButton onSubmit={handleForm} />
      </div>
    ) 
  }

  return (
    <div>
      <ToastContainer />
      
      <h2 className="text-center font-['BoxedRound'] text-3xl">Join Our Team</h2>
      <p className="text-gray-700 text-center !text-lg mt-3 sub-heading mb-4">
        At <b>Optimus PRO</b>, we are looking at building a <b>rock-solid</b> team of <b>“A-players”</b>. Think you're a right fit? Join the waitlist. ✅
      </p>
      <form className="space-y-2" onSubmit={handleSubmit}>
        <InputField label="Email" type="email" placeholder="Enter email address" icon={MdEmail} value={formData.email} onChange={handleChange} name="email" />
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
        prefix='telegramUsername'
        field='telegramUsername'
        error={state.errors}
        />
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
        <ValidationError
        prefix='linkedinProfile'
        field='linkedinProfile'
        error={state.errors}
        />
        <InputField
          label="X (Formerly Twitter) Username"
          type="text"
          placeholder="Enter X (Formerly Twitter) username"
          icon={FaTwitter}
          value={formData.twitterUsername}
          onChange={handleChange}
          name="twitterUsername"
          error={errors.twitterUsername}
        />
        <ValidationError
        prefix='twitterUsername'
        field='twitterusername'
        error={state.errors}
        />
        <div className="w-full pt-5">
          <SubmitButton label="Count Me In" loading={loading} />
        </div>
      </form>
    </div>
  );
}

function App(){
  return(
    <JoinOurTeamForm />
  )
}

export default App;