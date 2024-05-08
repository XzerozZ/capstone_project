import React, { useEffect } from 'react'
import '@/components/StateComponent/StateComponent.css'
import { stat } from 'fs'
type Props = {}

const StateComponent = (props: Props) => {
    const state = [
        {
            name: 'Alabama',
            abbreviation: 'AL'
        
        },
        {
            name: 'Alaska',
            abbreviation: 'AK'
        },
        {
            name: 'Arizona',
            abbreviation: 'AZ'
        },
        {
            name: 'Arkansas',
            abbreviation: 'AR'
        },
        {
            name: 'California',
            abbreviation: 'CA'
        },
        {
            name: 'Colorado',
            abbreviation: 'CO'
        },
        {
            name: 'Connecticut',
            abbreviation: 'CT'
        },
        {
            name: 'Delaware',
            abbreviation: 'DE'
        },
        {
            name: 'Florida',
            abbreviation: 'FL'
        },
        {
            name: 'Georgia',
            abbreviation: 'GA'
        }

    ]
    const [isDropDownDisplayed, setIsDropDownDisplayed] = React.useState(false)
    const [selectedState, setSelectedState] = React.useState<Record<string,boolean>>(
        state.reduce((obj, state) => ({...obj, [state.abbreviation]: false}), {}))
    console.log(selectedState)
    const numberOfSelectedStates = Object.values(selectedState).filter(Boolean).length
    console.log(numberOfSelectedStates)
    const dropdownRef = React.useRef(null)

    useEffect(() => {
        const onClick = (e: any) => {
            if (e.target !== dropdownRef.current) {
                setIsDropDownDisplayed(false)
            }
        }
        document.addEventListener('click', onClick)
        return () => {
            document.removeEventListener('click', () => {

            })
        }
    }, [])
   
    
  return (
   <>
   <fieldset className='state-dropdown'>
   <button 
   onClick={(e) => {
    e.stopPropagation()
    setIsDropDownDisplayed((prevState) => !prevState)}}>
    {numberOfSelectedStates > 0 ? `${numberOfSelectedStates} selected` : 'Select Your State'}
   </button>
   {isDropDownDisplayed && <div onClick={(e) => e.stopPropagation()} ref={dropdownRef} className='panel'>{state.map((state)=> 
   <fieldset key={state.abbreviation} 
   className={selectedState[state.abbreviation] ? 'selected' : ''}
   >
   <input type='checkbox' id={`input-${state.abbreviation}`} onChange={(e) => setSelectedState({...selectedState,[state.abbreviation]: e.target.checked,})} checked={selectedState[state.abbreviation]}/>
    <label htmlFor={`input-${state.abbreviation}`} >{state.name}</label>
   </fieldset>)}
   </div>}
   </fieldset>
   </>
  )
}
export default StateComponent