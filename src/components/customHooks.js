import React, { useState, useEffect } from "react"
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
  AiFillTwitterCircle,
} from "react-icons/ai"
import { FaGoodreads, FaDev } from "react-icons/fa"

const useIcon = (iconDescription) => {
  const [icon, setIcon] = useState(null)
  const fixIcon = (iconDescription) => {
    if (iconDescription === "linkedIn") {
      setIcon(<AiFillLinkedin fontSize="2rem" />)
    } else if (iconDescription === "email") {
      setIcon(<AiOutlineMail fontSize="2rem" />)
    } else if (iconDescription === "goodreads") {
      setIcon(<FaGoodreads fontSize="2rem" />)
    } else if (iconDescription === "github") {
      setIcon(<AiFillGithub fontSize="2rem" />)
    } else if (iconDescription === "twitter") {
      setIcon(<AiFillTwitterCircle fontSize="2rem" />)
    } else if (iconDescription === "dev") {
      setIcon(<FaDev fontSize="2rem" />)
    } else {
      return undefined
    }
  }

  useEffect(() => {
    fixIcon(iconDescription)
  }, [iconDescription])

  return icon
}

export default useIcon
