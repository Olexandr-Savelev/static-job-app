import styles from './OfferItem.module.scss'
import { OfferProps } from '../OfferList/OfferListProps'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { addFilter } from '../../features/FilterSlice'


export default function OfferItem(offer: OfferProps) {

    const dispatch = useDispatch()
    return (
        <div className={styles.offer}>
            <div className={styles.left}>
                <img className={styles.logo} src={require(`${offer.logo}`)} />
                <div className={styles.about}>
                    <p className={styles.company}>{offer.company}</p>
                    <p className={styles.position}>{offer.position}</p>
                    <div className={styles.info}>
                        <a className={styles.info_item}>{offer.postedAt}</a>
                        <a className={styles.info_item}>{offer.contract}</a>
                        <a className={styles.info_item}>{offer.location}</a>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                {offer.languages.concat(offer.tools).map((item: string) => {
                    return <a className={styles.link}
                        key={nanoid()}
                        onClick={() => dispatch(addFilter(item))}
                    >{item}</a>
                })}
            </div>
        </div>
    )
}
