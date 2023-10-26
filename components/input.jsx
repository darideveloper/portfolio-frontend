/**
 * Input component
 * @param {str} type input type. Default "text"
 * @param {str} name input name.
 * @param {str} placeholder input placeholder.
 * @param {str} value input value.
 * @param {func} onChange input onChange function.
 * @param {str} className extra classes. Default ""
 * @param {bool} hidden hide input (no opacity, no with, no margins). Default false
 * @returns {jsx}
 */
export default function Input ({type="text", name, placeholder, value, onChange, className="", hidden=false}) {

  return (
    <input 
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`
        h-12
        bg-blue-20
        rounded-md
        duration-500
        ${hidden ? "opacity-0 px-0" : "opacity-100 px-8"}
        ${className}
      `}
    />
  )
}