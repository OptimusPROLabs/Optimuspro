export default function SubmitButton({ label, onClick, type = 'submit', disabled = false, loading = false, className = '' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`w-full sub-heading !text-lg px-4 py-3 gradient-background text-white rounded-full hover:opacity-90 transition-opacity duration-200 ${className} ${
        loading ? 'opacity-70 cursor-not-allowed' : ''
      }`}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
          Loading...
        </div>
      ) : (
        label
      )}
    </button>
  );
}
