import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Bar from '../../components/Bar';
import { useData } from '../../hooks/useData';

const HomePage = () => {

    const [activeBarIndex, setActiveBarIndex] = useState(0);
    const {bars, buttons, limit, changeBarValue} = useData();

    const onChangeActiveBar = (e) => {
        setActiveBarIndex(Number(e.target.value));
    }    

    const onChangeBarValue = (value) => {
        changeBarValue(activeBarIndex, value);
    }

    return (
        <React.Fragment>
            <Container maxWidth="md">
                <h2>Progress Bar Demo</h2>
                {
                    bars.map(bar=><Bar testid="bar" limit={limit} completed={bar}/>)
                }
                <Container style={{flexDirection: 'row'}}>
                    <select defaultValue={activeBarIndex} onChange={onChangeActiveBar} style={{marginTop: '2%'}}>
                        {
                            bars.map((bar, i)=><option key={`option_${i}`} value={i}>{`#progress${i+1}`}</option>)
                        }
                    </select>
                    <span style={{marginLeft: 20}}/>
                    {
                        buttons.map((button, i)=> <button style={{marginRight: 10, paddingRight: 2, paddingLeft: 2}} key={`button_${i}`} onClick={()=>onChangeBarValue(button)}>{button}</button>)
                    }
                </Container>
            </Container>
        </React.Fragment>
    )
}

export default HomePage;