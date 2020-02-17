import { useState, useEffect } from "react";

export const useData = () => {

    const [buttons, setButtons] = useState([]);
    const [bars, setBars] = useState([]);
    const [limit, setLimit] = useState(0);
    const [error, setError] = useState("");

    const searchApi = async () => {
        try {
            setError("");
            const data = await fetch('http://pb-api.herokuapp.com/bars').then(res=>res.json());
            setButtons(data.buttons);
            setBars(data.bars);
            setLimit(data.limit);
        } catch (error) {
            setError("Something went wrong.");
        }
    }

    useEffect(()=>{
        searchApi()
    }, []);

    const changeBarValue = (barIndex, value) => {
        bars[barIndex] += value;
        const newBars = bars.map((v,  i)=> {
            let newVal = bars[i];
            if (barIndex == i) {
                newVal = (bars[i] + value);
            }
            return newVal < 0 ? 0 : newVal;
        });
        setBars(newBars);
    }

    return { 
        buttons,
        bars,
        limit,
        changeBarValue
    };
};