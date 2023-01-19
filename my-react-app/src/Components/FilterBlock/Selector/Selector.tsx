import React from 'react'
import { FILTER_LIST } from '../../../const'
import { nanoid } from 'nanoid'

function SelectFilter() {
    return(<select className="filter_selector">
        {FILTER_LIST.map(item => <option key={nanoid()}>{item}</option>)}
    </select>)
}

export {SelectFilter}