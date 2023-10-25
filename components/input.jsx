export default function Input ({type, name, placeholder, value, onChange, className}) {
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
        px-0
        opacity-0
        duration-500
        w-0
        ${className}
      `}
    />
  )
}