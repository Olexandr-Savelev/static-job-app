import { ReactNode } from 'react'
import { useDispatch } from 'react-redux'
import { removeFilter } from '../../features/FilterSlice'
import styles from './FilterItem.module.scss'

interface FilterItemProps {
    key: string,
    filter: string
}

export default function FilterItem(props: FilterItemProps) {

    const dispatch = useDispatch()
    return (
        <div className={styles.item} onClick={() => { dispatch(removeFilter(props.filter)) }}>
            <span className={styles.link}>{props.filter}</span>
            <button className={styles.btn}></button>
        </div>
    )
}
