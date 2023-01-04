import { nanoid } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllFilters } from '../../features/FilterSlice'
import { RootState } from '../../store'
import FilterItem from '../FilterItem/FilterItem'
import styles from './FilterRow.module.scss'
import cn from 'classnames'


export default function FilterRow(): JSX.Element {
    const flters = useSelector((state: RootState) => state.filters)
    const dispatch = useDispatch()
    return (
        <div className={cn(styles.row, {
            [styles.visible]: flters.length > 0
        })}>
            {flters.map((filter) => <FilterItem key={nanoid()} filter={filter} />)}
            <button className={styles.btn} onClick={() => { dispatch(removeAllFilters()) }}>Clear</button>
        </div>
    )
}
