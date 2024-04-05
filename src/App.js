import {Component} from 'react'

import './App.css'

class App extends Component {
  state = {isClick: false, textEl: ''}

  onClickEdit = () => {
    this.setState(prevState => ({isClick: !prevState.isClick}))
  }

  onChangeText = event => {
    this.setState({textEl: event.target.value})
  }

  render() {
    const {isClick, textEl} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Editable Text Input</h1>
          {isClick === true ? (
            <div className="editable-container">
              <p className="text">{textEl}</p>
              <button
                type="button"
                className="editable-btn"
                onClick={this.onClickEdit}
              >
                Edit
              </button>
            </div>
          ) : (
            <div className="editable-container">
              <input
                type="text"
                className="input-el"
                value={textEl}
                onChange={this.onChangeText}
              />
              <button
                type="button"
                className="editable-btn"
                onClick={this.onClickEdit}
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
