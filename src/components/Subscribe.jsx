import { MdEmail } from 'react-icons/md';
import InputField from './custom/InputField';
import useFormValidation from './hooks/useFormValidation';
import validationRules from './utils/validationRules';
import SubmitButton from './custom/SubmitButton';
import { ToastContainer } from 'react-toastify';
import ToastNotification from '../components/hooks/ToastNotification'; // Import reusable Toast component

export default function Subscribe() {
  const initialState = {
    email: ''
  };

  const { formData, errors, loading, setLoading, handleChange, validateForm, resetForm } = useFormValidation(initialState, {
    email: validationRules.email
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
    <div className="px-4 sm:px-20 mt-10 sm:mt-28 mb-10 sm:mb-28">
      <div className="p-3 relative">
        <ToastContainer />
      </div>
      <div className="bg-gradient-to-r from-[#1975FF] min-h-[357px] py-[64px] to-[#33A9FF] flex flex-col items-center justify-center p-5 pt-10 md:p-10 rounded-2xl relative w-[100%]">
        <div className="mx-auto max-w-[833px] min-h-[116px] flex-col justify-start items-center gap-4 inline-flex">
          <div className="self-stretch text-center text-white text-3xl font-bold font-['BoxedRound'] leading-[44px]">Enter Your E-mail Address and Stay Updated on Our Journey</div>
          <div className="mx-auto max-w-[713px] text-center text-white text-[17px] md:text-md font-extralight font-orbitron leading-7">
            Join our newsletter to receive regular updates on our progress, product developments, and exciting news from our team.
          </div>

          <form onSubmit={handleSubmit} className="w-full md:w-[549px] relative rounded-[48px] mt-10 gap-4 sm:gap-0">
            <InputField
              label=""
              type="email"
              placeholder="Enter email address"
              icon={MdEmail}
              value={formData.email}
              onChange={handleChange}
              name="email"

              iconClassName="w-[24px] h-[24px] top-[17px] sm:top-[20px] left-[20px] inline-block"

              className="text-neutral-400 bg-white rounded-[48px] h-[60px]  sm:h-[73px] pl-8 pr-[130px] sm:pr-[220px] py-3 text-xl font-normal font-['Advent Pro']"
            />
            <div className="absolute right-[6px] top-[8px] sm:top-[6px]">
              <SubmitButton 
                label="Subscribe Now"
                loading={loading}
                className="right-0 !text-sm text-center sm:px-6 !py-3 sm:!py-4 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-[48px] justify-center sm:justify-start items-center gap-2.5 flex"
              />
            </div>
            {errors.email && <p className="text-red-500 max-w-max p-[2px] px-3 mt-2 bg-white rounded">{errors.email}*</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
