import React from "react";
import { useSelector  } from 'react-redux'
import Card from "../Card";
import dataCards from "../dataCards";
import styles from "../home/home.module.css"

function HomeUser() {
    const user = useSelector(state => state.user)
    const cards = dataCards.map((card) => {
        return (
            <div key={card.id}>
                <Card name={card.name} iconName={card.iconName} path={card.path} />
            </div>
        );
    });
    

    return <div className={styles.containerHome}>
        {cards}
    </div>;
}

export default HomeUser;
