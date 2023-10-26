import Button from "@/components/button"
import Input from "@/components/input"
import { useEffect, useState } from "react"

/**
 * Serach bar an icon
 * @returns {jsx}
 */
export default function Search() {

  const searchIcon = "M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"

  const [searchText, setSearchText] = useState("")

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
        onSubmit={(e) => {
          e.preventDefault()
          console.log("searching...")

          if (searchText) {
            window.location.href = `/search?q=${searchText}`
          }
        }}
      >
        <Input
          type="search"
          name="search"
          placeholder="Search a project or post"
          className={`
            w-0
            group-hover:w-64
            group-hover:opacity-80
            group-hover:px-8
          `}
          hidden={true}
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />

        <Button
          type="submit"
          icon={searchIcon}
        />


      </form>
    </div>
  )
}