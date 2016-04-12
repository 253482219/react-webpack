import React from 'react';

let ShowDemo = React.createClass({

    getInitialState: function () {
        return {
            name: this.props.name||'ShowDemo',
        };
    },
    render(){
        return (
                   <div>
                       <p>{'hello ' + this.state.name}</p>
                   </div>
        );
    }
});
export default ShowDemo;
