import { useSelector } from 'react-redux'
import { selectVisibleOffers } from '../../features/OfferListSlice'
import { RootState } from '../../store'
import OfferItem from '../OfferItem/OfferItem'
import styles from './OfferList.module.scss'
import { OfferProps } from './OfferListProps'

export default function OfferList(): JSX.Element {
    const filters = useSelector((state: RootState) => state.filters)
    const offers = useSelector(((state: RootState) => selectVisibleOffers(state, filters)))

    return (
        <ul className={styles.list}>
            {offers.map((offer: OfferProps) => (<>
                <li key={offer.id}><OfferItem {...offer} /></li>
            </>))}
        </ul>
    )
}
