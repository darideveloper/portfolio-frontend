import Button from "@/components/button"
import Input from "@/components/input"

export default function Search() {

  const searchIcon = "M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"
  
  return (
    <div 
      className={`
      `}
    >

    <form 
      action=""
      className={`
        flex
        items-center
        justify-between
        group
      `}
    >
      <Input 
        type="search"
        name="search"
        placeholder="Search or project or post"
        className={`
          group-hover:w-72
          group-hover:opacity-80
          group-hover:px-8
        `}
      />

      <Button 
        type="submit"
        icon={searchIcon}
      />
      

    </form>
    </div>
  )
}