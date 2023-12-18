import { useAppDispatch, useAppSelector } from './toolkit/hooks'
import { decrement, increment } from './toolkit/slices/counterSlice'

function Talhua() {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()
    return (
        <div>
            <div>
                <button
                    type="button"
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    type="button"
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default Talhua
