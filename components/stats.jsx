import React from 'react';

class StatDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //const stats = this.props.stats.map((ele, i) => (
        //    <li>{ele[0]}: {ele[1]} - {ele[2]}</li>
        //));

        const stats = <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th scope='col'>Food</th>
                                <th scope='col'>Times Chosen</th>
                                <th scope='col'>Times Presented</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.stats.map((ele, i) => (
                                <tr>
                                    <td>{ele[0]}</td>
                                    <td>{ele[1]}</td>
                                    <td>{ele[2]}</td>
                                </tr>)
                            )}
                        </tbody>

                       </table> 
        return (
            <div>
                <h2>Your Results</h2>
                {stats}
                <span>Refresh to play again!</span>
            
            </div>
        )
    }
};

export default StatDisplay;