import React from 'react';
import Game from '../game';
import StatDisplay from './stats';


class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game: new Game,
            firstOption: '',
            secondOption: '',
            stats: '',
            active: false
        };
        this.startGame = this.startGame.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleStop = this.handleStop.bind(this);
    };

    startGame() {
        const options = this.state.game.presentOptions()
        this.setState({ firstOption: options[0], secondOption: options[1], active: true });
    };

    renderStartButton() {
        if (!this.state.active && this.state.stats === '') {
            return <button class="btn btn-outline-primary" onClick={this.startGame}>Start</button>
        }
    };

    handleSelect(e) {
        e.preventDefault();
        this.state.game.selectOption(e.target.innerHTML);
        const newOptions = this.state.game.presentOptions();
        this.setState({ firstOption: newOptions[0], secondOption: newOptions[1]});
    }

    handleStop(e) {
        e.preventDefault();
        const stats = this.state.game.presentStats();
        this.setState({ active: false, stats: stats});

    }

    render() {
        const start = this.renderStartButton();
        const stats = this.state.stats === '' ? '' : <StatDisplay stats={this.state.stats} />
        if (this.state.active) {
            return (
                <div>
                    <h1 className='title'>Which would you rather eat?</h1>
                    <div className='questions-div'>
                        <button className="btn btn-outline-success" onClick={this.handleSelect}>{this.state.firstOption}</button>
                        <button className="btn btn-outline-success" onClick={this.handleSelect}>{this.state.secondOption}</button>
                    </div>
                    
                    <div className='stop-div'>
                        <button className="btn btn-outline-danger" onClick={this.handleStop}>Stop</button>
                    </div>
                </div>
            )}
        else {
            return (
                <div>
                    <h1 className='title'>PollGame</h1>
                    <div className='start-stats-div'>
                        {start}
                        {stats}
                    </div>
                    
                </div>
            )
        }
            
       
           
        
    }


}

export default Display;