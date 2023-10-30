/**
 * Button component
 * @param {str} text button text. Default ""
 * @param {str} icon svg path. Default ""
 * @param {str} type button type. Default "button"
 * @param {bool} phamtom button without background. Default true
 * @param {str} className button class. Default ""
 * @returns {jsx}
 */
export default function Button({text = "", icon="", type = "button", phamtom = true, className = "", onClick, disabled}) {

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
    >

      {/* Icon */}
      <svg
        viewBox="0 0 24 24"
        className={`
          fill-blue
          w-12
          p-3
          rounded-md
          duration-200
          ${disabled ? 'opacity-10' : 'hover:opacity-60'}
          ${className}
        `}
      >
        <path 
          d={icon} 
        />
      </svg>

    </button>
  )

}