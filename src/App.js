import React, {Component} from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
import './App.css';

class App extends Component {
    state = {
        textLength: 0,
        textValue: '',
        textArray: []
    };

    calculateTextLength = (event) => {
        const input = document.getElementById("input");
        this.setState({textValue : input.value});
        this.setState({textLength: input.value.length});
        this.setState({textArray : input.value.split('')});
    };

    deleteChar = (index) => {
        const input = document.getElementById("input");
        const chars = [...this.state.textArray];
        chars.splice(index, 1);
        this.setState({textArray : chars, textValue : chars.join('')});
        input.value = chars.join('');
    };

    render() {
        let chars = null;
        chars = (
            <div>
                {this.state.textArray.map( (char,index) => {
                    return <CharComponent
                        click={() => {this.deleteChar(index)} }
                        item={char}
                    />

                } )
                }
            </div>
        );
        return (
            <div className="App">
                <div className="container">

                    <ol>
                        <li>Create an input field (in App component) with a change listener which outputs the length of
                            the
                            entered text below it (e.g. in a paragraph).
                        </li>
                        <li>Create a new component (=> ValidationComponent) which receives the text length as a prop
                        </li>
                        <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough"
                            depending
                            on the text length (e.g. take 5 as a minimum length)
                        </li>
                        <li>Create another component (=> CharComponent) and style it as an inline box (=> display:
                            inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
                        </li>
                        <li>Render a list of CharComponents where each CharComponent receives a different letter of the
                            entered text (in the initial input field) as a prop.
                        </li>
                        <li>When you click a CharComponent, it should be removed from the entered text.</li>
                    </ol>
                    <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

                    <div className="text" >
                        <p className={"text_item"}>Write text below</p>
                        <input type="text" className={"text_input"} id={"input"} onChange={this.calculateTextLength}  onLoad={this.load}/>
                        <p className={"text_length"}>{this.state.textLength}</p>
                        <ValidationComponent textLength={this.state.textLength}/>
                        {chars}
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
