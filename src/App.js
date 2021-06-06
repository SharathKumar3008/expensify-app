import React from 'react';



import AddOption from './components/AddOption';
import Options from './components/Options';
import Action from './components/Action';
import Header from './components/Header';
import OptionModal from './components/OptionModal';


export default class IndecisionApp extends React.Component {
  state = {
    title: 'Indecision',
    subtitle: 'Put your life in the Hands of a computer',
    options: [],
    selectedOption : undefined
  }

  handleClearSelectedOption = () => {
    this.setState(({selectedOption : undefined}));
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }

  handlePick = () => {
    let options = this.state.options;
    const rendomNum = Math.floor(Math.random() * options.length);
    const option = options[rendomNum];
    this.setState(({selectedOption:option}));
  }

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter Valid value item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This Option already Exists';
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState(prevState => {
      return {
        options: prevState.options.filter(option => option !== optionToRemove)
      };
    });
  }
  componentDidMount() {
    try {
      let json = localStorage.getItem('optioins');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch {
      //Do Nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      let json = JSON.stringify(this.state.options);
      localStorage.setItem('optioins', json);
    }
  }
  
  render() {
    return (
      <div>
        <Header title={this.state.title} subtitle={this.state.subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              handleDeleteOptions={this.handleDeleteOptions}
              options={this.state.options}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal 
          selectedOption = {this.state.selectedOption}
          handleClearSelectedOption = {this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};
