import { useEffect, useRef, useState } from "react";

interface TimeProps {
    time: number,
    handleFunc: () => void 
}

const useTimeout = ({time = 2000, handleFunc = () => {} }: TimeProps) => {

    const [enableTime, setEnableTime] = useState(false)
    const isMounted = useRef(true)

    useEffect(() => {

        if(!enableTime)return;

        if(isMounted.current){
            setTimeout(() => {
                if( isMounted.current ){
                    handleFunc()
                }
            }, time);  
        }
        return () => {
            isMounted.current = false
        }
    }, [enableTime])

    const enable = () => {
        setEnableTime( true )
        // setEnableTime( false )
    }

    return {
        enable
    }
}

export default useTimeout;