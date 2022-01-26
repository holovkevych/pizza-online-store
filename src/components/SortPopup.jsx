import React, { useState, useRef, useEffect } from 'react'
//import PropTypes from 'prop-types'

const SortPopup = React.memo(
  function SortPopup({ items, activeSortType, onClickSortType }) {
    const [visiblePopup, setVisiblePopup] = useState(false)
    const sortRef = useRef(null)
    const activeLabel = items.find(obj => obj.type === activeSortType).name
    
    const toggleVisiblePopup = () => {
      setVisiblePopup(!visiblePopup)
    }

    const handleOutsideClick = e => {
      const path = e.path || (e.composedPath && e.composedPath())
      if (!path.includes(sortRef.current)) {
        setVisiblePopup(false)
      }
    }

    const onSelectItem = index => {
      if (onClickSortType) {
        onClickSortType(index)
      }
      setVisiblePopup(false)
    }

    useEffect(()=> {
      document.body.addEventListener('click', handleOutsideClick)
    }, [])

    return (
      <div ref={sortRef} className='sort'></div>     
    )
  }
)

export default SortPopup