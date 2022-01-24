import React,{ useState } from 'react'


const ClickCounter = () => {

  const [pos, setpos] = useState(0);
  const [neutral, setneutral] = useState(0);
  const [neg, setneg] = useState(0);
  const feedback = (pos/(pos+neutral+neg)*100||0)
      
    return (   
      <div>
      <h2>Feedback:</h2>
      <table>
      <tbody>
      <tr>
      <td>
        <button onClick={() => setpos(pos + 1)}>Positive</button>
        </td>
        <td>
        <button onClick={() => setneutral(neutral + 1)}>Neutral</button>
        </td>
        <td>
        <button onClick={() => setneg(neg + 1)}>Negative</button>
      </td>
      </tr>
      </tbody>
      </table>
          <h2>Statistics:</h2>
            <table>
              <tbody>
              <tr>
              <td><p><b>Positive:</b></p></td><td><p>{pos}</p></td>
              </tr>
              <tr>
              <td><p><b>Neutral:</b></p></td><td><p>{neutral}</p></td>
              </tr>
              <tr>
              <td><p><b>Negative:</b></p></td><td><p>{neg}</p></td>
              </tr>
              <tr>
              <td><p><b>Positive Feedback:</b></p></td><td><p>{feedback}%</p></td>
              </tr>
              </tbody>
            </table>
          </div>
  );
 }


export default ClickCounter