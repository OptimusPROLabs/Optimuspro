import { MdEmail } from 'react-icons/md';
import { FaTelegram } from 'react-icons/fa';
import { FiMapPin, FiGlobe } from 'react-icons/fi';
import { HiUser } from "react-icons/hi2";
import InputField from '../custom/InputField';
import SubmitButton from '../custom/SubmitButton';
import validationRules from '../utils/validationRules';
import useFormValidation from '../hooks/useFormValidation';
import ToastNotification from '../../components/hooks/ToastNotification'; // Import reusable Toast component
import { ToastContainer } from 'react-toastify';
import {
  useForm,
  ValidationError
} from '@formspree/react';

function JoinTheTronForm() {

  const [state, handleSubmit] = useForm("mqaqkgvr");

  const initialState = {
    name: '',
    city: '',
    country: '',
    email: '',
    telegramUsername: ''
  };

  const { formData, errors, loading, setLoading, handleChange, validateForm, resetForm } = useFormValidation(initialState, {
    name: validationRules.name,
    city: validationRules.city,
    country: validationRules.country,
    email: validationRules.email,
    telegramUsername: validationRules.telegramUsername
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
      <ToastContainer />
      
      <h2 className="text-center font-['BoxedRound'] w-full text-xl">
        ✓ TRONS → <span className="text-lg">Join Now</span>
      </h2>
      <p className="text-gray-700 text-center !text-lg mt-3 sub-heading mb-4">Sign up to get updates on our upcoming in-person meetups near you.</p>
      <form className="space-y-2" onSubmit={handleSubmit}>
      <InputField label="Name" type="text" placeholder="Enter your name" icon={HiUser} value={formData.name} onChange={handleChange} name="name" />
      <ValidationError
        prefix='Text'
        field='text'
        error={state.errors}
        />

        <InputField label="City" type="text" placeholder="Enter your city" icon={FiMapPin} value={formData.city} onChange={handleChange} name="city" />
        <ValidationError
        prefix='Text'
        field='text'
        error={state.errors}
        />

        <InputField label="Country" type="text" placeholder="Enter your country" icon={FiGlobe} value={formData.country} onChange={handleChange} name="country"/>
        <ValidationError
        prefix='Text'
        field='text'
        error={state.errors}
        />

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
        />
        <ValidationError
        prefix='TelegramUsername'
        field='telegramUsername'
        error={state.errors}
        />
        <div className="w-full pt-5">
          <SubmitButton label="Keep Me Updated" loading={loading} />
        </div>
      </form>
    </div>
  );
}

function App(){
  return(
    <JoinTheTronForm />
  )
}

export default App;