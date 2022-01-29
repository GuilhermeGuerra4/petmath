import React, {useEffect, useState} from "react";
import Pet from "./../components/Pet";

export default function Question(){

    function generateRandomNumber(min, max){
        return Math.floor(Math.random() * (max-min) + min);
    }

    function generateQuestion(){
        let operationType = generateRandomNumber(1, 4);
        let num1 = 0;
        let num2 = 0;
        let symbol = "";
        let result = 0;
        let choices = [];

        switch(operationType){
            // addition
            case 1:
                num1 = generateRandomNumber(0, 20);
                num2 = generateRandomNumber(0, 20);
                symbol = "+";
                result = num1+num2;
            break;
            case 2:
                num1 = generateRandomNumber(0, 20);
                num2 = generateRandomNumber(0, 20);
                symbol = "-";
                result = num1-num2;
            break;
            case 3:
                num1 = generateRandomNumber(0, 5);
                num2 = generateRandomNumber(0, 5);
                symbol = "x";
                result = num1*num2;
            break;
            case 4:
                num1 = generateRandomNumber(1, 4);
                num2 = generateRandomNumber(1, 4);
                symbol = "/";
                result = num1/num2;
            break;
            default:
            break;
        }

        choices.push(result);
        choices.push(generateRandomNumber(0, 20));
        choices.push(generateRandomNumber(0, 20));
        choices.push(generateRandomNumber(0, 20));

        let question = "How much is "+num1+symbol+num2+"?";

        return {
            question,
            choices,
            symbol,
            result,
        };
    }

    function chooseOption(choosedAnswer){
        if(choosedAnswer === currentQuestion.result){
            setCoins({coins: coins+10});
        }
    }

    const [currentQuestion, setCurrentQuestion] = useState({});
    const [coins, setCoins] = useState(0);

    useEffect(() => {
        setCurrentQuestion(generateQuestion());
    }, []);

    return(
        <div style={styles.mainContainer}>
            <header style={styles.header}>
                <div style={styles.logo}>
                    <span>NumberPets</span>
                </div>
                <div style={styles.coinCounter}>
                    <span style={styles.coinCounterText}>{coins}</span>
                </div>
            </header>

            <div className="container" style={styles.container}>
                <div style={styles.questionBox}>
                    <p style={styles.questionText}>{currentQuestion[0]?.question}</p>
                </div>

                <div style={styles.choiceBox}>
                    <div onClick={() => chooseOption(currentQuestion[0]?.choices[0])} className="choice-button" style={styles.choiceItem}>
                        <div style={styles.choiceItemText}>{currentQuestion[0]?.choices[0]}</div>
                    </div>
                    <div onClick={() => chooseOption(currentQuestion[0]?.choices[1])} className="choice-button" style={styles.choiceItem}>
                        <div style={styles.choiceItemText}>{currentQuestion[0]?.choices[1]}</div>
                    </div>
                    <div onClick={() => chooseOption(currentQuestion[0]?.choices[2])} className="choice-button" style={styles.choiceItem}>
                        <div style={styles.choiceItemText}>{currentQuestion[0]?.choices[2]}</div>
                    </div>
                    <div onClick={() => chooseOption(currentQuestion[0]?.choices[3])} className="choice-button" style={styles.choiceItem}>
                        <div style={styles.choiceItemText}>{currentQuestion[0]?.choices[3]}</div>
                    </div>
                </div>  
            </div>

            <aside style={styles.pet}>
                <Pet toy={"dog_toy"} hat={"snake_hat"} type={'dog'}/>
            </aside>
        </div>
    );
}

const styles = {
    mainContainer: {
        
    },
    pet: {
        position: "absolute",
        right: 10,
        bottom: 0,
    },
    header: {
        width: "100%",
        height: 50,
        marginBottom: 20,
        alignItems: "center",
        background: "#E74C3C",
        display: "flex",
    },
    logo: {
        marginLeft: 20,
        color: "#fff",
    },
    coinCounterText: {
        color: "#fff",
        fontWeight: "bold",
    },
    coinCounter: {
        position: "absolute",
        right: 20,
        display: "flex",
        textAlign: "right",
    },
    choiceItemText: {
        textAlign: "center",
        fontWeight: "bold",
        display: "flex",
        backgroundColor: "#fff",
        padding: 10,
        width: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    choiceItem: {
        width: "45%",
        height: 60,
        margin: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue",
        cursor: "pointer",
    },
    choiceBox: {
        padding: 20,
        display: "flex",
        flexWrap: "wrap-reverse",
    },
    questionBox: {
        width: "100%",
        height: 200,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "#ddd",
    },
    questionText: {
        fontSize: 25,
        fontWeight: "bold"
    },
    container: {
        width: "70%",
        height: "auto",
        marginLeft: "1%",
    },

};