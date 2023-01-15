import { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll';


export default function useLocomotiveScroll(start) {

    useEffect(() => {

        if (!start) return;

        const element = document.querySelector('#container');

        const scroll = new LocomotiveScroll({

            el: element,
            smooth: true,
            multiplier: 1,
            class: 'is-reveal'

        }, [start]);

    });
}
