import React from 'react'
import { filterList } from '../../../const'
import { nanoid } from 'nanoid'

function SelectFilter() {
    return(<select className="filter_selector">
        {filterList.map(item => <option key={nanoid()}>{item}</option>)}
    </select>)
}

export {SelectFilter}