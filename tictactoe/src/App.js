import React, { useState } from "react";
import Icon from './Components/Icon';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Container, CardBody, Row, Card, Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";

const ticTacArray = new Array(9).fill("")

const App = () => {

  let [isCross, setIsCross] = useState(true);
  let [winMsg, SetWinMsg] = useState("");
  
  const playAgain = () => {
    setIsCross(true)
    SetWinMsg("")
    ticTacArray.fill("")
  }

  const gameWinner = () => {
    if (ticTacArray[0] == ticTacArray[1] && ticTacArray[0] == ticTacArray[2] && ticTacArray[0] != "") {
      SetWinMsg(ticTacArray[0]) + "has won"
    }
    else if (ticTacArray[3] == ticTacArray[4] && ticTacArray[3] == ticTacArray[5] && ticTacArray[3] != "") {
      SetWinMsg(ticTacArray[3]) + "has won"
    }
    else if (ticTacArray[6] == ticTacArray[7] && ticTacArray[6] == ticTacArray[8] && ticTacArray[6] != "") {
      SetWinMsg(ticTacArray[6]) + "has won"
    }
    else if (ticTacArray[0] == ticTacArray[3] && ticTacArray[0] == ticTacArray[6] && ticTacArray[0] != "") {
      SetWinMsg(ticTacArray[0]) + "has won"
    }
    else if (ticTacArray[1] == ticTacArray[4] && ticTacArray[1] == ticTacArray[7] && ticTacArray[1] != "") {
      SetWinMsg(ticTacArray[1]) + "has won"
    }
    else if (ticTacArray[2] == ticTacArray[5] && ticTacArray[2] == ticTacArray[8] && ticTacArray[2] != "") {
      SetWinMsg(ticTacArray[2]) + "has won"
    }
    else if (ticTacArray[2] == ticTacArray[4] && ticTacArray[2] == ticTacArray[6] && ticTacArray[2] != "") {
      SetWinMsg(ticTacArray[2]) + "has won"
    }
    else if (ticTacArray[0] == ticTacArray[4] && ticTacArray[0] == ticTacArray[8] && ticTacArray[0] != "") {
      SetWinMsg(ticTacArray[0]) + "has won"
    }
  }

  // const changeItem = (index) => {
  //   if (winMsg) {
  //     return toast("game has alredy got over", { type:"success"})
  //   }
  //   if (ticTacArray[index]=="") {
  //     ticTacArray[index] = isCross ? "cross" : "circle"
  //     setIsCross(!isCross)
  //   }
  //   else {
  //     return toast("this is already occupied",{type:"error"})
  //   }
  //   gameWinner()
    
  // }

  
  
  return (

    <div>Logic of who win game</div>
    // <Container className="p-5">
    //     <ToastContainer position="bottom-center"></ToastContainer>
    //   <Row>
        
    //     <Col md={6} className="offset-md-3">
          
    //       {
    //         //javascrit code to display einner msg
    //         winMsg ?
    //           (<h1 className="text-center"> {winMsg} </h1>) :
    //             (<h1>{isCross ? "cross's Turn" : "circle's Turn"}</h1>)
              
    //       }
          
                
    //       <div className="grid">
    //         {ticTacArray.map(( value, index )=>(
    //           <Card onClick={()=>changeItem(index)}>
                
            
              
    //           <CardBody className="box">
    //             <Icon choices={ticTacArray[index]} />
    //           </CardBody>
    //           </Card>
              
    //         ))}

    //       </div>

      
    //     </Col>
    //     </Row>
    // </Container>
    
  )
}


export default App ;
