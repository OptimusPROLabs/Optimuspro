export default function InputField({
  label,
  type = 'text',
  placeholder = '',
  icon: Icon = null,
  error,
  className = '',
  iconClassName = '',
  ...inputProps // Spread the rest of the props here
}) {
  return (
    <div className="relative flex flex-col gap-1">
      {label && <label className="block text-gray-700 !text-base sub-heading">{label}</label>}
      {Icon && (
        <Icon
          className={`w-[18px] h-[18px] text-gray-700 absolute top-[40px] left-[15px] ${iconClassName}`}
        />
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full !text-base sub-heading pl-10 px-3 py-2 border bg-[#dadada] text-gray-700 rounded-full focus:outline-none focus:ring focus:border-blue-300 ${
          error ? 'border-red-500 ring-red-200' : ''
        } ${className}`}
        style={{ paddingLeft: Icon ? '3rem' : '0.75rem' }}
        {...inputProps} // Ensure all register props are applied here
      />
      {error && <span className="text-red-500 text-sm mt-1 ml-3">{error}</span>}
    </div>
  );
}
