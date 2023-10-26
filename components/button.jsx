/**
 * Button component
 * @param {str} text button text. Default ""
 * @param {str} icon svg path. Default ""
 * @param {str} type button type. Default "button"
 * @param {bool} phamtom button without background. Default true
 * @returns {jsx}
 */
export default function Button({text = "", icon="", type = "button", phamtom = true}) {

  return (
    <button
      type={type}
    >

      {/* Icon */}
      <svg
        viewBox="0 0 24 24"
        className={`
          fill-blue
          w-12
          p-3
          rounded-md
        `}
      >
        <path d={icon} />
      </svg>

    </button>
  )

}