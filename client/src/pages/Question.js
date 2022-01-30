import React, { useEffect, useState } from "react";
import Pet from "./../components/Pet";

export default function Question() {

    const [currentQuestion, setCurrentQuestion] = useState({
        choices: ['','','','']
    });

    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState(<></>);
    const [coins, setCoins] = useState(0);


    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function generateQuestion() {
        let operationType = generateRandomNumber(1, 5);
        let num1 = 0;
        let num2 = 0;
        let symbol = "";
        let result = 0;
        let choices = [];

        switch (operationType) {
            // addition
            case 1:
                num1 = generateRandomNumber(0, 20);
                num2 = generateRandomNumber(0, 20);
                symbol = "+";
                result = num1 + num2;
                break;
            case 2:
                num1 = generateRandomNumber(0, 20);
                num2 = generateRandomNumber(0, 20);
                symbol = "-";
                result = num1 - num2;
                break;
            case 3:
                num1 = generateRandomNumber(0, 5);
                num2 = generateRandomNumber(0, 5);

                if(num2 > num1){
                    let num3 = num1;
                    num1 = num2;
                    num2 = num3;
                }

                symbol = "x";
                result = num1 * num2;
                break;
            case 4:
                num1 = generateRandomNumber(1, 4);
                num2 = generateRandomNumber(1, 4);

                if(num2 > num1){
                    let num3 = num1;
                    num1 = num2;
                    num2 = num3;
                }

                symbol = "/";
                result = num1 / num2;
                break;
            default:
                break;
        }

        choices.push(result);
        choices.push(generateRandomNumber(0, 20));
        choices.push(generateRandomNumber(0, 20));
        choices.push(generateRandomNumber(0, 20));
        choices.sort(() => Math.random() - 0.5);

        let question = "How much is "+num1+symbol+num2+"?";

        return {
            question,
            choices,
            symbol,
            result,
        };
    }

    function chooseOption(choosedAnswer) {
        if (choosedAnswer === currentQuestion.result) {
            setCoins(coins + 10);
            setMessage(
                <div style={styles.messageText}>
                    <p style={styles.marginTop}>Well done</p>
                    <p style={styles.marginTop}>You got 10 pawcoins</p>
                    <div>
                        <img src="images/coin.png" width="45" style={{marginRight: 10, marginTop: 20}}/>
                    </div>
                    <button style={styles.popupButton} onClick={loadNextQuestion}>Next Question</button>
                </div>
            );
            setShowPopup(true); 
        }
        else{
            setMessage(
                <div style={styles.messageText}>
                    <p style={styles.marginTop}>Try Again</p>
                    <p style={styles.marginTop}>The right answer is {currentQuestion.result}</p>
                    <button style={styles.popupButton} onClick={loadNextQuestion}>Next Question</button>
                </div>
            );
            setShowPopup(true); 
        }
    }

    function loadNextQuestion(){
        let question = generateQuestion();
        setCurrentQuestion(question);
        setShowPopup(false);
    }

    useEffect(() => {
        let question = generateQuestion();
        setCurrentQuestion(question);
    }, []);

    return (
        <div style={styles.mainContainer}>

            {
                showPopup ? (<>
                
                <div style={styles.innerWindow}>
                {message}
                </div>

                <div style={styles.popupWindow}></div>

                </>) : (<></>)
            }

            <header style={styles.header}>
                <div style={styles.logo}>
                    <span>NumberPets</span>
                </div>
                <div style={styles.coinCounter}>
                    <img src="images/coin.png" width="30" style={{marginRight: 10}}/>
                    <span style={styles.coinCounterText}>{coins}</span>
                </div>
            </header>

            <div className="container" style={styles.container}>
                <div style={styles.questionBox}>
                    <p style={styles.questionText}>{currentQuestion.question}</p>
                </div>

                <div style={styles.choiceBox}>
                    <div onClick={() => chooseOption(currentQuestion.choices[0])} className="choice-button" style={styles.choiceItem}>
                        <div style={styles.choiceItemText}>{currentQuestion.choices[0]}</div>
                    </div>
                    <div onClick={() => chooseOption(currentQuestion.choices[1])} className="choice-button" style={styles.choiceItem}>
                        <div style={styles.choiceItemText}>{currentQuestion.choices[1]}</div>
                    </div>
                    <div onClick={() => chooseOption(currentQuestion.choices[2])} className="choice-button" style={styles.choiceItem}>
                        <div style={styles.choiceItemText}>{currentQuestion.choices[2]}</div>
                    </div>
                    <div onClick={() => chooseOption(currentQuestion.choices[3])} className="choice-button" style={styles.choiceItem}>
                        <div style={styles.choiceItemText}>{currentQuestion.choices[3]}</div>
                    </div>
                </div>
            </div>

            <aside style={styles.pet}>
                <Pet toy={"dog_toy"} hat={"snake_hat"} type={'cat'} />
            </aside>
        </div>
    );
}

const styles = {
    marginTop: {
        marginTop: 20,
        fontSize: 17,
    },
    popupButton: {
        marginTop: 20,
        padding: 8,
        fontSize: 16,
        color: "#fff",
        borderRadius: 10,
        backgroundColor: "#dd2200",
        border: "none",
        cursor: "Pointer",
    },
    innerWindow: {
        position: "absolute",
        width: 350,
        height: "auto",
        paddingBottom: 30,
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 10,
        left: "50%",
        top: "30%",
        textAlign: "center",
        marginLeft: -125,
        zIndex:6,
    },
    popupWindow: {
        position: "fixed",
        width: "100%",
        height: "100vh",
        backgroundColor: "#000",
        opacity: 0.8,
        zIndex: 4,
    },
    mainContainer: {

    },
    pet: {
        position: "absolute",
        right: 100,
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
        alignItems: "center"
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
        borderRadius: 5,
    },
    choiceItem: {
        width: "48%",
        height: 100,
        margin: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#c9aee6",
        cursor: "pointer",
        borderRadius: 15,
    },
    choiceBox: {
        padding: 20,
        display: "flex",
        flexWrap: "wrap-reverse",

    },
    questionBox: {
        width: "100%",
        height: 300,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        borderRadius: 15,
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