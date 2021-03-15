import React from 'react';
import './App.css';

function App({state}) {
    const [isLightOn, setIsLightOn] = React.useState(true);

    function handleClick() {
        setIsLightOn(!this.state.isLightOn);
    }

  return (
      <input
      type="button"
      state={isLightOn ? 'AAN' : 'UIT' }
      onClick={handleClick}
      />
  );
}

/* class App extends React.Component {    //toevoeging van het react Class Component
    constructor(props) {                //zorgt voor het ontvangen van de properties (willekeurige invoerwaarden)
        super(props);                   //alles wat class Component nodig heeft wordt door super doorgegeven.
        this.state = {                  //de status van isLightOn = true
            isLightOn: true
        };

        this.handleClick = this.handleClick.bind(this); // de handleClick methode (zie onder) wordt gebonden
    }                                                   // aan de constructor.

    handleClick() {                                     //de event handler wordt als methode aangemaakt op de class
        this.setState({
            isLightOn: !this.state.isLightOn,
        });
    }

    render() {                                          //de methode wordt meegegeven aan de event listener
        return (
            <button
                type="button"
                onClick={this.handleClick}              // bij klikken wordt de methode handleClick aangeroepen
            >
                {this.state.isLightOn ? 'AAN' : 'UIT'}  // afhankelijk van de situatie geeft hij aan of uit terug
            </button>
        );
    }
}

export default App; */


export default App;
