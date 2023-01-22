import React from 'react'
import { FILTER_LIST } from '../../../const'
import { nanoid } from 'nanoid'
import { SELECT_INTERFACE } from '../../../interface'

function SelectFilter({selectValue, valueSelectRatting}:SELECT_INTERFACE) {

    return(<select value={valueSelectRatting} className="filter_selector" onChange={selectValue}>
        {FILTER_LIST.map(item => <option key={nanoid()}>{item}</option>)}
    </select>)
}

export {SelectFilter}